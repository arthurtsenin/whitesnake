"use client";

import { useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import styles from "./HomeScroller.module.css";

import { Container } from "@/shared";
import { MotionComponent } from "@/shared/motion/MotionComponent";

import { WORKFLOW_CARDS } from "./data";
import { HomeScrollerCard } from "./ui/HomeScrollerCard";

import raindrop from "&/images/raindrops/16.png";
import raindrops from "&/images/raindrops/18.png";
import net from "&/images/scroll-carousel/net.png";

const HomeScroller = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isDesktop ? ["35%", "-115%"] : ["0%", "0%"],
  );

  useLayoutEffect(() => {
    setIsDesktop(window.innerWidth >= 1200);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <div className={styles.container} ref={targetRef}>
        <div className={styles.imgRaindropWrapper}>
          <Image src={raindrop} alt="" />
        </div>
        <div className={styles.imgRaindropWrapper}>
          <Image src={raindrops} alt="" />
        </div>

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
    </Container>
  );
};

export default HomeScroller;
