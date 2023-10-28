import React from "react";
import classnames from "classnames";
// import { Info } from "techziaicons";
// import Tooltip, { TooltipProps } from "./Tooltip";

interface LabelProps {
  children: React.ReactNode;
  className?: string;
  htmlFor?:string
  required?: boolean;
  helpIconProps?: {
    onClick?: () => void;
    icon?: React.ElementType; // Define as React.ElementType
    // tooltipProps?: TooltipProps;
    className?: string;
  } | null;
}

const Label: React.FC<LabelProps> = ({
  children,
  className = "",
  required = false,
  helpIconProps,
  ...otherProps
}) => {
  const {
    onClick,
    icon,
    // tooltipProps,
    className: helpIconClassName,
    ...otherHelpIconProps
  } = helpIconProps || {};

//   const HelpIcon = icon || Info;
const HelpIcon = icon || icon;

  return (
    <label
      className={classnames(
        "techzia-ui-label techzia-ui-flex techzia-ui-items-center",
        className
      )}
      {...otherProps}
    >
      {children}
      {required && <span aria-hidden="true">*</span>}
      {helpIconProps && (
        // <Tooltip {...tooltipProps} disabled={!tooltipProps}>
          <span
            className={classnames("techzia-ui-label__help-icon-wrap", {
              [helpIconClassName || ""]: helpIconClassName,
            })}
            onClick={onClick}
          >
            {HelpIcon && typeof HelpIcon === 'function' ? <HelpIcon size={16} {...otherHelpIconProps} /> : null}
          </span>
        // </Tooltip>
      )}
    </label>
  );
};

export default Label;
