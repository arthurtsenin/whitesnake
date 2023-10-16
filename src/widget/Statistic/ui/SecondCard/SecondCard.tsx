import styles from "./SecondCard.module.css";

export const SecondCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.text}>
        <p>200+</p>
        <p>успешных проектов</p>
      </div>
      <div className={styles.graphic}>
        <svg width="18%" height="25%" className={styles.rectangle}>
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="10%" y2="100%">
              <stop offset="0%" stopColor="rgba(246,103,55,1)" />
              <stop offset="100%" stopColor="rgba(95,93,231,1)" />
            </linearGradient>
          </defs>
          <rect
            className={styles.shadow}
            x="9"
            y="1"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            stroke="gray"
            // fill='transparent'
          />
          <rect
            x="0"
            y="10"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            // stroke='url(#linear)'
            // fill='transparent'
          />
        </svg>
        <svg width="18%" height="25%" className={styles.rectangle}>
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(246,103,55,1)" />
              <stop offset="100%" stopColor="rgba(95,93,231,1)" />
            </linearGradient>
          </defs>
          <rect
            className={styles.shadow}
            x="9"
            y="1"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            stroke="gray"
            // fill='transparent'
          />
          <rect
            x="0"
            y="10"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            // stroke='url(#linear)'
            // fill='transparent'
          />
        </svg>
        <svg width="18%" height="25%" className={styles.rectangle}>
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(246,103,55,1)" />
              <stop offset="100%" stopColor="rgba(95,93,231,1)" />
            </linearGradient>
          </defs>
          <rect
            className={styles.shadow}
            x="9"
            y="1"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            stroke="gray"
            // fill='transparent'
          />
          <rect
            x="0"
            y="10"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            // stroke='url(#linear)'
            // fill='transparent'
          />
        </svg>
        <svg width="18%" height="25%" className={styles.rectangle}>
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(246,103,55,1)" />
              <stop offset="100%" stopColor="rgba(95,93,231,1)" />
            </linearGradient>
          </defs>
          <rect
            className={styles.shadow}
            x="9"
            y="1"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            stroke="gray"
            // fill='transparent'
          />
          <rect
            x="0"
            y="10"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            // stroke='url(#linear)'
            // fill='transparent'
          />
        </svg>
        <svg width="18%" height="25%" className={styles.rectangle}>
          <defs>
            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(246,103,55,1)" />
              <stop offset="100%" stopColor="rgba(95,93,231,1)" />
            </linearGradient>
          </defs>
          <rect
            className={styles.shadow}
            x="9"
            y="1"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            stroke="gray"
            // fill='transparent'
          />
          <rect
            x="0"
            y="10"
            width="90%"
            height="100%"
            rx="12"
            ry="12"
            // stroke='url(#linear)'
            // fill='transparent'
          />
        </svg>
      </div>
    </div>
  );
};
