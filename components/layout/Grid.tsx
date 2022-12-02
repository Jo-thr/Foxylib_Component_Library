import cn from "clsx";
import React, { ReactNode } from "react";

export enum GridNodeType {
  DIV = "div",
  SECTION = "section",
  NAV = "nav",
  LIST = "ul",
  LIST_ELEMENT = "li",
}

export interface GridElementProps {
  readonly id?: string;
  readonly children?: ReactNode;
  readonly className?: string;
  readonly as?: GridNodeType;
  readonly padding?: boolean;
  readonly spacing?: boolean;
  readonly wrapper?: boolean;
  readonly separator?: boolean;
  readonly small?: boolean;
  readonly role?: string;
}

// SPACING
const ROW_MOBILE_SPACING = "py-20";
const ROW_TABLET_SPACING = "sm:py-4";
const ROW_DESKTOP_SPACING = "md:py-[12.5rem]";
const CONTAINER_MOBILE_SPACING = "gap-y-6";
const CONTAINER_TABLET_SPACING = "sm:gap-y-4";
const CONTAINER_DESKTOP_SPACING = "md:gap-y-9";

//PADDING
const ROW_MOBILE_PADDING = "px-4";
const ROW_TABLET_PADDING = "sm:px-4";
const ROW_DESKTOP_PADDING = "md:px-8";
const CONTAINER_MOBILE_PADDING = "px-10";
const CONTAINER_TABLET_PADDING = "sm:px-4";
const CONTAINER_DESKTOP_PADDING = "md:px-12";

const ROW_MAX_WIDTH = "max-w-[120rem] mx-auto"; //1920px
const CONTAINER_MAX_WIDTH = "max-w-[90rem] mx-auto"; //1440px

export const Row = ({
  children,
  className = "",
  as = GridNodeType.DIV,
  spacing = false,
  padding = false,
  ...props
}: GridElementProps) => {
  const NodeType = as;
  const hasBackground = className.includes("bg-");

  return (
    <NodeType
      className={cn(`
            box-border
            flex
            w-full
            flex-wrap
            justify-center
            ${ROW_MAX_WIDTH}
            ${!hasBackground && "bg-background-light"}
            ${
              padding &&
              `${ROW_MOBILE_PADDING} ${ROW_TABLET_PADDING} ${ROW_DESKTOP_PADDING}`
            }
            ${
              spacing &&
              `${ROW_MOBILE_SPACING} ${ROW_TABLET_SPACING} ${ROW_DESKTOP_SPACING}`
            }
            ${className}
          `)}
      {...props}
    >
      {children}
    </NodeType>
  );
};

export const Container = ({
  children,
  className,
  as = GridNodeType.DIV,
  spacing = false,
  padding = false,
  small = false,
  separator = false,
  ...props
}: GridElementProps) => {
  const NodeType = as;

  return (
    <NodeType
      className={cn(`
            container
            box-border
            ${CONTAINER_MAX_WIDTH}
            ${small && "max-w-[720px]"}
            ${
              padding &&
              `${CONTAINER_MOBILE_PADDING} ${CONTAINER_TABLET_PADDING} ${CONTAINER_DESKTOP_PADDING}`
            }
            ${
              spacing &&
              `${CONTAINER_MOBILE_SPACING} ${CONTAINER_TABLET_SPACING} ${CONTAINER_DESKTOP_SPACING}`
            }
            ${className}
          `)}
      {...props}
    >
      {children}
    </NodeType>
  );
};
