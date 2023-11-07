import classNames from "classnames";
import { FC } from "react";

import styles from "./InternshipWorkCard.module.css";

import { WORK_BENEFITS_DATA } from "../data";
import { WorkBenefitsCardProps } from "../types";

type InternshipWorkCardProps = WorkBenefitsCardProps & {
  activeCardId: number;
};

export const InternshipWorkCard: FC<InternshipWorkCardProps> = ({
  text,
  title,
  id,
  image,
  activeCardId,
}) => {
  return (
    <div
      className={classNames(styles.card, {
        [styles.active]: activeCardId === id,
        [styles.next]: activeCardId + 1 === id,
        [styles.nextFirst]: activeCardId === WORK_BENEFITS_DATA.length,
      })}
    >
      <div className={styles.cardBg} />
      <div className={styles.glow} />
      {image}
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};
