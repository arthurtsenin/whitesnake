import { FC } from "react";

import { ManagerBenefitType } from "../../data";

type ManagerBenefitProps = object & ManagerBenefitType;

import styles from "./ManagerBenefit.module.css";

export const ManagerBenefit: FC<ManagerBenefitProps> = ({
  position,
  title,
  subtitle,
}) => {
  return (
    <div className={styles.text} data-position={position}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};
