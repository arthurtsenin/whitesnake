import { FC } from "react";

import styles from "./CareerAccordion.module.css";

import { Container } from "@/shared";
import Accordion from "@/widget/Accordion/Accordion";
import { AccordionType } from "@/widget/Accordion/data";

import { Title } from "../ui/Title/Title";
import { TitleProps } from "../ui/Title/Title";

type CareerAccordionProps = {
  accordions: Array<AccordionType>;
} & TitleProps;

export const CareerAccordion: FC<CareerAccordionProps> = ({
  title,
  accordions,
}) => {
  return (
    <Container>
      <section className={styles.section}>
        <Title title={title} />

        <Accordion accordions={accordions} />
      </section>
    </Container>
  );
};
