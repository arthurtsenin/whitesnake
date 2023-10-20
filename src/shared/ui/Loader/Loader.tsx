import styles from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ring}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};