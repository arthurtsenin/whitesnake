import Link from "next/link";
import { FC } from "react";

import styles from "./ContactCard.module.css";

type ContactCardProps = {
  url: string;
  title: string;
  target: string;
  description: string;
};

export const ContactCard: FC<ContactCardProps> = ({
  url,
  title,
  target,
  description,
}) => {
  return (
    <Link target={target} href={url} className={styles.text} scroll={false}>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};
