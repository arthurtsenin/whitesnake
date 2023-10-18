import { FC } from "react";

import styles from "./BenefitCards.module.css";

import { BenefitCardData } from "./types";
import { BenefitCard } from "./ui/BenefitCard";
import { Container } from "../../shared";

export type BenefitCardsProps = {
  variant: "withIcon" | "withoutIcon";
  data: BenefitCardData[];
};

export const BenefitCards: FC<BenefitCardsProps> = ({ variant, data }) => {
  return (
    <Container>
      <div className={styles.benefitCardsWraper}>
        {data.map((item) => (
          <BenefitCard
            key={item.cardTitle}
            cardTitle={item.cardTitle}
            cardDesc={item.cardDesc}
            buttonText={item.buttonText}
            variant={variant}
            icon={item.icon}
            link={item.link}
          />
        ))}
      </div>
    </Container>
  );
};
