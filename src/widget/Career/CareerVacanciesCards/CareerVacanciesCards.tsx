import Link from "next/link";
import { FC } from "react";

import styles from "./CareerVacanciesCards.module.css";

import { Container } from "@/shared";
import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

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
    <Container>
      <section className={styles.container}>
        <Link href={NAVIGATION_LINKS.vacancies.href} data-show-all-vacancies>
          <span>Показать все</span>
        </Link>

        <div className={styles.cards}>
          {cards.map((card) => (
            <CareerVacancyCard
              key={card.id}
              id={card.id}
              title={card.title}
              location={card.location}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
