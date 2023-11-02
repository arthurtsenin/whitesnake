import styles from "./FirstCard.module.css";

export const FirstCard = () => {
  return (
    <div className={styles.card}>
      {/* <div className={styles.glowBlue}></div>
      <div className={styles.glowRed}></div> */}
      <div className={styles.textContainer}>
        <h4>340</h4>
        <p>
          лет опыта в сумме <br /> у всех разработчиков
        </p>
      </div>
      {/* <div className={styles.raindropY}>
        <Image alt="декоративное изображение" src={raindropYellow} priority />
      </div>
      <div className={styles.raindropB}>
        <Image alt="декоративное изображение" src={raindropBlue} priority />
      </div> */}
    </div>
  );
};
