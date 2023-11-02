import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./InternshipCard.module.css";

import { MotionComponent } from "@/shared/motion/MotionComponent";
import { DescriptionItemData } from "@/widget/InternshipCardsContainer/data";

type InternshipCard = {
  title: string;
  description: DescriptionItemData[];
  timeCount?: string;
  timeInfo?: string;
  image?: StaticImageData;
  mark?: string;
  activeCard: number;
  index: number;
};

export const InternshipCard: FC<InternshipCard> = ({
  image,
  timeInfo,
  timeCount,
  mark,
  description,
  title,
  activeCard,
  index,
}) => {
  return (
    <MotionComponent
      as="div"
      className={classNames(styles.card, {
        [styles.active]: activeCard === index,
      })}
    >
      <div className={styles.preview}>
        <div className={styles.text}>
          <h2 className={styles.title}>{title}</h2>
          {mark && <p className={styles.mark}>{mark}</p>}
        </div>

        <div className={styles.date}>
          {image ? (
            <div className={styles.wrapper}>
              <Image src={image} alt="декоративное изображение" />
            </div>
          ) : (
            <>
              <div className={styles.timeCount}>{timeCount}</div>
              <p className={styles.timeInfo}>{timeInfo}</p>
            </>
          )}
        </div>
      </div>

      <MotionComponent
        as="ul"
        className={styles.description}
        animate={{ height: activeCard === index ? "auto" : "0" }}
      >
        {description.map((item) => (
          <li key={item.id}>{item.item}</li>
        ))}
      </MotionComponent>
    </MotionComponent>
  );
};
