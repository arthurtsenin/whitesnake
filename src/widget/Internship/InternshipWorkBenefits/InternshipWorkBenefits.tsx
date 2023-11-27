"use client";

import Image from "next/image";
import { FC, useRef, useState } from "react";

import styles from "./InternshipWorkBenefits.module.css";

import { Container, Title } from "@/shared";

import { WORK_BENEFITS_DATA } from "./data";
import { InternshipWorkCard } from "./ui/InternshipWorkCard";

import bubble1 from "&/images/raindrops/15.png";
import bubble from "&/images/raindrops/16.png";

export const InternshipWorkBenefits: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [activeCardId, setActiveCardId] = useState<number>(1);

  const handleClick = () => {
    if (activeCardId === WORK_BENEFITS_DATA.length) {
      setActiveCardId(1);
    } else {
      setActiveCardId(activeCardId + 1);
    }
  };

  return (
    <Container>
      <section>
        <div className={styles.wrap}>
          <div className={styles.title}>
            <Title title="Что такое работа в Whitesnake" />
          </div>
          <div className={styles.imgWrapper}>
            <Image src={bubble} alt="" priority />
            <div className={styles.greenGlow} />
          </div>

          <div className={styles.imgWrapper2}>
            <Image src={bubble1} alt="" priority />
            <div className={styles.redGlow} />
          </div>

          <div
            ref={containerRef}
            className={styles.wrapper}
            onClick={handleClick}
          >
            {WORK_BENEFITS_DATA.map((card) => (
              <InternshipWorkCard
                key={card.id}
                {...card}
                activeCardId={activeCardId}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
