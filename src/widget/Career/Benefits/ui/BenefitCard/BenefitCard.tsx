import { FC } from "react";

import styles from "./BenefitCard.module.css";

type BenefitCardProps = {
  title: string;
  description: string;
};

export const BenefitCard: FC<BenefitCardProps> = ({ title, description }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
