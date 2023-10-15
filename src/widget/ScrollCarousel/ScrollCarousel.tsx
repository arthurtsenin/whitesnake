"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import styles from "./ScrollCarousel.module.css";

import { WORKFLOW_CARDS } from "./data";
import { ScrollCard } from "./ui/ScrollCard";
import { Container } from "../../shared";

import raindrops from "&/images/scroll-carousel/green-raindrops.png";
import net from "&/images/scroll-carousel/net.png";
import raindrop from "&/images/scroll-carousel/raindrop.png";
export const ScrollCarousel = () => {
  // const [_, setContainerHeight] = useState<number | null>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // const setter = (element: HTMLDivElement) => {
  //   setContainerHeight(element.clientHeight);
  // };

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `64%`]);

  return (
    <Container>
      <div ref={targetRef} className={styles.container}>
        <div className={styles.sticker}>
          <motion.div className={styles.info} style={{ top: y }}>
            Как начать <br /> работать с нами
          </motion.div>
          <div className={styles.motionContainer}>
            {WORKFLOW_CARDS.map((card) => {
              return <ScrollCard {...card} key={card.order} />;
            })}
          </div>
        </div>
        <div className={styles.glowRed} />
        <div className={styles.glowBlue} />
        <div className={styles.net}>
          <Image src={net} alt="net" />
        </div>
        <div className={styles.raindop}>
          <Image src={raindrop} alt="raindrop" />
        </div>
        <div className={styles.raindrops}>
          <Image src={raindrops} alt="raindrops" />
        </div>
      </div>
    </Container>
  );
};
