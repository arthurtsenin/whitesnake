"use client";

import { FC, useRef, useState } from "react";

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
  const [activeItemId, setActiveItemId] = useState<number>(0);
  const innerRef = useRef<HTMLDivElement>(null);

  const ids = cards.map((card) => card.id as number);

  return (
    <Container>
      <section className={styles.section} style={{ marginTop: "350px" }}>
        <Title title={title} />

        <div className={styles.external}>
          <div className={styles.container}>
            <div className={styles.inner} ref={innerRef}>
              {cards.map((card) => (
                <HiringProcessCard
                  key={card.id}
                  id={card.id}
                  title={card.title}
                  instructions={card.instructions}
                  image={card.image}
                  isActive={card.id === activeItemId}
                  setActiveItemId={setActiveItemId}
                  containerEl={innerRef.current}
                />
              ))}
            </div>

            <Indicators ids={ids} activeItemId={activeItemId} />
          </div>
        </div>
      </section>
    </Container>
  );
};
