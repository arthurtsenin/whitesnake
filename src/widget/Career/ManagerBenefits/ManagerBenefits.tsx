"use client";

import Image from "next/image";
import { FC, useLayoutEffect, useState } from "react";

import styles from "./ManagerBenefits.module.css";

import { Container } from "@/shared";

import { ManagerBenefitType } from "./data";
import { ManagerBenefit } from "./ui/ManagerBenefit/ManagerBenefit";
import { Title } from "../ui/Title/Title";
import { TitleProps } from "../ui/Title/Title";

import horizontalBg from "&/images/career/managerBenefits/horizontal-bg.png";
import verticalBg from "&/images/career/managerBenefits/vertical-bg.png";

type ManagerBenefitsProps = {
  benefits: Array<ManagerBenefitType>;
} & TitleProps;

export const ManagerBenefits: FC<ManagerBenefitsProps> = ({
  title,
  subtitle,
  benefits,
}) => {
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useLayoutEffect(() => {
    setIsDesktop(window.innerWidth >= 1200);
  }, []);

  return (
    <Container>
      <section className={styles.section}>
        <Title title={title} subtitle={subtitle} />

        <div className={styles.container}>
          <Image
            src={isDesktop ? horizontalBg : verticalBg}
            alt=""
            className={styles.bg}
            fill
          />

          {benefits.map((benefit) => (
            <ManagerBenefit
              key={benefit.id}
              position={benefit.position}
              title={benefit.title}
              subtitle={benefit.subtitle}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
