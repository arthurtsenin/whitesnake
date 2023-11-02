import Image, { StaticImageData } from "next/image";
import { FC } from "react";

import styles from "./SolutionItem.module.css";

type SolutionItemProps = {
  text: Array<string>;
  image: string | StaticImageData;
};

export const SolutionItem: FC<SolutionItemProps> = ({ text, image }) => {
  return (
    <>
      <div className={styles.description}>
        {text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.wrapper}>
        <Image
          src={image}
          alt="изображение карточки решения задачи"
          placeholder="blur"
        />
      </div>
    </>
  );
};
