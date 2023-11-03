import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./CareerVacancyCard.module.css";

import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

import arrow from "&/arrow-right-white.svg";

export type CareerVacancyCardType = {
  id: string;
  title: string;
  location: string;
};

type CareerVacancyCardProps = object & CareerVacancyCardType;

export const CareerVacancyCard: FC<CareerVacancyCardProps> = ({
  title,
  location,
  id,
}) => {
  const href = `${NAVIGATION_LINKS.vacancies.href}/${id}`;

  return (
    <div className={styles.container}>
      <Link href={href} className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{location}</p>
        <div className={styles.arrow}>
          <Image src={arrow} alt="" />
        </div>
      </Link>
    </div>
  );
};
