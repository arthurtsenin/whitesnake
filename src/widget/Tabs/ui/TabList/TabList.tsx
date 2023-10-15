import { FC } from "react";

import styles from "./TabList.module.css";

import { Tab } from "../Tab/Tab";
import { TabType } from "../../data";

type TabListProps = {
  tabs: Array<TabType>;
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
      <div className={styles.tabs}>
        <div className={styles.tabsInner}>
          {Object.values(tabs).map((tab) => (
            <Tab
              key={tab.id}
              name={tab.name}
              active={currentTab === tab.name ? "active" : ""}
              clickHandler={() => clickHandler(tab.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
