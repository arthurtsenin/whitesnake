import dynamic from "next/dynamic";
import Image from "next/image";
import { FC } from "react";

import styles from "./InternshipOffice.module.css";

import { Chip, Container, Title } from "@/shared";
import { MapPreview } from "@/widget/YandexMap/ui/MapPreview/MapPreview";

import { OFFICE_BENEFITS_DATA, OFFICE_TAGS } from "./data";

import bubble from "&/images/raindrops/16.png";
import bubble2 from "&/images/raindrops/20.png";

const OfficeBenefits = dynamic(
  () => import("@/widget/OfficeBenefits/OfficeBenefits"),
);

export const InternshipOffice: FC = () => {
  return (
    <Container>
      <section className={styles.internshipOffice}>
        <div className={styles.wrapper}>
          <div className={styles.imageWrapper}>
            <Image src={bubble} alt="" />
            <div className={styles.redGlow} />
          </div>

          <div className={styles.imageWrapper2}>
            <Image src={bubble2} alt="" />
          </div>
          <Title title="Наш офис" />
          <div className={styles.chipsContainer}>
            {OFFICE_TAGS.map((tag) => (
              <Chip key={tag} text={tag} />
            ))}
          </div>
          <OfficeBenefits data={OFFICE_BENEFITS_DATA} />
          <MapPreview />
        </div>
      </section>
    </Container>
  );
};
