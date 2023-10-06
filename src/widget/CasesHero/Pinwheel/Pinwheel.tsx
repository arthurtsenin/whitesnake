import { FC } from "react";

import styles from "./Pinwheel.module.css";

import { HeroTitle, HeroTitleProps } from "../ui/HeroTitle/HeroTitle";
import { Keyword } from "../ui/Keyword/Keyword";

export type PinwheelProps = {
  keywords: string[];
} & HeroTitleProps;

export const Pinwheel: FC<PinwheelProps> = ({ title, subtitle, keywords }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <HeroTitle title={title} subtitle={subtitle} />
        <div className={styles.keywords}>
          {keywords.map((k, idx) => (
            <Keyword key={idx} keyword={k} />
          ))}
        </div>
      </div>
    </section>
  );
};
