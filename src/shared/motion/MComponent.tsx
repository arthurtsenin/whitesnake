import { HTMLMotionProps, motion } from "framer-motion";
import React, {
  FC,
  forwardRef,
  ForwardRefExoticComponent,
  ReactHTML,
  ReactNode,
  RefAttributes,
  RefObject,
} from "react";

type ElementProps = HTMLMotionProps<keyof ReactHTML>;

type ComponentPropsType = {
  ref?: RefObject<HTMLElement>;
  as?: keyof ReactHTML;
  children: ReactNode;
} & ElementProps;

type MComponentProps = ForwardRefExoticComponent<
  Omit<ComponentPropsType, "ref"> & RefAttributes<HTMLElement>
>;

export const MComponent: MComponentProps = forwardRef(
  ({ as = "div", children, ...rest }, ref) => {
    const Tag = motion[as as keyof typeof motion] as FC<ElementProps>;

    return (
      <Tag ref={ref} {...rest}>
        {children}
      </Tag>
    );
  },
);
