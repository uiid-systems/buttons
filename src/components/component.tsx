import {
  cx,
  booleanProps,
  styleProps,
  type StyleProps,
  type RenderProp,
} from "@uiid/core";
import { isValidElement, cloneElement } from "react";

import * as properties from "../properties";
import type { VariantProps } from "../types";

export type ComponentProps = {
  render?: (() => RenderProp) | RenderProp;
} & React.HTMLAttributes<HTMLElement> &
  React.PropsWithChildren &
  StyleProps<typeof properties> &
  VariantProps;

export const Component = ({
  hidden,
  render,
  className,
  style,
  children,
  ...props
}: ComponentProps) => {
  const element = typeof render === "function" ? render() : render;
  const styles = { ...styleProps(props, properties), ...style };
  const variants = booleanProps({ hidden });

  if (isValidElement(element)) {
    return cloneElement(element, {
      ...props,
      children: children ?? element.props.children,
      className: cx(variants, className, element.props.className),
      style: styles,
    });
  }

  return (
    <div
      data-uiid-template="component"
      className={cx(variants, className)}
      style={styles}
      {...props}
    >
      {children}
    </div>
  );
};

Component.displayName = "Component";
