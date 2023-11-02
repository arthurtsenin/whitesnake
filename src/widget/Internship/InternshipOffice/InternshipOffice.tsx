import { FC } from "react";

import styles from "./InternshipOffice.module.css";

import { Chip, Title } from "@/shared";
import { OfficeBenefits } from "@/widget/OfficeBenefits/OfficeBenefits";
import { YandexMap } from "@/widget/YandexMap/YandexMap";

import { OFFICE_BENEFITS_DATA, OFFICE_TAGS } from "./data";

export const InternshipOffice: FC = () => {
  return (
    <>
      <div className={styles.internshipOffice}>
        <Title title="Наш офис" />
        <div className={styles.chipsContainer}>
          {OFFICE_TAGS.map((tag) => (
            <Chip key={tag} text={tag} />
          ))}
        </div>
        <OfficeBenefits data={OFFICE_BENEFITS_DATA} />
        <YandexMap />
      </div>
    </>
  );
};
