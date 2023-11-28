"use client";

import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";

import styles from "./AccordionItem.module.css";

import { useMobileScreen } from "@/shared/hooks/use-mobile-screen";
import { MotionAnimatePresence } from "@/shared/motion/MotionAnimatePresence";
import { MotionComponent } from "@/shared/motion/MotionComponent";
import { AccordionType } from "@/widget/Accordion/data";

type AccordionItemProps = {
  index: number | null;
  setIndex: Dispatch<SetStateAction<number | null>>;
  item: AccordionType;
};

const itemVars = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

export const AccordionItem: FC<AccordionItemProps> = ({
  index,
  setIndex,
  item,
}) => {
  const clickHandler = () => {
    setIndex((prev) => (prev === item.id ? null : item.id));
  };

  const isMobile = useMobileScreen();

  return (
    <MotionAnimatePresence>
      <MotionComponent
        as="button"
        initial="hidden"
        whileInView="visible"
        variants={!isMobile ? itemVars : {}}
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

        {index === item.id && (
          <MotionComponent
            as="section"
            className={classNames(styles.description)}
            key="content"
            initial={!isMobile ? { height: "0px" } : { height: "auto" }}
            animate={{ height: "auto" }}
            exit={!isMobile ? { height: "0px" } : { height: "auto" }}
            transition={{ duration: 0.4 }}
          >
            <p>{item.description}</p>
          </MotionComponent>
        )}

        <div className={styles.line} />
      </MotionComponent>
    </MotionAnimatePresence>
  );
};
