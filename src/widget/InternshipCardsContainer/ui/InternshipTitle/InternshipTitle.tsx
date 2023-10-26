import { FC } from "react";

import styles from "./InternshipTitle.module.css";

import { Container } from "@/shared";

export type InternShipTitleProps = {
  title: string;
  subtitle: string;
};

export const InternShipTitle: FC<InternShipTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <Container>
      <div className={styles.text}>
        <p className={styles.subtitle}>{subtitle}</p>
        <h2 className={styles.title}>{title}</h2>
      </div>
    </Container>
  );
};
