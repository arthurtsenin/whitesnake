import styles from "./Benefits.module.css";

import { Title } from "@/shared";

import { BENEFITS_DATA } from "./data";
import { BenefitCard } from "./ui/BenefitCard/BenefitCard";

export const Benefits = () => {
  return (
    <section className={styles.section}>
      <Title title="Бенефиты" />
      <div className={styles.container}>
        {BENEFITS_DATA.map((card) => (
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
