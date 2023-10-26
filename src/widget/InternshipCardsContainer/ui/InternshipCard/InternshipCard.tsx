"use client";
import classNames from "classnames";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./InternshipCard.module.css";

import { DescriptionItemData } from "@/widget/InternshipCardsContainer/data";

type InternshipCard = {
  title: string;
  description: DescriptionItemData[];
  timeCount?: string;
  timeInfo?: string;
  image?: StaticImageData;
  additionalDescription?: string;
  activeCard: number;
  index: number;
};
export const InternshipCard: FC<InternshipCard> = ({
  image,
  timeInfo,
  timeCount,
  additionalDescription,
  description,
  title,
  activeCard,
  index,
}) => {
  return (
    <motion.div
      className={classNames(styles.internshipCard, {
        [styles.activeCard]: activeCard === index,
      })}
    >
      <div className={styles.content}>
        <h2 className={styles.cardTitle}>{title}</h2>
        {additionalDescription && (
          <p className={styles.additionalInfo}>({additionalDescription})</p>
        )}
        <motion.ul
          className={classNames(styles.descriptionList, {
            [styles.activeList]: activeCard === index,
          })}
          animate={{ height: activeCard === index ? "auto" : "0" }}
        >
          {description.map((item) => (
            <li key={item.id}>{item.descriptionItem}</li>
          ))}
        </motion.ul>
        <div className={styles.wrapper}>
          {image ? (
            <Image src={image} alt="image" />
          ) : (
            <>
              <div className={styles.timeCount}>{timeCount}</div>
              <p className={styles.timeInfo}>{timeInfo}</p>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};
