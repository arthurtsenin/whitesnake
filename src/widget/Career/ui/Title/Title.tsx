import { FC } from "react";

import styles from "./Title.module.css";

import { Container } from "@/shared";

export type TitleProps = {
  title: string;
  subtitle?: string;
  suptitle?: string;
};

export const Title: FC<TitleProps> = ({ title, subtitle, suptitle }) => {
  return (
    <Container>
      <div className={styles.text}>
        {suptitle && <p className={styles.suptitle}>{suptitle}</p>}
        <h2 className={styles.title}>{title}</h2>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </div>
    </Container>
  );
};
