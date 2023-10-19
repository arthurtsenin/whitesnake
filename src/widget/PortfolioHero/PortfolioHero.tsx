import Image from "next/image";
import { FC } from "react";

import styles from "./PortfolioHero.module.css";

import raindrop from "&/images/vacancies/hero/raindrop-lower.png";
import raindropPurple from "&/images/vacancies/hero/raindrop-upper.png";

type PortfolioHeroProps = {
  title: string;
  subtitle: string;
};

export const PortfolioHero: FC<PortfolioHeroProps> = ({ title, subtitle }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.glowRed} />
      <div className={styles.glowBlue} />

      <div className={styles.raindrop1}>
        <Image src={raindrop} alt="raindrop" priority />
      </div>

      <div className={styles.raindrop2}>
        <Image src={raindrop} alt="raindrop" priority />
      </div>

      <div className={styles.raindrop3}>
        <Image src={raindropPurple} alt="raindrop" priority />
      </div>

      <div className={styles.raindrop4}>
        <Image src={raindropPurple} alt="raindrop" priority />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
