import classNames from "classnames";
import { FC } from "react";

import styles from "./Tab.module.css";

type TabProps = {
  name: string;
  active: string;
  clickHandler: () => void;
};

export const Tab: FC<TabProps> = ({ name, active, clickHandler }) => {
  return (
    <button
      type="button"
      className={classNames(styles.tab, styles[active])}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};
