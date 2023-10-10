import { FC } from "react";

import styles from "./Chip.module.css";

type ChipProps = {
  text: string;
};

export const Chip: FC<ChipProps> = ({ text }) => {
  return <div className={styles.chip}>{text}</div>;
};
