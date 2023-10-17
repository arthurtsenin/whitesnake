import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./VacancyCard.module.css";

import arrow from "&/arrow-right-white.svg";

export type VacancyCardType = {
  title: string;
  location: string;
  url: string;
};

type VacancyCardProps = object & VacancyCardType;

export const VacancyCard: FC<VacancyCardProps> = ({ title, location, url }) => {
  return (
    <div className={styles.container}>
      <Link href={url} className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{location}</p>
        <div className={cn(styles.arrow, styles.hover)}>
          <Image src={arrow} alt="arrow" />
        </div>
      </Link>
    </div>
  );
};
