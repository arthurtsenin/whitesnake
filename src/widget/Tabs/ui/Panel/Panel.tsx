import Image from "next/image";
import { FC } from "react";

import styles from "./Panel.module.scss";

import { PanelType } from "@/widget/Tabs/data";

type PanelProps = {
  panel: PanelType;
};

export const Panel: FC<PanelProps> = ({ panel }) => {
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
