import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./CaseCard.module.css";

import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

type CaseCardProps = {
  caption: string;
  description: string;
  path: string;
  image: StaticImageData | string;
};

export const CaseCard: FC<CaseCardProps> = ({
  image,
  path,
  description,
  caption,
}) => {
  return (
    <figure className={styles.container}>
      <Image src={image} alt={caption} placeholder="blur" />

      <figcaption className={styles.caption}>{caption}</figcaption>

      <Link
        href={`${NAVIGATION_LINKS.portfolio.href}/${path}`}
        className={styles.hover}
      >
        <p className={styles.description}>{description}</p>
        <span className={styles.further}>Подробнее</span>
      </Link>
    </figure>
  );
};
