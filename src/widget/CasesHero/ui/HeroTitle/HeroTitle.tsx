import { FC } from "react";

import styles from "./HeroTitle.module.css";

export type HeroTitleProps = {
  title: string;
  subtitle?: string;
  suptitle?: string;
};

export const HeroTitle: FC<HeroTitleProps> = ({
  title,
  subtitle,
  suptitle,
}) => {
  return (
    <div className={styles.text}>
      {suptitle && <p className={styles.suptitle}>{suptitle}</p>}
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};
