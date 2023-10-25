import { FC } from "react";

import styles from "./InternBanner.module.css";

import { Button } from "@/shared";

import { BannerTemplate } from "../BannerTemplate";

import internBanner from "&/images/career/intern.png";

export const InternBanner: FC = () => {
  return (
    <BannerTemplate image={internBanner}>
      <div className={styles.text}>
        <p className={styles.title}>Набор стажеров Python</p>
        <p className={styles.description}>
          Мы постоянно развиваем Python-отдел как наше основное направление и
          растим новых специалистов. Узнай подробнее про нашу программу
          менторства
        </p>
        <Button variant="light">Подробнее</Button>
      </div>
    </BannerTemplate>
  );
};
