import classNames from "classnames";
import { ComponentPropsWithoutRef, FC } from "react";

import styles from "./Burger.module.css";

type BurgerProps = ComponentPropsWithoutRef<"button"> & {
  open: boolean;
};

export const Burger: FC<BurgerProps> = ({ open, ...props }) => {
  return (
    <button
      className={classNames(styles.burger, {
        [styles.open]: open,
      })}
      {...props}
    >
      <span />
      <span />
      <span />
    </button>
  );
};
