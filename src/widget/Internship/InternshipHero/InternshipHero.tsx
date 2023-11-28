import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./InternshipHero.module.css";

import { Button } from "@/shared";

import raindropPurple from "&/images/raindrops/10.png";
import raindrop from "&/images/raindrops/14.webp";

export const InternshipHero: FC = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.glowGreen} />
      <div className={styles.redGlow} />

      <div className={styles.raindrop1}>
        <Image src={raindrop} alt="" />
      </div>

      <div className={styles.raindrop2}>
        <Image src={raindrop} alt="" />
      </div>

      <div className={styles.raindrop3}>
        <Image src={raindropPurple} alt="" />
      </div>

      <div className={styles.raindrop4}>
        <Image src={raindropPurple} alt="" />
      </div>

      <h1 className={styles.herotitle}>Стажировка</h1>
      <p className={styles.heroText}>
        Получи возможность расти в нашей команде, или растить начинающих ребят!
      </p>
      <Button>
        <Link href="#internship-form">Хочу на стажировку</Link>
      </Button>
    </div>
  );
};
