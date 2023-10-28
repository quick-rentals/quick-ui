import React, { useEffect, useRef, ReactNode } from "react";
import { isEmpty } from "ramda";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  rootId?: string;
  el?: keyof HTMLElementTagNameMap;
}

const Portal: React.FC<PortalProps> = ({ children, rootId = "root-portal", el = "div" }) => {
  const target = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let container = document.getElementById(rootId);
    if (!container) {
      container = document.createElement(el);
      container.setAttribute("id", rootId);
      document.body.appendChild(container);
    }

    if (target.current) {
      container.appendChild(target.current);
    }

    return () => {
      if (target.current) {
        target.current.remove();
      }

      if (container && isEmpty(container.childNodes)) {
        container.remove();
      }
    };
  }, [rootId, el]);

  if (!target.current) {
    target.current = document.createElement(el);
  }

  return createPortal(children, target.current);
};

export default Portal;
