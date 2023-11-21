import { FC } from "react";

import styles from "./Benefits.module.css";

import { Container } from "@/shared";
import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { SomeCompanyNumbersCardType } from "./data";
import { NumberCard } from "./ui/NumberCard/NumberCard";

type SomeCompanyNumbersProps = {
  cards: Array<SomeCompanyNumbersCardType>;
} & TitleProps;

export const SomeCompanyNumbers: FC<SomeCompanyNumbersProps> = ({
  title,
  cards,
}) => {
  return (
    <Container>
      <section className={styles.section}>
        <Title title={title} />

        <div className={styles.container}>
          {cards.map((card) => (
            <NumberCard key={card.id} number={card.number} text={card.text} />
          ))}
        </div>
      </section>
    </Container>
  );
};
