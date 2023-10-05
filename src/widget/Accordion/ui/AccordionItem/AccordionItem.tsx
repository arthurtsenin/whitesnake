import classNames from "classnames";
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
      <div className={styles.description}>
        <p>{item.description}</p>
      </div>
    </button>
  );
};
