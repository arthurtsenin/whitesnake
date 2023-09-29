import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";

import styles from "./Button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "transparent";
  size?: "sm" | "md" | "lg" | "xl";
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  ...props
}) => {
  return (
    <button className={classNames(styles[variant], styles[size])} {...props}>
      {children}
    </button>
  );
};
