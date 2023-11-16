"use client";

import { FC, useState } from "react";

import styles from "./HiringProcess.module.css";

import { Container } from "@/shared";
import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { HiringProcessCardType } from "./data";
import { HiringProcessCard } from "./ui/HiringProcessCard/HiringProcessCard";
import { Indicators } from "./ui/Indicators/Indicators";

type HiringProcessProps = {
  cards: Array<HiringProcessCardType>;
} & TitleProps;

export const HiringProcess: FC<HiringProcessProps> = ({ title, cards }) => {
  const [activeItemId, _setActiveItemId] = useState<number>(1);

  return (
    <Container>
      <section className={styles.section} style={{ marginTop: "350px" }}>
        <Title title={title} />

        <div className={styles.external}>
          <div className={styles.container}>
            <div className={styles.inner}>
              {cards.map((card) => (
                <HiringProcessCard
                  key={card.id}
                  title={card.title}
                  instructions={card.instructions}
                  image={card.image}
                  isActive={card.id === activeItemId}
                />
              ))}
            </div>

            <Indicators ids={[1, 2, 3]} activeItemId={activeItemId} />
          </div>
        </div>
      </section>
    </Container>
  );
};
