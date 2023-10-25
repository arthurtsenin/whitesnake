import { FC } from "react";

import styles from "./InternshipAccardion.module.css";

import Accordion from "@/widget/Accordion/Accordion";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";

export const InternshipAccardion: FC = () => {
  return (
    <div>
      <h2 className={styles.title}>Часто задаваемые вопросы</h2>
      <Accordion accordions={ACCORDIONS_DATA} />
    </div>
  );
};
