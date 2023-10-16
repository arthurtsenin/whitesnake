"use client";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";

import styles from "./AccordionItem.module.css";

import { AccordionType } from "@/widget/Accordion/data";

type AccordionItemProps = {
  index: number | null;
  setIndex: Dispatch<SetStateAction<number | null>>;
  item: AccordionType;
};

export const AccordionItem: FC<AccordionItemProps> = ({
  index,
  setIndex,
  item,
}) => {
  const clickHandler = () => {
    setIndex((prev) => (prev === item.id ? null : item.id));
  };

  return (
    <button
      type="button"
      className={classNames(styles.container, {
        [styles.open]: index === item.id,
      })}
      onClick={clickHandler}
    >
      <div className={styles.text}>
        <p className={styles.summary}>{item.summary}</p>
        <div className={styles.icon}>
          <span />
          <span />
        </div>
      </div>
      <AnimatePresence initial={false}>
        {index === item.id && (
          <motion.section
            className={classNames(styles.description)}
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <p>{item.description}</p>
          </motion.section>
        )}
      </AnimatePresence>

      <div className={styles.line} />
    </button>
  );
};
