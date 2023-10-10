import Image from "next/image";
import { FC } from "react";

import styles from "./Oddbox.module.css";

import { TitleProps } from "@/shared/ui/Title/Title";

import { Keyword } from "../ui/Keyword/Keyword";

import heroBg from "&/cases/food-delivery-service.png";

export type OddboxProps = {
  keywords: string[];
} & TitleProps;

export const Oddbox: FC<OddboxProps> = ({ title, subtitle, keywords }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h1 className={styles.title}>{title}</h1>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
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
