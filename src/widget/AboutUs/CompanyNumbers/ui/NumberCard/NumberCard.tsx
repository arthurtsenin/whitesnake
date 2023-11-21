import { FC } from "react";

import styles from "./NumberCard.module.css";

import { CompanyNumbersCardType } from "../../data";

type NumberCardProps = object & CompanyNumbersCardType;

export const NumberCard: FC<NumberCardProps> = ({ number, text }) => {
  return (
    <p className={styles.card}>
      <span className={styles.number}>{number}</span>
      <span className={styles.text}>{text}</span>
    </p>
  );
};
