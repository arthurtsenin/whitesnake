import { FC } from "react";

import styles from "./IntershipAccordion.module.css";

import { Title } from "@/shared";
import Accordion from "@/widget/Accordion/Accordion";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";

export const InternshipAccardion: FC = () => {
  return (
    <div className={styles.container}>
      <Title title="Часто задаваемые вопросы" />
      <Accordion accordions={ACCORDIONS_DATA} />
    </div>
  );
};
