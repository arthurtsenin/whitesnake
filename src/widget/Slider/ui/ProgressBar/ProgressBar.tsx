import classNames from "classnames";
import { FC } from "react";

import styles from "./ProgressBar.module.scss";

export type ProgressBarProps = {
  title: string;
  active: string;
  clickHandler: () => void;
};

export const ProgressBar: FC<ProgressBarProps> = ({
  title,
  active,
  clickHandler,
}) => {
  return (
    <button
      type="button"
      className={styles.container}
      onClick={() => clickHandler()}
    >
      <p className={classNames(styles.title, styles[`${active}Title`])}>
        {title}
      </p>
      <div className={classNames(styles.circle, styles[`${active}Circle`])} />
      <div
        className={classNames(styles.progress, styles[`${active}Progress`])}
      />
    </button>
  );
};
