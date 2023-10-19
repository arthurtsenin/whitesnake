import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./VacancyCard.module.css";

import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

import arrow from "&/arrow-right-white.svg";

export type VacancyCardType = {
  id: string;
  title: string;
  location: string;
};

type VacancyCardProps = object & VacancyCardType;

export const VacancyCard: FC<VacancyCardProps> = ({ title, location, id }) => {
  const href = `${NAVIGATION_LINKS.vacancies.href}/${id}`;

  return (
    <div className={styles.container}>
      <Link href={href} className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{location}</p>
        <div className={cn(styles.arrow, styles.hover)}>
          <Image src={arrow} alt="" />
        </div>
      </Link>
    </div>
  );
};
