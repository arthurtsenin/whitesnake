import Image from "next/image";
import Link from "next/link";

import styles from "./CareerHero.module.css";

import { Button } from "@/shared";
import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

import raindrop from "&/images/vacancies/hero/raindrop-lower.png";
import raindropPurple from "&/images/vacancies/hero/raindrop-upper.png";

export const CareerHero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.glowRed} />
      <div className={styles.glowBlue} />

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

      <div className={styles.content}>
        <h1 className={styles.title}>Карьера</h1>
        <p className={styles.subtitle}>
          Кто мы и как живет наша компания в целом. Вдохновлящие слова
        </p>

        <div className={styles.buttons}>
          <Link href={`${NAVIGATION_LINKS.internship.href}#leave-request`}>
            <Button variant="transparent">Хочу на стажировку</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
