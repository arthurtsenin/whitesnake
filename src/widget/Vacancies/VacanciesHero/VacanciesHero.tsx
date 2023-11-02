import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./VacanciesHero.module.css";

import linkedin from "&/images/vacancies/hero/linkedin.png";
import rabotaby from "&/images/vacancies/hero/rabotaby.png";
import raindrop from "&/images/vacancies/hero/raindrop-lower.png";
import raindropPurple from "&/images/vacancies/hero/raindrop-upper.png";

type VacanciesHeroProps = {
  path: string;
};

export const VacanciesHero: FC<VacanciesHeroProps> = ({ path }) => {
  return (
    <div className={styles.hero}>
      <div className={styles.glowRed} />
      <div className={styles.glowBlue} />

      <div className={styles.raindrop1}>
        <Image src={raindrop} alt="декоративное изображение" />
      </div>

      <div className={styles.raindrop2}>
        <Image src={raindrop} alt="декоративное изображение" />
      </div>

      <div className={styles.raindrop3}>
        <Image src={raindropPurple} alt="декоративное изображение" />
      </div>

      <div className={styles.raindrop4}>
        <Image src={raindropPurple} alt="декоративное изображение" />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>Вакансии</h1>
        <p className={styles.subtitle}>
          Мы активно ищем талантливых, преданных своему делу профессионалов в
          различных областях.Посмотрите, какая возможность из списка ниже
          подходит вам лучше всего!
        </p>
        <div className={styles.buttons}>
          <Link target="_blank" href={path}>
            <Image src={rabotaby} alt="иконка сайта Работа.бай" />
          </Link>
          <Link
            target="_blank"
            href="https://www.linkedin.com/company/whitesnake/"
          >
            <Image src={linkedin} alt="иконка социальной сети ЛинкедИн" />
          </Link>
        </div>
      </div>
    </div>
  );
};
