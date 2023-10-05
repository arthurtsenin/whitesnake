import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

import styles from "./BenefitCard.module.css";

import { Button } from "@/shared";

import { BenefitCardData } from "../types";

type BenefitCardProps = BenefitCardData & {
  variant: "withIcon" | "withoutIcon";
};

export const BenefitCard: FC<BenefitCardProps> = ({
  cardTitle,
  cardDesc,
  buttonText,
  icon,
  variant,
}) => {
  return (
    <div className={classNames(styles.card, styles[variant])}>
      {icon && (
        <div>
          <Image
            src={icon}
            alt="benefit card icon"
            className={styles.cardImage}
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <p className={styles.cardTitle}>{cardTitle}</p>
        <p className={styles.cardDesc}>{cardDesc}</p>
        <div className={styles.cardButton}>
          <Button variant="primary">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
