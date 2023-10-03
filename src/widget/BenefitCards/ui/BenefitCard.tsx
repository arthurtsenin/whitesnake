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
        <p className={classNames(styles.cardTitle, styles[variant])}>
          {cardTitle}
        </p>
        <p className={classNames(styles.cardDesc, styles[variant])}>
          {cardDesc}
        </p>
        <div className={classNames(styles.cardButton, styles[variant])}>
          <Button variant="primary">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};
