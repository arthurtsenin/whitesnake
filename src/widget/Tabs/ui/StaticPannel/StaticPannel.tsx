import Image from "next/image";
import { FC } from "react";

import styles from "./StaticPannel.module.css";

import { IndustryType } from "@/widget/Tabs/data";

type StaticPannelProps = {
  panel: IndustryType;
};

export const StaticPannel: FC<StaticPannelProps> = ({ panel }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image
          alt={panel.name}
          src={panel.image}
          placeholder="blur"
          quality={100}
          priority
          fill
        />
        <div className={styles.text}>
          <h2 className={styles.title}>{panel.name}</h2>
          <p className={styles.description}>{panel.description}</p>
        </div>
      </div>
    </div>
  );
};
