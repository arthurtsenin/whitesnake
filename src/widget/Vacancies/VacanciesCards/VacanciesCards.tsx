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
      <section className={styles.container}>
        {cards.map((card, idx) => (
          <VacancyCard
            key={idx}
            title={card.title}
            location={card.location}
            url={card.url}
          />
        ))}
      </section>
    </Container>
  );
};
