"use client";

import Image from "next/image";
import { FC, useState } from "react";

import styles from "./Accordion.module.css";

import { AccordionType } from "./data";
import { AccordionItem } from "./ui/AccordionItem/AccordionItem";
import { Container } from "../../shared";

import bubble from "&/images/main-questions/bubble.png";

export type AccordionProps = {
  accordions: Array<AccordionType>;
};

const Accordion: FC<AccordionProps> = ({ accordions }) => {
  const [index, setIndex] = useState<number | null>(1);

  return (
    <Container>
      <section className={styles.section}>
        <div className={styles.imgWrapper}>
          <Image src={bubble} alt="design image" priority />
        </div>
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
      </section>
    </Container>
  );
};

export default Accordion;
