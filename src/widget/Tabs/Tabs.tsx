"use client";

import { FC, useState } from "react";

import styles from "./Tabs.module.scss";

import { PanelsType, TabsType } from "./data";
import { Panel } from "./ui/Panel/Panel";
import { Tab } from "./ui/Tab/Tab";

type TabsProps = {
  tabs: TabsType;
  panels: PanelsType;
};

export const Tabs: FC<TabsProps> = ({ tabs, panels }) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(tabs)[0]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {Object.values(tabs).map((tab) => (
          <Tab
            key={tab.id}
            name={tab.name}
            active={currentTab === tab.name ? "active" : ""}
            clickHandler={() => setCurrentTab(tab.name)}
          />
        ))}
      </div>
      <Panel panel={panels[currentTab]} />
    </div>
  );
};
