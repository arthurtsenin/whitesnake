import Image from "next/image";

import styles from "./Scroller.module.css";

import { sliderImages } from "./data";

// type ScrollerProps = {}

export const Scroller = () => {
  return (
    <div className={styles.scroller} data-animated="true">
      <ul className={styles.scroller__inner}>
        {sliderImages.map((el) => (
          <li key={el.id}>
            <Image src={el.url} alt="partner" />
          </li>
        ))}
      </ul>
    </div>
  );
};
