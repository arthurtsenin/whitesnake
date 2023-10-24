import Image from "next/image";
import { FC } from "react";

import { MainWorkingConditionType } from "../data";

type WorkingConditionProps = object & MainWorkingConditionType;

import styles from "./WorkingCondition.module.css";

export const WorkingCondition: FC<WorkingConditionProps> = ({
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
