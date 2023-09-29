import Image from "next/image";
import { FC } from "react";

import styles from "./StaticPannel.module.scss";

import { IndustryType } from "@/widget/Tabs/data";

type StaticPannelProps = {
  panel: IndustryType;
};

export const StaticPannel: FC<StaticPannelProps> = ({ panel }) => {
  return (
    <div className={styles.wrapper}>
      <Image
        alt={panel.name}
        src={panel.image}
        placeholder="blur"
        quality={100}
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <div className={styles.text}>
        <h2 className={styles.title}>{panel.name}</h2>
        <p className={styles.description}>{panel.description}</p>
      </div>
    </div>
  );
};
