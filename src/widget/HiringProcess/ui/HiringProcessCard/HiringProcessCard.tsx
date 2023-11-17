import cn from "classnames";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";

import styles from "./HiringProcessCard.module.css";

import { HiringProcessCardType } from "../../data";

type HiringProcessCardProps = {
  isActive: boolean;
  setActiveItemId: (num: number) => void;
} & HiringProcessCardType;

export const HiringProcessCard: FC<HiringProcessCardProps> = ({
  id,
  title,
  instructions,
  image,
  isActive,
  setActiveItemId,
  // containerRef,
}) => {
  const itemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const callback = (entries: Array<IntersectionObserverEntry>) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.75) {
          const newId = Number(entry.target.dataset.id);
          setActiveItemId(newId);
        }
      });
    };

    const options = {
      root: document.querySelector("#inner"),
      rootMargin: "0px",
      threshold: 1,
    };

    const observer = new IntersectionObserver(callback, options);

    if (itemRef && itemRef.current) {
      observer.observe(itemRef.current);
    }

    // return () => unobserve
  }, [setActiveItemId]);

  return (
    <div
      className={cn(styles.container, {
        [styles.active]: isActive,
      })}
      data-id={id}
      ref={itemRef}
    >
      <div className={styles.wrapper}>
        <Image alt="" placeholder="blur" src={image} />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{title}</p>

        <div className={styles.instructions}>
          {instructions.map((instruction, idx) => (
            <p key={idx} className={styles.description}>
              {instruction}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};
