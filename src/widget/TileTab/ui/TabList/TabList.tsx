import Image from "next/image";
import { FC } from "react";

import styles from "./TabList.module.css";

import { Tab } from "../Tab/Tab";

import asterisk from "&/images/internship/asteric.png";

type TabListProps = {
  tabs: Array<string>;
  currentTab: string;
  clickHandler: (args: string) => void;
};

export const TabList: FC<TabListProps> = ({
  tabs,
  currentTab,
  clickHandler,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src={asterisk} alt="design asterisk" />
        <span className={styles.text}>Наши плюшки</span>
      </div>
      <div className={styles.tabs}>
        {Object.values(tabs).map((tab) => (
          <Tab
            key={tab}
            name={tab}
            active={currentTab === tab ? "active" : ""}
            clickHandler={() => clickHandler(tab)}
          />
        ))}
      </div>
    </div>
  );
};
