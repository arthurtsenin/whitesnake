import Image from "next/image";
import { FC } from "react";

import styles from "./TechCard.module.css";

import { ServiceCardType } from "@/widget/Services/data";

type TechCardProps = {
  cardItems: Array<ServiceCardType>;
};

export const TechCard: FC<TechCardProps> = ({ cardItems }) => {
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
