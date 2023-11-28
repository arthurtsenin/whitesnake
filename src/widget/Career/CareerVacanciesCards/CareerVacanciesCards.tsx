import { FC } from "react";

import styles from "./CareerVacanciesCards.module.css";

import {
  CareerVacancyCard,
  CareerVacancyCardType,
} from "./ui/CareerVacancyCard";

type CareerVacanciesCardsProps = {
  cards: Array<CareerVacancyCardType>;
};

export const CareerVacanciesCards: FC<CareerVacanciesCardsProps> = ({
  cards,
}) => {
  return (
    <section className={styles.container}>
      <div className={styles.cards}>
        {cards.map((card) => (
          <CareerVacancyCard
            key={card.id}
            department={card.department}
            id={card.id}
            title={card.title}
            location={card.location}
          />
        ))}
      </div>
    </section>
  );
};
