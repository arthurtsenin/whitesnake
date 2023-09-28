import Image from "next/image";
import { FC } from "react";

import styles from "./DynamicPannel.module.scss";

import { TechnologieType } from "../../data";

export type DynamicPannelProps = {
  cards: TechnologieType;
};

export const DynamicPannel: FC<DynamicPannelProps> = ({ cards }) => {
  return (
    <div className={styles.container}>
      {cards.cards.map((card) => (
        <div key={card.name} className={styles.item}>
          <Image src={card.icon} alt={card.name} />
          <p className={styles.name}>{card.name}</p>
        </div>
      ))}
    </div>
  );
};
