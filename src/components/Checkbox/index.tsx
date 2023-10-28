import React, { forwardRef, HTMLProps } from "react";
import { useId } from "@reach/auto-id";
import classnames from "classnames";
import Label from "src/components/Label";
import { hyphenize } from "src/utils";

interface CheckboxProps extends HTMLProps<HTMLInputElement> {
    label?: string;
    error?: string;
    className?: string;
    required?: boolean;
    labelProps?: Record<string, unknown>;
    children?: string;
    variant?: "primary" | "secondary" | "default";
    size?: string | "small" | "medium" | "large" | any;
}

const CHECKBOX_TYPES: { [key: string]: string } = {
    primary: "primary",
    secondary: "secondary",
    default : "default"
  };

  const SIZES: { [key: string]: string } = {
    small: "small",
    medium: "medium",
    large: "large",
  };

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    (
        {
            label = "",
            error = "",
            className = "",
            required = false,
            style = "default",
            labelProps,
            children,
            variant = CHECKBOX_TYPES.default,
            size = SIZES.medium,
            ...otherProps
        },
        ref
    ) => {
        const id = useId(otherProps.id);
        const errorId = `error_${id}`;
        const renderLabel = label || children;
            return (
                <div className={classnames(["techzia-ui-checkbox__wrapper", '', {
                    "techzia-ui-checkbox__wrapper" : variant == CHECKBOX_TYPES.default,
                    "techzia-ui-checkbox__wrapper_primary" : variant == CHECKBOX_TYPES.primary
                }])}>
                    <div
                     className={classnames(["", "", {
                        "techzia-ui-checkbox__container" : variant == CHECKBOX_TYPES.default,
                        "techzia-ui-checkbox__container_primary" : variant == CHECKBOX_TYPES.primary
                    }])}
                    
                    // className="techzia-ui-checkbox__container "
                    >
                        <input
                            aria-invalid={!!error}
                            // className="techzia-ui-checkbox"
                            className={classnames(["", {
                                "techzia-ui-checkbox" : variant == CHECKBOX_TYPES.default,
                                "techzia-ui-checkbox_primary" : variant == CHECKBOX_TYPES.primary,
                                "techzia-ui-checkbox_primary--size-medium" : size == SIZES.medium,
                                "techzia-ui-checkbox_primary--size-large" : size == SIZES.large,
                            }])}
                            data-cy={`${hyphenize(renderLabel)}-checkbox-input`}
                            id={id}
                            name={id}
                            ref={ref}
                            required={required}
                            type="checkbox"
                            {...otherProps}
                        />
                        {renderLabel && (
                            <Label
                                data-cy={`${hyphenize(renderLabel)}-checkbox-label`}
                                htmlFor={id}
                                required={required}
                                {...labelProps}
                            >
                                {renderLabel}
                            </Label>
                        )}
                    </div>
                    {!!error && (
                        <p
                            className="techzia-ui-input__error"
                            data-cy={`${hyphenize(renderLabel)}-checkbox-error`}
                            id={errorId}
                        >
                            {error}
                        </p>
                    )}
                </div>

            );
        }
   
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
