import classNames from "classnames";
import { FC } from "react";

import styles from "./Chip.module.css";

type ChipProps = {
  text: string;
  variant: "primary" | "secondary";
};

export const Chip: FC<ChipProps> = ({ text, variant = "primary" }) => {
  return (
    <div className={classNames(styles.basis, styles[variant])}>{text}</div>
  );
};
