import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./VacanciesGroups.module.css";

import { Container } from "@/shared";

import { CareerVacanciesCards } from "../Career/CareerVacanciesCards/CareerVacanciesCards";
import { CareerVacancyCardType } from "../Career/CareerVacanciesCards/ui/CareerVacancyCard";
import { NAVIGATION_LINKS } from "../Navigation/routes";

import arrow from "&/images/icons/arrow.png";

type VacanciesGroupsProps = {
  groups: { [key: string]: Array<Record<string, string>> };
};

export const VacanciesGroups: FC<VacanciesGroupsProps> = ({ groups }) => {
  return (
    <Container>
      <ul className={styles.list}>
        {Object.keys(groups).map((item) => (
          <li className={styles.item} key={item}>
            <Link
              className={styles.link}
              href={`${NAVIGATION_LINKS.career.href}/${item}`}
            >
              <p className={styles.title}>
                Вакансии <span>{item}</span>
              </p>
              <p className={styles.count}>{groups[item].length}</p>
              <div className={styles.navigate}>
                <p>все вакансии отдела</p>
                <div className={styles.wrapper}>
                  <Image src={arrow} alt="Все вакансии." />
                </div>
              </div>
            </Link>
            <CareerVacanciesCards
              cards={groups[item] as Array<CareerVacancyCardType>}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};
