import React from "react";
import classnames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
// import PropTypes from "prop-types";
// import { Link } from "react-router-dom";
// import { Spinner } from "atoms";
// import Tooltip from "./Tooltip";

interface ButtonProps {
  icon?: string | React.ReactNode;
  iconPosition?: "left" | "right";
  iconSize?: number;
  label?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  to?: string;
  type?: "button" | "reset" | "submit";
  style?: "primary" | "secondary" | "danger" | "danger-text" | "text" | "link";
  fullWidth?: boolean;
  className?: string;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  href?: string;
  tooltipProps?: any; // You should define a more specific type for tooltipProps
  children?: React.ReactNode;
}

const BUTTON_STYLES: { [key: string]: string } = {
  primary: "primary",
  secondary: "secondary",
  danger: "danger",
  danger_text: "danger-text",
  text: "text",
  link: "link",
};

const SIZES: { [key: string]: string } = {
  small: "small",
  medium: "medium",
  large: "large",
};

const ICON_POSITIONS: { [key: string]: string } = {
  left: "left",
  right: "right",
};

const BUTTON_TYPES: { [key: string]: string } = {
  button: "button",
  reset: "reset",
  submit: "submit",
};

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      icon = null,
      iconPosition = ICON_POSITIONS.right,
      iconSize = 16,
      label = "",
      loading = false,
      onClick = () => {},
      to = "",
      type = BUTTON_TYPES.button,
      style = BUTTON_STYLES.primary,
      fullWidth = false,
      className = "",
      disabled = false,
      size = SIZES.medium,
      href = "",
      tooltipProps = null,
      children,
      ...otherProps
    },
    ref
  ) => {
    let Parent: React.ElementType = motion.button;
    let elementSpecificProps: { [key: string]: string } = { type };

    const renderLabel = label || children;

    if (!disabled) {
      if (to) {
        // Parent = Link;
        elementSpecificProps = { to };
      } else if (href) {
        Parent = motion.a;
        elementSpecificProps = { href };
      }
    }

    const handleClick = (e: React.MouseEvent) => {
      if (!loading && !disabled) {
        onClick(e);
      }
    };

    // const Icon =
    // typeof icon === "string"
    //   ? () => (
    //       <i
    //         className={classnames("quick-ui-btn__icon", [icon])}
    //         data-testid="class-icon"
    //       />
    //     )
    //   : icon || React.Fragment;

    return (
      // <Tooltip disabled={!tooltipProps} {...tooltipProps}>
        <Parent
          disabled={disabled}
          ref={ref}
          className={classnames("techzia-ui-btn", [className], {
            "techzia-ui-btn--style-primary": style === BUTTON_STYLES.primary,
            "techzia-ui-btn--style-secondary": style === BUTTON_STYLES.secondary,
            "techzia-ui-btn--style-danger": style === BUTTON_STYLES.danger,
            "techzia-ui-btn--style-danger-text": style === BUTTON_STYLES.danger_text,
            "techzia-ui-btn--style-text": style === BUTTON_STYLES.text,
            "techzia-ui-btn--style-link": style === BUTTON_STYLES.link,
            "techzia-ui-btn--size-medium": size === SIZES.medium,
            "techzia-ui-btn--size-large": size === SIZES.large,
            "techzia-ui-btn--width-full": fullWidth,
            "techzia-ui-btn--icon-left": iconPosition === ICON_POSITIONS.left,
            "techzia-ui-btn--icon-only": !renderLabel,
            disabled,
          })}
          onClick={handleClick}
          {...elementSpecificProps}
          {...otherProps}
        >
          {renderLabel && <span>{renderLabel}</span>}
          <AnimatePresence mode='wait'>
            {icon ? (
              /* When Icon is present, animate between the icon and the spinner*/
              // loading ? (
              //   <Spinner
              //     aria-hidden={true}
              //     className="quick-ui-btn__spinner"
              //     key="1"
              //     size={16}
              //   />
              // ) : (
              //   <Icon
              //     aria-hidden={true}
              //     className="quick-ui-btn__icon"
              //     key="2"
              //     size={iconSize}
              //   />
              // )
              <></>
            ) : (
              /* When Icon is not present, animate the margin from 0 to the needed value*/
              loading && (
                <motion.div
                  animate={{ width: "auto", scale: 1 }}
                  className="techzia-ui-btn__spinner-wrapper"
                  exit={{ width: 0, scale: 0 }}
                  initial={{ width: 0, scale: 0 }}
                  transition={{ bounce: false }}
                >
                  {/* <Spinner
                    aria-hidden={true}
                    className="neeto-ui-btn__spinner"
                    key="3"
                    size={16}
                  /> */}
                </motion.div>
              )
            )}
          </AnimatePresence>
        </Parent>
      // </Tooltip>
    );
  }
);

Button.displayName = "Button";

export default Button;
