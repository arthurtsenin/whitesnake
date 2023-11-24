import Image from "next/image";
import { FC } from "react";

import styles from "./CompanyValues.module.css";

import { Container, Title } from "@/shared";

import { COMPANY_VALUES_DATA } from "./data";
import { CompanyValueItem } from "./ui/CompanyValueItem";

import bubble1 from "&/images/about/company_values_bubble_1.png";
import bubble2 from "&/images/about/company_values_bubble_2.png";

export const CompanyValues: FC = () => {
  return (
    <Container>
      <section className={styles.companyValues}>
        <div className={styles.imgWrapper}>
          <div className={styles.redGlow} />
          <Image src={bubble1} alt="" priority />
        </div>
        <div className={styles.imgWrapper}>
          <div className={styles.greenGlow} />
          <Image src={bubble2} alt="" priority />
        </div>

        <Title title="Для нас наши ценности это больше чем просто слова" />
        <div className={styles.cardsContainer}>
          {COMPANY_VALUES_DATA.map((item) => (
            <CompanyValueItem key={item.id} {...item} />
          ))}
        </div>
      </section>
    </Container>
  );
};
