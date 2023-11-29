import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./HomeBanner.module.css";

import { Button } from "@/shared";
import { FORM_URL_PARAMS } from "@/widget/Form/params";

import { BannerTemplate } from "../BannerTemplate";

import homeBanner from "&/images/banner/banner.png";
import bubble from "&/images/raindrops/22.png";

export const HomeBanner: FC = () => {
  return (
    <BannerTemplate image={homeBanner}>
      <div className={styles.text}>
        <div className={styles.wrapper}>
          <Image alt="" src={bubble} className={styles.image} priority />
        </div>
        <p className={styles.title}>
          Выберите специалиста <br /> за 5 минут
        </p>
        <p className={styles.description}>
          Отправим резюме подходящих специалистов в течение суток
        </p>

        <Link href={FORM_URL_PARAMS.LeaveRequest}>
          <Button variant="secondary">Оставить заявку</Button>
        </Link>
      </div>
    </BannerTemplate>
  );
};
