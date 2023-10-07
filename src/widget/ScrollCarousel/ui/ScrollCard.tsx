import Image, { StaticImageData } from "next/image";

import styles from "./ScrollCard.module.css";
type ScrollCardProps = {
  image: StaticImageData;
  order: string;
  title: string;
  description: string;
};
export const ScrollCard = ({
  image,
  order,
  title,
  description,
}: ScrollCardProps) => {
  return (
    <div className={styles.container}>
      <Image src={image} alt="marker" />
      <div className={styles.text}>
        <mark>{order}</mark>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};
