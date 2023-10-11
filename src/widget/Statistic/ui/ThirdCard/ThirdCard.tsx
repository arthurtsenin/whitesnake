import styles from "./ThirdCard.module.css";

export const ThirdCard = () => {
  const circleArray = [...new Array(16)];

  return (
    <div className={styles.card}>
      <div className={styles.glow} />

      <div className={styles.text}>
        <p>100</p>
        <p>специалистов в команде</p>
      </div>
      <div className={styles.circles}>
        {circleArray.map((el, i) => (
          <svg key={i} width="100%" height="100%" className={styles.rectangle}>
            <defs>
              <linearGradient id="linear1" x1="60%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="rgba(246,103,55,.5)" />
                <stop offset="100%" stopColor="rgba(95,93,231,.5)" />
              </linearGradient>
            </defs>

            <circle
              stroke-width="2"
              cx="50%"
              cy="50%"
              r="48%"
              stroke="url(#linear1)"
              fill="transparent"
            />
          </svg>
        ))}
      </div>
    </div>
  );
};
