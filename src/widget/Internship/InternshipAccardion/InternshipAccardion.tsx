import dynamic from "next/dynamic";
import { FC } from "react";

import styles from "./IntershipAccordion.module.css";

import { Title } from "@/shared";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";

const Accordion = dynamic(() => import("@/widget/Accordion/Accordion"));

export const InternshipAccardion: FC = () => {
  return (
    <div className={styles.container}>
      <Title title="Часто задаваемые вопросы" />
      <Accordion accordions={ACCORDIONS_DATA} />
    </div>
  );
};
