import Image from "next/image";

import styles from "./Scroller.module.css";

import { SLIDER_IMAGES } from "./data";

// type ScrollerProps = {}

export const Scroller = () => {
  return (
    <div className={styles.scroller} data-animated="true">
      <ul className={styles.scroller__inner}>
        {SLIDER_IMAGES.map((el) => (
          <li key={el.id}>
            <Image src={el.url} alt="" priority />
          </li>
        ))}
      </ul>
    </div>
  );
};
