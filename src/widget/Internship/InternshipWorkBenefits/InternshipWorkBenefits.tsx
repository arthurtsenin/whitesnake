"use client";

import { FC, useRef, useState } from "react";

import styles from "./InternshipWorkBenefits.module.css";

import { Title } from "@/shared";

import { WORK_BENEFITS_DATA } from "./data";
import { InternshipWorkCard } from "./ui/InternshipWorkCard";

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
    <section>
      <div className={styles.title}>
        <Title title="Что такое работа в Whitesnake" />
      </div>
      <div ref={containerRef} className={styles.wrapper} onClick={handleClick}>
        {WORK_BENEFITS_DATA.map((card) => (
          <InternshipWorkCard
            key={card.id}
            {...card}
            activeCardId={activeCardId}
          />
        ))}
      </div>
    </section>
  );
};
