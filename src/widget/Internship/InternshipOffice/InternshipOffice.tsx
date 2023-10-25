import { FC } from "react";

import styles from "./InternshipOffice.module.css";

import { Chip } from "@/shared";
import { OfficeBenefits } from "@/widget/OfficeBenefits/OfficeBenefits";
import { YandexMap } from "@/widget/YandexMap/YandexMap";

import { OFFICE_BENEFITS_DATA, OFFICE_TAGS } from "./data";

export const InternshipOffice: FC = () => {
  return (
    <section className={styles.internshipOffice}>
      <h2 className={styles.title}>Наш офис</h2>
      <div className={styles.chipsContainer}>
        {OFFICE_TAGS.map((tag) => (
          <Chip key={tag} text={tag} />
        ))}
      </div>
      <YandexMap />
      <div className={styles.officeBenefitsWrapper}>
        <OfficeBenefits data={OFFICE_BENEFITS_DATA} />
      </div>
    </section>
  );
};
