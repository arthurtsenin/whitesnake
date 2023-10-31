import Image from "next/image";
import { FC } from "react";

import { ManagerBenefitType } from "../../data";

type ManagerBenefitProps = object & ManagerBenefitType;

import styles from "./ManagerBenefit.module.css";

export const ManagerBenefit: FC<ManagerBenefitProps> = ({
  title,
  subtitle,
  imageSrc,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={imageSrc} alt="" />
      </div>

      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
