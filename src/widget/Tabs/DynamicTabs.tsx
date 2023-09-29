"use client";

import { FC, useState } from "react";

import styles from "./Tabs.module.scss";

import { DataType, TechnologieType } from "./data";
import { DynamicPannel } from "./ui/DynamicPannel/DynamicPannel";
import { TabList } from "./ui/TabList/TabList";

type DynamicTabsProps = {
  data: DataType<TechnologieType>;
};

export const DynamicTabs: FC<DynamicTabsProps> = ({ data }) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(data)[0]);

  return (
    <div className={styles.container}>
      <TabList
        tabs={Object.values(data)}
        currentTab={currentTab}
        clickHandler={setCurrentTab}
      />
      <DynamicPannel cards={data[currentTab]} />
    </div>
  );
};
