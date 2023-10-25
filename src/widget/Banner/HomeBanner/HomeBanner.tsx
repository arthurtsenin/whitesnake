import { FC } from "react";

import styles from "./HomeBanner.module.css";

import { Button } from "@/shared";

import { BannerTemplate } from "../BannerTemplate";

import homeBanner from "&/banner/banner.png";

export const HomeBanner: FC = () => {
  return (
    <BannerTemplate image={homeBanner}>
      <div className={styles.text}>
        <p className={styles.title}>
          Выберите специалиста <br /> за 5 минут
        </p>
        <p className={styles.description}>
          Отправим резюме подходящих специалистов в течение суток
        </p>

        <Button variant="secondary">Оставить заявку</Button>
      </div>
    </BannerTemplate>
  );
};
