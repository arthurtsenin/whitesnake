"use client";

import classNames from "classnames";
import { motion } from "framer-motion";
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
        <motion.div className={classNames(styles.container, "bubka")}>
          {accordions.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              index={index}
              setIndex={setIndex}
            />
          ))}
        </motion.div>
      </section>
    </Container>
  );
};

export default Accordion;
