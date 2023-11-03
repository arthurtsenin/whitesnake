import Image from "next/image";
import { FC } from "react";

import styles from "./InternshipOffice.module.css";

import { Chip, Title } from "@/shared";
import { OfficeBenefits } from "@/widget/OfficeBenefits/OfficeBenefits";
import { YandexMap } from "@/widget/YandexMap/YandexMap";

import { OFFICE_BENEFITS_DATA, OFFICE_TAGS } from "./data";

import bubble2 from "&/images/internship/office_bubble_2.png";
import bubble from "&/images/internship/office_work_benefits_buble.png";

export const InternshipOffice: FC = () => {
  return (
    <section className={styles.internshipOffice}>
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Image src={bubble} alt="Декоративный элемент" />
          <div className={styles.redGlow} />
        </div>

        <div className={styles.imageWrapper2}>
          <Image src={bubble2} alt="Декоративный элемент" />
          {/* <div className={styles.redGlow2} /> */}
        </div>
        <Title title="Наш офис" />
        <div className={styles.chipsContainer}>
          {OFFICE_TAGS.map((tag) => (
            <Chip key={tag} text={tag} />
          ))}
        </div>
        <OfficeBenefits data={OFFICE_BENEFITS_DATA} />
        <YandexMap />
      </div>
    </section>
  );
};
