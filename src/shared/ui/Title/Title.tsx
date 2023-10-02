import { FC } from "react";

import styles from "./Title.module.css";

type TitleProps = {
  title: string;
  subtitle?: string;
  suptitle?: string;
};

export const Title: FC<TitleProps> = ({ title, subtitle, suptitle }) => {
  return (
    <div className={styles.text}>
      {suptitle && <p className={styles.suptitle}>{suptitle}</p>}
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.substitle}>{subtitle}</p>}
    </div>
  );
};
