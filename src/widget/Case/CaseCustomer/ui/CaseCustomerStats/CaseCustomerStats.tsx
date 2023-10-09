import { FC } from "react";

import styles from "./CaseCustomerStats.module.css";

import { caseCustomerStats } from "../../types";

type caseCustomerStatsProps = {
  stats: caseCustomerStats;
};

export const CaseCustomerStats: FC<caseCustomerStatsProps> = ({ stats }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.statsItem}>
        {Object.keys(stats).map((label) => (
          <span key={label} className={styles.statsLabel}>
            {label}
          </span>
        ))}
      </div>
      <div className={styles.statsItem}>
        {Object.values(stats).map((info, index) => (
          <span key={index} className={styles.statsInfo}>
            {Array.isArray(info) ? info.join(", ") : info}
          </span>
        ))}
      </div>
    </div>
  );
};
