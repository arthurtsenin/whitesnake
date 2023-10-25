import { FC } from "react";

import styles from "./Benefits.module.css";

import { BenefitType } from "./data";
import { BenefitCard } from "./ui/BenefitCard/BenefitCard";
import { Title } from "../ui/Title/Title";
import { TitleProps } from "../ui/Title/Title";

type BenefitsProps = {
  benefits: Array<BenefitType>;
} & TitleProps;

export const Benefits: FC<BenefitsProps> = ({ title, benefits }) => {
  return (
    <section className={styles.section}>
      <Title title={title} />

      <div className={styles.container}>
        {benefits.map((card) => (
          <BenefitCard
            key={card.id}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
};
