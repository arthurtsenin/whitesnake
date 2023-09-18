"use client";

import { FC, useState } from "react";

import styles from "./Accordion.module.scss";

import { AccordionType } from "./data";
import { AccordionItem } from "./ui/AccodrionItem/AccordionItem";

export type AccordionProps = {
  accordions: Array<AccordionType>;
};

export const Accordion: FC<AccordionProps> = ({ accordions }) => {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className={styles.container}>
      {accordions.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          index={index}
          setIndex={setIndex}
        />
      ))}
    </div>
  );
};
