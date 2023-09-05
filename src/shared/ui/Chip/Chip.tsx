import { FC } from "react";

import styles from "./Chip.module.scss";

type ChipProps = {
  text: string;
};

export const Chip: FC<ChipProps> = ({ text }) => {
  return <div className={styles.text}>{text}</div>;
};
