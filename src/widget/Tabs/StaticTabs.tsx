"use client";

import Image from "next/image";
import { FC, useState } from "react";

import styles from "./Tabs.module.css";

import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { DataType, IndustryType } from "./data";
import { StaticPannel } from "./ui/StaticPannel/StaticPannel";
import { TabList } from "./ui/TabList/TabList";

import bubbles from "&/pannels/bubbles.png";

type StaticTabsProps = {
  data: DataType<IndustryType>;
} & TitleProps;

export const StaticTabs: FC<StaticTabsProps> = ({
  data,
  suptitle,
  title,
  subtitle,
}) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(data)[0]);

  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <Image alt="design image" src={bubbles} className={styles.image} />
      <Title suptitle={suptitle} title={title} subtitle={subtitle} />
      <div className={styles.container}>
        <TabList
          tabs={Object.values(data)}
          currentTab={currentTab}
          clickHandler={setCurrentTab}
        />
        <StaticPannel panel={data[currentTab]} />
      </div>
    </section>
  );
};
