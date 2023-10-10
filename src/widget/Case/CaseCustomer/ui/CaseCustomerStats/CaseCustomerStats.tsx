import React, { FC } from "react";

import styles from "./CaseCustomerStats.module.css";

import { caseCustomerStats } from "../../types";

type caseCustomerStatsProps = {
  stats: caseCustomerStats;
};

export const CaseCustomerStats: FC<caseCustomerStatsProps> = ({ stats }) => {
  return (
    <div className={styles.stats}>
      {Object.entries(stats).map(([key, value], index) => (
        <React.Fragment key={index}>
          <div className={styles.statsLabel}>{key}</div>
          <div className={styles.statsInfo}>{value}</div>
        </React.Fragment>
      ))}
    </div>
  );
};
