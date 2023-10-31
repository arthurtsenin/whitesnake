import styles from "./FifthCard.module.css";

export const FifthCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p>10</p>
        <p>бенч</p>
      </div>
      {/* <div className={styles.glow} /> */}

      <div className={styles.images}>
        {/* <Image src={greenRaindrop} alt="raindrop" /> */}
        {/* <Image src={semiRaindrop} alt="raindrop" /> */}
      </div>
    </div>
  );
};
