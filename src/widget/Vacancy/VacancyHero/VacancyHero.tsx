import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./VacancyHero.module.css";

import { Button } from "@/shared";
import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

import arrow from "&/images/icons/arrow.png";
import raindropPurple from "&/images/raindrops/10.png";
import raindrop from "&/images/raindrops/14.webp";

type VacancyHeroProps = {
  title: string;
  subtitle: string;
  department: string;
};
export const VacancyHero: FC<VacancyHeroProps> = ({
  title,
  subtitle,
  department,
}) => {
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
        <Link
          className={styles.back}
          href={`${NAVIGATION_LINKS.career.href}/${department}`}
        >
          <Image src={arrow} alt="Все вакансии." />
          <span className={styles.link}>Назад к вакансиям</span>
        </Link>

        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>
          {subtitle ||
            `Мы ищем ответственного ${title} в нашу команду. Мы ценим энтузиазм,
          стремление к развитию и готовы поддерживать вас на этом пути.
          Присоединяйтесь!`}
        </p>

        <div className={styles.buttons}>
          <Link href="#leave-request">
            <Button variant="primary">Откликнуться</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
