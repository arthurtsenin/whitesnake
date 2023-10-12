import Image from "next/image";
import { FC } from "react";

import styles from "./Oddbox.module.css";

import { Container } from "@/shared/ui/Container/Container";
import { TitleProps } from "@/shared/ui/Title/Title";

import { Keyword } from "../ui/Keyword/Keyword";

import heroImage from "&/cases/food-delivery-service.png";
import heroBg from "&/cases/silver-lines-bg.png";

export type OddboxProps = {
  keywords: string[];
} & TitleProps;

export const Oddbox: FC<OddboxProps> = ({ title, subtitle, keywords }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.bgWrapper}>
        <Image
          alt=""
          src={heroBg}
          placeholder="blur"
          quality={100}
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <Container>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>{title}</h1>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.imgWrapper}>
            <Image src={heroImage} alt="" priority />
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
