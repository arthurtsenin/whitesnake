import Image from "next/image";
import { FC } from "react";

import styles from "./Pinwheel.module.css";

import { Container } from "@/shared/ui/Container/Container";
import { TitleProps } from "@/shared/ui/Title/Title";

import { Keyword } from "../ui/Keyword/Keyword";

import heroBg from "&/images/cases/cases-hero/silver-lines-bg.png";

export type PinwheelProps = {
  keywords: string[];
} & TitleProps;

export const Pinwheel: FC<PinwheelProps> = ({ title, subtitle, keywords }) => {
  return (
    <section className={styles.hero}>
      <Image
        alt=""
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
