import Image from "next/image";
import { FC } from "react";

import styles from "./Banner.module.css";

import { Button, Container } from "@/shared";

import bannerBg from "&/banner/banner.webp";

export const Banner: FC = () => {
  return (
    <Container>
      <div className={styles.banner}>
        <div className={styles.wrapper}>
          <Image
            alt="banner"
            src={bannerBg}
            placeholder="blur"
            quality={100}
            fill
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
          <div className={styles.bannerContent}>
            <p className={styles.bannerTitle}>
              Выберите специалиста <br /> за 5 минут
            </p>
            <p className={styles.bannerDesc}>
              Отправим резюме подходящих специалистов в течение суток
            </p>
            <div className={styles.bannerBtn}>
              <Button variant="secondary">Оставить заявку</Button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
