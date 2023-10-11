import Image from "next/image";

import styles from "./FirstCard.module.css";

import raindropBlue from "&/images/statistic/raindrop-blue.png";
import raindropYellow from "&/images/statistic/raindrop-yellow.png";

export const FirstCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.glowBlue}></div>
      <div className={styles.glowRed}></div>
      <div className={styles.textContainer}>
        <h5>340</h5>
        <p>
          лет опыта в сумме <br /> у всех разработчиков
        </p>
      </div>
      <div className={styles.raindropY}>
        <Image alt="" src={raindropYellow} />
      </div>
      <div className={styles.raindropB}>
        <Image alt="" src={raindropBlue} />
      </div>
    </div>
  );
};
