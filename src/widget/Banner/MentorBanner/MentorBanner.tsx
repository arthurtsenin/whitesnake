import { FC } from "react";

import styles from "./MentorBanner.module.css";

import { Chip } from "@/shared";

import { CHIPS_DATA } from "./data";
import { BannerTemplate } from "../BannerTemplate";

import mentorBanner from "&/images/career/mentor.png";

export const MentorBanner: FC = () => {
  return (
    <BannerTemplate image={mentorBanner}>
      <div className={styles.text}>
        <p className={styles.title}>Стань ментором</p>
        <p className={styles.description}>
          Мы поощряем ребят, которые берут стажеров под личное руководство и
          даём возможность расти в сторону менеджмента — задачи по офису,
          ведение проектов. Подкрепляем финансово и не только
        </p>
        <div className={styles.chips}>
          {CHIPS_DATA.map((chip) => (
            <Chip key={chip.id} text={chip.text} variant="secondary" />
          ))}
        </div>
      </div>
    </BannerTemplate>
  );
};
