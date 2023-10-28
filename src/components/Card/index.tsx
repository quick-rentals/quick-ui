import classnames from "classnames";
import React, { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "default";
  unstyled?: boolean
};


// const CHECKBOX_TYPES: { [key: string]: string } = {
//   primary: "primary",
//   secondary: "secondary",
//   default : "default"
// };


const Card: React.FC<CardProps> = ({
  className = "",
  children,
  unstyled = false,
  variant = "default",
  ...otherCardProps
}) => {
  return (
    <div
      className={classnames(
        "techzia-ui-card__wrapper",
        className
      )}
      {...otherCardProps}
    >
      {children}
    </div>
  );
};

export default Card;
