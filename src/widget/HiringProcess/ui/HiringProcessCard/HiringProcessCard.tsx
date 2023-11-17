import cn from "classnames";
import Image from "next/image";
import { FC, MouseEventHandler } from "react";

import styles from "./HiringProcessCard.module.css";

import { HiringProcessCardType } from "../../data";

type HiringProcessCardProps = {
  isActive: boolean;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
} & HiringProcessCardType;

export const HiringProcessCard: FC<HiringProcessCardProps> = ({
  title,
  instructions,
  image,
  isActive,
  // onPrevClick,
  // onNextClick,
  onClick,
}) => {
  return (
    <div
      className={cn(styles.container, {
        [styles.active]: isActive,
      })}
      onClick={onClick}
    >
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
