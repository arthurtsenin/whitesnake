import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

import styles from "./DynamicPannel.module.css";

import { TechnologieType } from "../../data";

export type DynamicPannelProps = {
  cards: TechnologieType;
};

export const DynamicPannel: FC<DynamicPannelProps> = ({ cards }) => {
  return (
    <div className={styles.container}>
      <div className={styles.pannels}>
        {cards.cards.map((card) => (
          <div
            key={card.name}
            className={classNames(styles.item, styles[card.name])}
          >
            <Image src={card.icon} alt={card.name} />
            <p className={styles.name}>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
