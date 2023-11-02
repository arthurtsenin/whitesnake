import styles from "./AppLoader.module.css";

export const AppLoader = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.glowRed} />
      <div className={styles.glowBlue} />
      <div className={styles.container}>
        <h1>
          <span>w</span>
          hitesnake
        </h1>
      </div>
    </div>
  );
};
