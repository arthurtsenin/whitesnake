import { FC } from "react";

import styles from "./Benefits.module.css";

import { Container } from "@/shared";

import { BenefitType } from "./data";
import { BenefitCard } from "./ui/BenefitCard/BenefitCard";
import { Title, TitleProps } from "../ui/Title/Title";

type BenefitsProps = {
  benefits: Array<BenefitType>;
} & TitleProps;

export const Benefits: FC<BenefitsProps> = ({ title, benefits }) => {
  return (
    <Container>
      <section className={styles.section} style={{ marginTop: "350px" }}>
        <Title title={title} />

        <div className={styles.container}>
          {benefits.map((card) => (
            <BenefitCard
              key={card.id}
              title={card.title}
              description={card.description}
              imageSrc={card.imageSrc}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
