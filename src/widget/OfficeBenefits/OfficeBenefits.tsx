import { FC } from "react";

import styles from "./OfficeBenefits.module.css";

import { OfficeBenefitData } from "./types";
import { OfficeBenefitCard } from "./ui/OfficeBenefitCard";

type OfficeBenefitsProps = {
  data: OfficeBenefitData[];
};

export const OfficeBenefits: FC<OfficeBenefitsProps> = ({ data }) => {
  return (
    <div className={styles.officeBenefits}>
      <div className={styles.officeBenefitsWrapper}>
        {data?.map((item) => <OfficeBenefitCard key={item.title} {...item} />)}
      </div>
    </div>
  );
};
