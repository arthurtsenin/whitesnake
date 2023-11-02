import { FC, MutableRefObject, useEffect, useState } from "react";

import styles from "./ButtonUp.module.css";

import { MotionAnimatePresence } from "@/shared/motion/MotionAnimatePresence";
import { MotionComponent } from "@/shared/motion/MotionComponent";

type ButtonUpProps = {
  elementRef: MutableRefObject<HTMLElement | null>;
};

export const ButtonUp: FC<ButtonUpProps> = ({ elementRef }) => {
  const [isInView, setIsInView] = useState<boolean>(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIsInView(entry.isIntersecting),
    );

    if (elementRef.current) {
      observer.observe(elementRef?.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [elementRef]);

  return (
    <MotionAnimatePresence>
      {isInView && (
        <MotionComponent
          as="div"
          className={styles.buttonContainer}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button className={styles.buttonUp} onClick={handleClick}>
            <span className={styles.arrowUp} />
            <span className={styles.arrowUp} />
          </button>
        </MotionComponent>
      )}
    </MotionAnimatePresence>
  );
};
