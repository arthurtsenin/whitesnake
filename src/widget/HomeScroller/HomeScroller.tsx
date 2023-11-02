"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

import styles from "./HomeScroller.module.css";

import { useMobileScreen } from "@/shared/hooks/use-mobile-screen";
import { MotionComponent } from "@/shared/motion/MotionComponent";

import { WORKFLOW_CARDS } from "./data";
import { HomeScrollerCard } from "./ui/HomeScrollerCard";

import raindrops from "&/images/scroll-carousel/green-raindrops.png";
import net from "&/images/scroll-carousel/net.png";
import raindrop from "&/images/scroll-carousel/raindrop.png";

export const HomeScroller = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const isMobile = useMobileScreen();
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    !isMobile ? ["35%", `-115%`] : ["0%", "0%"],
  );

  return (
    <div className={styles.container} ref={targetRef}>
      <div className={styles.imgRaindropWrapper}>
        <Image src={raindrop} alt="" />
      </div>
      <div className={styles.imgRaindropWrapper}>
        <Image src={raindrops} alt="" />
      </div>
      <div className={styles.glowRed} />
      <div className={styles.glowBlue} />
      <div className={styles.sticker}>
        <div className={styles.imgWrapper}>
          <Image src={net} alt="" />
        </div>

        <div className={styles.title}>Как начать работать с нами</div>
        <div className={styles.devider} />
        <MotionComponent
          as="div"
          className={styles.cardContainer}
          style={{ y }}
        >
          {WORKFLOW_CARDS.map((el) => (
            <HomeScrollerCard
              description={el.description}
              image={el.image}
              order={el.order}
              title={el.title}
              key={el.order}
            />
          ))}
        </MotionComponent>
      </div>
    </div>
  );
};
