import { FC } from "react";

import styles from "./NumberCard.module.css";

import { CompanyNumbersCardType } from "../../data";

type NumberCardProps = object & CompanyNumbersCardType;

export const NumberCard: FC<NumberCardProps> = ({ number, text }) => {
  return (
    <div className={styles.card}>
      <p className={styles.content}>
        <span className={styles.number}>{number}</span>
        <span className={styles.text}>{text}</span>
      </p>

      <span className={styles.divider} />
    </div>
  );
};
