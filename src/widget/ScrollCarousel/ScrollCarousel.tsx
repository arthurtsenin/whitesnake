"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

import styles from "./ScrollCarousel.module.css";

import { WORKFLOW_CARDS } from "./data";
import { ScrollCard } from "./ui/ScrollCard";

import raindrops from "&/images/scroll-carousel/green-raindrops.png";
import net from "&/images/scroll-carousel/net.png";

export const ScrollCarousel = () => {
  const [containerHeight, setContainerHeight] = useState<number | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const setter = (element: HTMLDivElement) => {
    setContainerHeight(element.clientHeight);
  };

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["5%", `-${12 * WORKFLOW_CARDS.length}%`],
  );

  return (
    <div
      ref={targetRef}
      className={styles.container}
      style={{
        height: `${
          containerHeight === 0
            ? "auto"
            : containerHeight === 1100
            ? "1000px"
            : `${containerHeight}px`
        }`,
      }}
    >
      <div className={styles.sticker}>
        <div className={styles.info}>
          Как начать <br /> работать с нами
        </div>
        <motion.div
          style={{ y }}
          ref={setter}
          className={styles.motionContainer}
        >
          {WORKFLOW_CARDS.map((card) => {
            return <ScrollCard {...card} key={card.order} />;
          })}
        </motion.div>
        <div className={styles.motionMobileContainer}>
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
      {/* <div className={styles.raindop}>
				<Image src={raindrop} alt='raindrop' />
			</div> */}
      <div className={styles.raindrops}>
        <Image src={raindrops} alt="raindrops" />
      </div>
    </div>
  );
};
