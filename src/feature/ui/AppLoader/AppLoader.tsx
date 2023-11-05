import Image from "next/image";

import styles from "./AppLoader.module.css";

import smile from "&/images/Vector.svg";

export const AppLoader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glowRed} />
      <div className={styles.glowBlue} />
      <div className={styles.container}>
        <h1>
          <span>
            w <Image className={styles.smile} alt="" src={smile} />
          </span>
          hitesnake
        </h1>
      </div>
    </div>
  );
};
