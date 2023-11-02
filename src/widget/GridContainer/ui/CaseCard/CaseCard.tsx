import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./CaseCard.module.css";

import { NAVIGATION_LINKS } from "@/widget/Navigation/routes";

import arrow from "&/arrow-right.svg";

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
      <div className={styles.wrapper}>
        <Image src={image} alt={caption} placeholder="blur" />
        <Link
          href={`${NAVIGATION_LINKS.portfolio.href}/${path}`}
          className={styles.hover}
        >
          <div className={styles.arrow}>
            <Image
              src={arrow}
              alt="стрелочка для перехода на страницу с детальной информацией"
            />
          </div>
          <p className={styles.description}>{description}</p>
        </Link>
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
};
