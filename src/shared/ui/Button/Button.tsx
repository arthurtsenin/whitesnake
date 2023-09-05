import classNames from "classnames";
import { FC, ReactNode } from "react";

import styles from "./Button.module.scss";

type ButtonTypes = "submit" | "button";
type ButtonVariants = "primary" | "secondary" | "transparent";
type ButtonSizes = "big" | "medium" | "small" | "standart";
type ButtonStyle = {
  [key: string]: string;
};

type ButtonProps = {
  children: ReactNode;
  type?: ButtonTypes;
  variant: ButtonVariants;
  size: ButtonSizes;
  style?: ButtonStyle;
  disabled?: boolean;
  ClickHandler?: () => void;
};

export const Button: FC<ButtonProps> = ({
  children,
  type = "button",
  variant = "primary",
  style,
  size,
  disabled,
  ClickHandler,
}) => {
  return (
    <button
      disabled={disabled}
      className={classNames(
        [styles.default, styles[variant], styles[size]],
        {},
      )}
      type={type === "submit" ? "submit" : "button"}
      onClick={ClickHandler}
      style={style}
    >
      {children}
    </button>
  );
};
