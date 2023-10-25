import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

import styles from "./OfficeBenefitCard.module.css";

import { OfficeBenefitData } from "../types";

export const OfficeBenefitCard: FC<OfficeBenefitData> = ({
  icon,
  variant = "rectangle",
  title,
  desc,
}) => {
  return (
    <div className={classNames(styles.card, styles[variant])}>
      <div className={styles.cardImg}>
        <Image src={icon} alt="title" />
      </div>
      <div className={styles.cardInfo}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardDesc}>{desc}</p>
      </div>
    </div>
  );
};
