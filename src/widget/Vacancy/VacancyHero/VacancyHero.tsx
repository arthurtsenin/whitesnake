import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./VacancyHero.module.css";

import { Button } from "@/shared";
import { ROUTES } from "@/widget/Navigation/routes";

import arrow from "&/images/vacancies/arrow.png";
import raindrop from "&/images/vacancies/hero/raindrop-lower.png";
import raindropPurple from "&/images/vacancies/hero/raindrop-upper.png";

type VacancyHeroProps = {
  path: string;
  title: string;
};
export const VacancyHero: FC<VacancyHeroProps> = ({ path, title }) => {
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
        <Link className={styles.back} href={`/${ROUTES.FIVE.href}`}>
          <Image src={arrow} alt="back" />
          <span className={styles.link}>Назад к вакансиям</span>
        </Link>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>
          Мы ищем ответственного {title} в нашу команду. Мы ценим энтузиазм,
          стремление к развитию и готовы поддерживать вас на этом пути.
          Присоединяйтесь!
        </p>

        <div className={styles.buttons}>
          <Button variant="primary">Откликнуться</Button>

          <Link target="_blank" href={path}>
            <Button variant="transparent">Перейти на rabota.by</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
