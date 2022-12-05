import cn from "clsx";
import RouterLink from "next/link";
import React, { forwardRef, ReactNode } from "react";

export interface LinkProps extends React.HTMLAttributes<HTMLElement> {
  href: string;
  children: ReactNode;
  as?: React.ElementType;
  active?: boolean;
  className?: string;
  activeClassname?: string;
  onClick?: () => void;
}

export const Link = forwardRef<HTMLLinkElement, LinkProps>(
  (
    {
      children,
      href,
      className,
      activeClassname,
      active,
      as = "a",
      onClick,
      ...props
    },
    ref
  ) => {
    const Element = as;

    return (
      <RouterLink
        style={{ color: "inherit", textDecoration: "inherit" }}
        href={href}
        {...props}
        passHref
      >
        <Element
          ref={ref}
          onClick={onClick}
          className={cn(`
            ${className}
            ${active && activeClassname}
          `)}
        >
          {children}
        </Element>
      </RouterLink>
    );
  }
);
