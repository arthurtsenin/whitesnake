import Image from "next/image";
import { FC } from "react";

import styles from "./Mawi.module.css";

import { Container } from "@/shared/ui/Container/Container";
import { TitleProps } from "@/shared/ui/Title/Title";

import { Keyword } from "../ui/Keyword/Keyword";

import heroImage from "&/cases/health-monitoring.png";
import heroBg from "&/cases/hexagon-bg.png";

export type MawiProps = {
  keywords: string[];
} & TitleProps;

export const Mawi: FC<MawiProps> = ({ title, subtitle, keywords }) => {
  return (
    <section className={styles.hero}>
      <Image
        alt="фоновое изображение хиро"
        src={heroBg}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.imgWrapper}>
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
            <Image src={heroImage} alt="фоновое изображение хиро" priority />
          </div>
          <div className={styles.keywords}>
            {keywords.map((k, idx) => (
              <Keyword key={idx} keyword={k} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
