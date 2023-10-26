"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

import styles from "./InternshipCardsContainer.module.css";

import { INTERNSHIPCARDS_DATA } from "@/widget/InternshipCardsContainer/data";
import { InternshipCard } from "@/widget/InternshipCardsContainer/ui/InternshipCard/InternshipCard";
import { InternShipTitle } from "@/widget/InternshipCardsContainer/ui/InternshipTitle/InternshipTitle";

export const InternshipCardsContainer = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [activeCard, setActiveCard] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest <= 0.2) {
      setActiveCard(1);
    } else if (latest >= 0.2 && latest <= 0.6) {
      setActiveCard(2);
    } else if (latest >= 0.6 && latest <= 0.9) {
      setActiveCard(3);
    } else setActiveCard(0);
  });

  return (
    <div className={styles.mainWrapper} ref={targetRef}>
      <motion.div className={styles.internshipCardsContainer}>
        <InternShipTitle
          title="за 3 месяца"
          subtitle="До Junior разработчика"
        />

        {INTERNSHIPCARDS_DATA.map((cardItem) => (
          <InternshipCard
            index={cardItem.id}
            key={cardItem.id}
            title={cardItem.title}
            timeInfo={cardItem.timeInfo}
            description={cardItem.descriptionArray}
            image={cardItem.image}
            additionalDescription={cardItem.additionalDescription}
            timeCount={cardItem.timeCount}
            activeCard={activeCard}
          />
        ))}
      </motion.div>
    </div>
  );
};
