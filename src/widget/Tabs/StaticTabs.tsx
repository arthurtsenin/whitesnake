"use client";

import { FC, useState } from "react";

import styles from "./Tabs.module.scss";

import { DataType, IndustryType } from "./data";
import { StaticPannel } from "./ui/StaticPannel/StaticPannel";
import { TabList } from "./ui/TabList/TabList";

type StaticTabsProps = {
  data: DataType<IndustryType>;
};

export const StaticTabs: FC<StaticTabsProps> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(data)[0]);

  return (
    <div className={styles.container}>
      <TabList
        tabs={Object.values(data)}
        currentTab={currentTab}
        clickHandler={setCurrentTab}
      />
      <StaticPannel panel={data[currentTab]} />
    </div>
  );
};
