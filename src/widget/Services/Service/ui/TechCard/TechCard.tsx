import cn from "classnames";
import Image from "next/image";
import { FC } from "react";

import styles from "./TechCard.module.css";

import { ServiceCardType } from "@/widget/Services/data";

type TechCardProps = {
  cardContainerType: string | undefined;
  cardItems: Array<ServiceCardType>;
};

export const TechCard: FC<TechCardProps> = ({
  cardContainerType,
  cardItems,
}) => {
  return (
    <div
      className={cn(styles.card, {
        [styles.cardWithGridContainer]: cardContainerType === "grid",
      })}
    >
      <p className={styles.title}>Умеем:</p>

      <div
        className={cn(styles.container, {
          [styles.gridContainer]: cardContainerType === "grid",
        })}
      >
        {cardItems.map((item) => (
          <p key={item.id} className={styles.item}>
            <Image src={item.icon} alt={`${item.text} icon`} />
            <span className={styles.text}>{item.text}</span>
          </p>
        ))}
      </div>
    </div>
  );
};
