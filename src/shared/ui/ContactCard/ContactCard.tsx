import Link from "next/link";
import { FC } from "react";

import styles from "./ContactCard.module.scss";

type ContactCardProps = {
  url: string;
  title: string;
  description: string;
};

export const ContactCard: FC<ContactCardProps> = ({
  url,
  title,
  description,
}) => {
  return (
    <div className={styles.container}>
      <Link href={url} className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </Link>
    </div>
  );
};