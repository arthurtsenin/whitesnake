"use client";
import Image, { StaticImageData } from "next/image";

import styles from "./HomeScrollerCard.module.css";

type ScrollCardProps = {
  image: StaticImageData;
  order: string;
  title: string;
  description: string;
};

export const HomeScrollerCard = ({
  image,
  order,
  title,
  description,
}: ScrollCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt="декоративное изображение пунктов списка" />
      </div>

      <div className={styles.text}>
        <mark>{order}</mark>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
