"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./InternshipCardsContainer.module.css";

import { INTERNSHIP_CARDS_DATA } from "@/widget/InternshipCardsContainer/data";
import { InternshipCard } from "@/widget/InternshipCardsContainer/ui/InternshipCard/InternshipCard";

import { Title } from "../../shared";

import secondBub from "&/cases-preview/raindrop.png";
import yaica from "&/images/internship/90c48eece4be53e14cb9fe0b75682e36.png";
import net from "&/images/scroll-carousel/net.png";
export const InternshipCardsContainer = () => {
  const [activeCard, setActiveCard] = useState(1);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0 && latest <= 0.3) {
      setActiveCard(1);
    } else if (latest >= 0.3 && latest <= 0.7) {
      setActiveCard(2);
    } else if (latest >= 0.7 && latest <= 1) {
      setActiveCard(3);
    } else setActiveCard(1);
  });

  return (
    <section className={styles.section} ref={targetRef}>
      <div className={styles.yaica}>
        <Image src={yaica} alt="yaica" />
      </div>
      <div className={styles.secondBub}>
        <Image src={secondBub} alt="bub" />
      </div>
      <div className={styles.net}>
        <Image src={net} alt="net" />
      </div>
      <div className={styles.glow1} />
      <div className={styles.glow2} />
      <div className={styles.glow4} />
      <motion.div className={styles.container}>
        <div className={styles.glow3} />
        <Title title="за 3 месяца" subtitle="До Junior разработчика" />

        <div className={styles.cards}>
          {INTERNSHIP_CARDS_DATA.map((card) => (
            <InternshipCard
              key={card.id}
              index={card.id}
              activeCard={activeCard}
              title={card.title}
              image={card.image}
              description={card.description}
              mark={card.mark}
              timeInfo={card.timeInfo}
              timeCount={card.timeCount}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
