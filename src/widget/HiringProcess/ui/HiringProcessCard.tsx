import Image from "next/image";
import { FC } from "react";

import styles from "./HiringProcessCard.module.css";

import { HiringProcessCardType } from "../data";

type HiringProcessCardProps = object & HiringProcessCardType;

export const HiringProcessCard: FC<HiringProcessCardProps> = ({
  title,
  instructions,
  image,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Image alt="" placeholder="blur" src={image} />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        <div className={styles.instructions}>
          {instructions.map((instruction, idx) => (
            <p key={idx} className={styles.description}>
              {instruction}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
