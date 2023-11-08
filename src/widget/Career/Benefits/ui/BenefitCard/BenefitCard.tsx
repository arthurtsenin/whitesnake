import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./BenefitCard.module.css";

type BenefitCardProps = {
  title: string;
  description: string;
  imageSrc: StaticImageData;
};

export const BenefitCard: FC<BenefitCardProps> = ({
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className={styles.card}>
      <Image src={imageSrc} alt="" />

      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};
