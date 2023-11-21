import Image from "next/image";
import { FC } from "react";

import styles from "./CompanyNumbers.module.css";

import { Container } from "@/shared";
import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { CompanyNumbersCardType } from "./data";
import { NumberCard } from "./ui/NumberCard/NumberCard";

import bg from "&/images/about/company-numbers/liquid.png";

type CompanyNumbersProps = {
  cards: Array<CompanyNumbersCardType>;
} & TitleProps;

export const SomeCompanyNumbers: FC<CompanyNumbersProps> = ({
  title,
  cards,
}) => {
  return (
    <Container>
      <section className={styles.section} style={{ marginBlock: "50px" }}>
        <Title title={title} />

        <Image src={bg} alt="" fill />

        <div className={styles.glow} />

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
