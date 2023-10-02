import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";

import styles from "./Button.module.css";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary" | "transparent";
};

export const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  ...props
}) => {
  return (
    <button className={classNames(styles.basis, styles[variant])} {...props}>
      {children}
    </button>
  );
};
