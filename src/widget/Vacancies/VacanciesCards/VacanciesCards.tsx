import cn from "classnames";
import { FC } from "react";

import styles from "./VacanciesCards.module.css";

import { Container } from "@/shared";

import { VacancyCard, VacancyCardType } from "./ui/VacancyCard";

type VacanciesCardsProps = {
  cards: Array<VacancyCardType>;
};

export const VacanciesCards: FC<VacanciesCardsProps> = ({ cards }) => {
  return (
    <Container>
      <section
        className={cn(styles.container, {
          [styles.gridCol2]: cards.length < 3,
        })}
      >
        {cards.map((card) => (
          <VacancyCard
            key={card.id}
            department={card.department}
            id={card.id}
            title={card.title}
            location={card.location}
          />
        ))}
      </section>
    </Container>
  );
};
