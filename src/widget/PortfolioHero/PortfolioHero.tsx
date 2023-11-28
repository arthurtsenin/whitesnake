import Image from "next/image";
import { FC } from "react";

import styles from "./PortfolioHero.module.css";

import raindropPurple from "&/images/raindrops/10.png";
import raindrop from "&/images/raindrops/14.webp";

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
        <Image src={raindrop} alt="" priority />
      </div>

      <div className={styles.raindrop2}>
        <Image src={raindrop} alt="" priority />
      </div>

      <div className={styles.raindrop3}>
        <Image src={raindropPurple} alt="" priority />
      </div>

      <div className={styles.raindrop4}>
        <Image src={raindropPurple} alt="" priority />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
