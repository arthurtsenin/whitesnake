import { FC } from "react";

import styles from "./ManagerBenefits.module.css";

import { Container } from "@/shared";

import { ManagerBenefitType } from "./data";
import { ManagerBenefit } from "./ui/ManagerBenefit/ManagerBenefit";
import { Title } from "../ui/Title/Title";
import { TitleProps } from "../ui/Title/Title";

type ManagerBenefitsProps = {
  benefits: Array<ManagerBenefitType>;
} & TitleProps;

export const ManagerBenefits: FC<ManagerBenefitsProps> = ({
  title,
  subtitle,
  benefits,
}) => {
  return (
    <Container>
      <section className={styles.section}>
        <Title title={title} subtitle={subtitle} />

        <div className={styles.container}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1820"
            height="720"
            viewBox="0 0 1820 720"
            fill="none"
          >
            <mask id="path-1-inside-1_966_4276" fill="white">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 24C0 10.7452 10.7452 0 24 0H1476C1489.25 0 1500 10.7452 1500 24V67C1500 80.2548 1510.75 91 1524 91H1796C1809.25 91 1820 101.745 1820 115V696C1820 709.255 1809.25 720 1796 720H344C330.745 720 320 709.255 320 696V669C320 655.745 309.255 645 296 645H24C10.7452 645 0 634.255 0 621V24ZM0 696C0 709.255 10.7452 720 24 720C10.7452 720 0 709.255 0 696ZM1820 24C1820 10.7452 1809.25 0 1796 0C1809.25 0 1820 10.7452 1820 24Z"
              />
            </mask>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0 24C0 10.7452 10.7452 0 24 0H1476C1489.25 0 1500 10.7452 1500 24V67C1500 80.2548 1510.75 91 1524 91H1796C1809.25 91 1820 101.745 1820 115V696C1820 709.255 1809.25 720 1796 720H344C330.745 720 320 709.255 320 696V669C320 655.745 309.255 645 296 645H24C10.7452 645 0 634.255 0 621V24ZM0 696C0 709.255 10.7452 720 24 720C10.7452 720 0 709.255 0 696ZM1820 24C1820 10.7452 1809.25 0 1796 0C1809.25 0 1820 10.7452 1820 24Z"
              fill="white"
              fill-opacity="0.08"
            />
            <path
              d="M24 -1C10.1929 -1 -1 10.1929 -1 24H1C1 11.2975 11.2975 1 24 1V-1ZM1476 -1H24V1H1476V-1ZM1501 67V24H1499V67H1501ZM1796 90H1524V92H1796V90ZM1821 696V115H1819V696H1821ZM1796 721C1809.81 721 1821 709.807 1821 696H1819C1819 708.703 1808.7 719 1796 719V721ZM344 721H1796V719H344V721ZM319 669V696H321V669H319ZM24 646H296V644H24V646ZM-1 24V621H1V24H-1ZM-1 696C-1 709.807 10.1929 721 24 721V719C11.2975 719 1 708.703 1 696H-1ZM1796 1C1808.7 1 1819 11.2975 1819 24H1821C1821 10.1929 1809.81 -1 1796 -1V1ZM-1 696C-1 709.807 10.1929 721 24 721V719C11.2975 719 1 708.703 1 696H-1ZM24 644C11.2975 644 1 633.703 1 621H-1C-1 634.807 10.1929 646 24 646V644ZM1796 1C1808.7 1 1819 11.2975 1819 24H1821C1821 10.1929 1809.81 -1 1796 -1V1ZM1796 92C1808.7 92 1819 102.297 1819 115H1821C1821 101.193 1809.81 90 1796 90V92ZM321 669C321 655.193 309.807 644 296 644V646C308.703 646 319 656.297 319 669H321ZM1499 67C1499 80.8071 1510.19 92 1524 92V90C1511.3 90 1501 79.7025 1501 67H1499ZM344 719C331.297 719 321 708.703 321 696H319C319 709.807 330.193 721 344 721V719ZM1476 1C1488.7 1 1499 11.2975 1499 24H1501C1501 10.1929 1489.81 -1 1476 -1V1Z"
              fill="white"
              fill-opacity="0.15"
              mask="url(#path-1-inside-1_966_4276)"
            />
          </svg>

          <div className={styles.itemsContainer}>
            {benefits.map((benefit) => (
              // <div key={benefit.id} className={styles.itemContainer}>
              <ManagerBenefit
                key={benefit.id}
                title={benefit.title}
                subtitle={benefit.subtitle}
                imageSrc={benefit.imageSrc}
              />
              // </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
};
