import Image from "next/image";
import { FC } from "react";

import styles from "./InternshipHero.module.css";

import { Button } from "@/shared";

import heroBubble2 from "&/images/internship/bubble3.png";
import heroBubble1 from "&/images/internship/hero_bubble_1.png";

export const InternshipHero: FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.glowGreen} />
      <div className={styles.redGlow} />
      <div className={styles.bubble1}>
        <Image className={styles.image} src={heroBubble1} alt="bubble1" />
      </div>

      <div className={styles.bubble2}>
        <Image className={styles.image} src={heroBubble1} alt="bubble2" />
      </div>

      <div className={styles.bubble3}>
        <Image className={styles.image} src={heroBubble2} alt="bubble3" />
      </div>

      <div className={styles.bubble4}>
        <Image className={styles.image} src={heroBubble2} alt="bubble4" />
      </div>
      {/* <Image className={styles.bubble3} src={heroBubble2} alt='bubble3' /> */}

      <h1 className={styles.herotitle}>Стажировка</h1>
      <p className={styles.heroText}>
        Получи возможность расти в нашей команде, или растить начинающих ребят!
      </p>
      <Button>Хочу на стажировку</Button>
    </div>
  );
};
