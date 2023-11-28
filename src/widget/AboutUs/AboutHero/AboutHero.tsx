import Image from "next/image";
import Link from "next/link";

import styles from "./AboutHero.module.css";

import { Button } from "@/shared";
import { FORM_URL_PARAMS } from "@/widget/Form/params";
import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

import arc from "&/images/about/hero/arc.png";
import leftRaindrop from "&/images/raindrops/16.png";
import rightRaindrop from "&/images/raindrops/18.png";

export const AboutHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.leftRaindropWrapper}>
        <Image src={leftRaindrop} alt="" priority />
      </div>

      <div className={styles.rightRaindropWrapper}>
        <Image src={rightRaindrop} alt="" priority />
      </div>

      <div className={styles.arcWrapper}>
        <Image src={arc} alt="" priority />
      </div>

      <div className={styles.glowLeft} />
      <div className={styles.glowMiddle} />
      <div className={styles.glowRight} />

      <article className={styles.article}>
        <div className={styles.content}>
          <h1 className={styles.title}>О нас</h1>
          <p className={styles.subtitle}>
            Мы — не просто IT-компания, а дружная команда энтузиастов с общей
            страстью к технологиям и инновациям. Мы ценим творчество и свободу
            мысли и достигаем по-настоящему впечатляющих результатов.
          </p>
        </div>

        <div className={styles.buttons}>
          <Link href={NAVIGATION_LINKS.career.href}>
            <Button>Карьера</Button>
          </Link>

          <Link href={FORM_URL_PARAMS.LeaveRequest}>
            <Button variant="transparent">Оставить заявку</Button>
          </Link>
        </div>
      </article>
    </section>
  );
};
