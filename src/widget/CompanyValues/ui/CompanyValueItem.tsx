import { FC } from "react";

import styles from "./CompanyValueItem.module.css";

import { CompanyValuesType } from "../data";

export const CompanyValueItem: FC<CompanyValuesType> = ({
  id,
  title,
  text,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardId}>(.0{id})</div>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardInfo}>{text}</p>
      </div>
    </div>
  );
};
