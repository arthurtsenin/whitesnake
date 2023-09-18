import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./CaseCard.module.scss";

type CaseCardProps = {
  caption: string;
  description: string;
  adress: string;
  image: StaticImageData;
};

export const CaseCard: FC<CaseCardProps> = ({
  image,
  adress,
  description,
  caption,
}) => {
  return (
    <figure className={styles.container}>
      <div className={styles.wrapper}>
        <Image src={image} alt={caption} />
        <Link href={adress} className={styles.hover}>
          <div className={styles.arrow}>{"->"}</div>
          <p className={styles.description}>{description}</p>
        </Link>
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
};
