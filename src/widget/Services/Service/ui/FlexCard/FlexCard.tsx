import Image from "next/image";
import { FC } from "react";

import styles from "./FlexCard.module.css";

import { ServiceCardType } from "@/widget/Services/data";

type FlexCardProps = {
  cardItems: Array<ServiceCardType>;
};

export const FlexCard: FC<FlexCardProps> = ({ cardItems }) => {
  return (
    <div className={styles.card}>
      <p className={styles.title}>Умеем:</p>

      <div className={styles.flexContainer}>
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
