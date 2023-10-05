import Image from "next/image";
import { FC } from "react";

import styles from "./Datarails.module.css";

import { TitleProps } from "@/shared/ui/Title/Title";

import { Keyword } from "../ui/Keyword";

import heroBg from "&/cases-preview/datarails-case-image.png";

export type DatarailsProps = {
  keywords: string[];
} & TitleProps;

export const Datarails: FC<DatarailsProps> = ({
  title,
  subtitle,
  keywords,
}) => {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.imgWrapper}>
        <Image src={heroBg} alt="" />
      </div>
      <div className={styles.keywords}>
        {keywords.map((k, idx) => (
          <Keyword key={idx} keyword={k} />
        ))}
      </div>
    </section>
  );
};
