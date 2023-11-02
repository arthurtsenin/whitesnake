"use client";

import Image from "next/image";
import { FC, useState } from "react";

import styles from "./StaticTabs.module.css";

import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { DataType, IndustryType } from "./data";
import { StaticPannel } from "./ui/StaticPannel/StaticPannel";
import { TabList } from "./ui/TabList/TabList";
import { Container } from "../../shared";

import bubbles from "&/pannels/bubbles.png";

type StaticTabsProps = {
  data: DataType<IndustryType>;
} & TitleProps;

const StaticTabs: FC<StaticTabsProps> = ({
  data,
  suptitle,
  title,
  subtitle,
}) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(data)[0]);

  return (
    <section className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.image}>
        <Image alt="декоративное изображение" src={bubbles} priority />
      </div>

      <div className={styles.titleContainer}>
        <Title suptitle={suptitle} title={title} subtitle={subtitle} />
      </div>
      <div className={styles.container}>
        <TabList
          tabs={Object.values(data)}
          currentTab={currentTab}
          clickHandler={setCurrentTab}
        />

        <Container>
          <StaticPannel panel={data[currentTab]} />
        </Container>
      </div>
    </section>
  );
};

export default StaticTabs;
