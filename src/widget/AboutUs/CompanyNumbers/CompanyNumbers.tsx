import { FC } from "react";

import styles from "./CompanyNumbers.module.css";

import { Container } from "@/shared";
import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { CompanyNumbersCardType } from "./data";
import { NumberCard } from "./ui/NumberCard/NumberCard";

type CompanyNumbersProps = {
  cards: Array<CompanyNumbersCardType>;
} & TitleProps;

export const SomeCompanyNumbers: FC<CompanyNumbersProps> = ({
  title,
  cards,
}) => {
  return (
    <Container>
      <section className={styles.section} style={{ marginTop: "250px" }}>
        <Title title={title} />

        <div className={styles.container}>
          {cards.map((card) => (
            <>
              <NumberCard key={card.id} number={card.number} text={card.text} />
              <div className={styles.divider} />
            </>
          ))}
        </div>
      </section>
    </Container>
  );
};
