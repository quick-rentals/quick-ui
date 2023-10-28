import React, { forwardRef,  HTMLProps } from "react";

interface PortalProps extends HTMLProps<HTMLDivElement> {
  children: React.ReactNode;
}

const Portal = forwardRef<HTMLDivElement, PortalProps>(({ children, ...otherProps }, ref) => (
  <div
    data-cy="neeto-backdrop"
    data-testid="neeto-backdrop"
    ref={ref}
    {...otherProps}
  >
    {children}
  </div>
));

export default Portal;
