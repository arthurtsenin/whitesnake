import { FC } from "react";

import styles from "./CaseCustomer.module.css";

import { caseCustomerStats } from "./types";
import { CaseCustomerInfo } from "./ui/CaseCustomerInfo/CaseCustomerInfo";
import { CaseCustomerStats } from "./ui/CaseCustomerStats/CaseCustomerStats";

type caseCustomerProps = {
  info: string[];
  stats: caseCustomerStats;
};

export const CaseCustomer: FC<caseCustomerProps> = ({ stats, info }) => {
  return (
    <div className={styles.caseCustomer}>
      <CaseCustomerStats stats={stats} />
      <CaseCustomerInfo info={info} />
    </div>
  );
};
