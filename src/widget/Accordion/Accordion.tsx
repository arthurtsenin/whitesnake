"use client";

import Image from "next/image";
import { FC, useState } from "react";

import styles from "./Accordion.module.css";

import { Container } from "@/shared";
import { MotionComponent } from "@/shared/motion/MotionComponent";

import { AccordionType } from "./data";
import { AccordionItem } from "./ui/AccordionItem/AccordionItem";

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
          <Image src={bubble} alt="декоративное изображение" priority />
        </div>

        <MotionComponent as="div" className={styles.container}>
          {accordions.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              setIndex={setIndex}
            />
          ))}
        </MotionComponent>
      </section>
    </Container>
  );
};

export default Accordion;
