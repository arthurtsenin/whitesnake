import classNames from "classnames";
import Image from "next/image";
import { FC } from "react";

import styles from "./SolutionItem.module.css";

type SolutionItemProps = {
  text: Array<string>;
  image: string;
  direction?: string;
};

export const SolutionItem: FC<SolutionItemProps> = ({
  text,
  image,
  direction,
}) => {
  return (
    <div
      className={classNames([styles.container, styles[direction || ""]], {})}
    >
      <div className={styles.description}>
        {text.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className={styles.wrapper}>
        <Image src={image} alt={image} />
      </div>
    </div>
  );
};
