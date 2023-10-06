import Image from "next/image";
import { FC } from "react";

import styles from "./Oscar.module.css";

import { HeroTitle, HeroTitleProps } from "../ui/HeroTitle/HeroTitle";
import { Keyword } from "../ui/Keyword/Keyword";

import heroBg from "&/cases/health-insurance-platform.webp";

export type OscarProps = {
  keywords: string[];
} & HeroTitleProps;

export const Oscar: FC<OscarProps> = ({ title, subtitle, keywords }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <HeroTitle title={title} subtitle={subtitle} />
        <div className={styles.imgWrapper}>
          <Image src={heroBg} alt="" priority />
        </div>
        <div className={styles.keywords}>
          {keywords.map((k, idx) => (
            <Keyword key={idx} keyword={k} />
          ))}
        </div>
      </div>
    </section>
  );
};
