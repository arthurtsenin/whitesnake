import { FC } from "react";

import styles from "./Title.module.css";

type TitleProps = {
  title: string;
  substitle: string;
  description: string;
};

export const Title: FC<TitleProps> = ({ title, substitle, description }) => {
  return (
    <div className={styles.text}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.substitle}>{substitle}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
