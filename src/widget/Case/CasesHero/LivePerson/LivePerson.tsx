import Image from "next/image";
import { FC } from "react";

import styles from "./LivePerson.module.css";

import { Container } from "@/shared/ui/Container/Container";
import { TitleProps } from "@/shared/ui/Title/Title";

import { Keyword } from "../ui/Keyword/Keyword";

import heroBg from "&/cases/hexagon-bg.png";
import heroImage from "&/cases/platform-for-customer-support.png";

export type LivePersonProps = {
  keywords: string[];
} & TitleProps;

export const LivePerson: FC<LivePersonProps> = ({
  title,
  subtitle,
  keywords,
}) => {
  return (
    <section className={styles.hero}>
      <Image
        alt=""
        src={heroBg}
        quality={100}
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
