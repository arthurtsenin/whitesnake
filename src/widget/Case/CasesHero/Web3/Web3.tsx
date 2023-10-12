import Image from "next/image";
import { FC } from "react";

import styles from "./Web3.module.css";

import { Container } from "@/shared/ui/Container/Container";
import { TitleProps } from "@/shared/ui/Title/Title";

import { Keyword } from "../ui/Keyword/Keyword";

import heroImage from "&/cases/digital-asset-staking-service.webp";

export type Web3Props = {
  keywords: string[];
} & TitleProps;

export const Web3: FC<Web3Props> = ({ title, subtitle, keywords }) => {
  return (
    <section className={styles.hero}>
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
