"use client";

import { FC, useEffect, useRef, useState } from "react";

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
  const [direction, _setDirection] = useState<number>(1);
  const isMobile = window.innerWidth < 744;
  const innerRef = useRef<HTMLDivElement>(null);

  const ids = cards.map((card) => card.id as number);

  const handleClick = () => {
    setActiveItemId((prev) => prev + 1);
  };

  // TODO: handle resize

  useEffect(() => {
    const newIndex = direction > 0 ? activeItemId + 1 : activeItemId - 1;

    if (isMobile && innerRef && innerRef.current) {
      innerRef.current.style.transform = `translateX(calc(-${newIndex} * ((80vw - 48px)) / 1.5))`;
    }
  }, [direction, activeItemId, isMobile]);

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
                  title={card.title}
                  instructions={card.instructions}
                  image={card.image}
                  isActive={card.id === activeItemId}
                  onClick={card.id === activeItemId ? undefined : handleClick}
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
