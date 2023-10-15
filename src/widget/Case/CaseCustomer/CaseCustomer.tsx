import { FC } from "react";

import styles from "./CaseCustomer.module.css";

import { caseCustomerStats } from "./types";
import { CaseCustomerInfo } from "./ui/CaseCustomerInfo/CaseCustomerInfo";
import { CaseCustomerStats } from "./ui/CaseCustomerStats/CaseCustomerStats";
import { CaseTitle } from "../ui/Title/CaseTitle";

type caseCustomerProps = {
  info: string[];
  stats: caseCustomerStats;
  title: string;
};

export const CaseCustomer: FC<caseCustomerProps> = ({ stats, info, title }) => {
  return (
    <div className={styles.container}>
      <CaseTitle title={title} />
      <div className={styles.content}>
        <CaseCustomerStats stats={stats} />
        <CaseCustomerInfo info={info} />
      </div>
    </div>
  );
};
