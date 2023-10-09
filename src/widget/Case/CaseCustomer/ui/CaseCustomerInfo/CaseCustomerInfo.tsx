import { FC } from "react";

import styles from "./CaseCustomerInfo.module.css";

type caseCustomerInfoProps = {
  info: string[];
};

export const CaseCustomerInfo: FC<caseCustomerInfoProps> = ({ info }) => {
  return (
    <div className={styles.infoWrapper}>
      {info.map((item, index) => (
        <p key={index} className={styles.infoParagraph}>
          {item}
        </p>
      ))}
    </div>
  );
};
