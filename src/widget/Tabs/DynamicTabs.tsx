"use client";

import { FC, useState } from "react";

import styles from "./DynamicTabs.module.css";

import { Container } from "@/shared";
import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { DataType, TechnologieType } from "./data";
import { DynamicPannel } from "./ui/DynamicPannel/DynamicPannel";
import { TabList } from "./ui/TabList/TabList";

type DynamicTabsProps = {
  data: DataType<TechnologieType>;
} & TitleProps;

const DynamicTabs: FC<DynamicTabsProps> = ({
  data,
  suptitle,
  title,
  subtitle,
}) => {
  const [currentTab, setCurrentTab] = useState(Object.keys(data)[0]);

  return (
    <section className={styles.section}>
      <Title suptitle={suptitle} title={title} subtitle={subtitle} />
      <div className={styles.container}>
        <TabList
          tabs={Object.values(data)}
          currentTab={currentTab}
          clickHandler={setCurrentTab}
        />

        <Container>
          <DynamicPannel cards={data[currentTab]} />
        </Container>
      </div>
    </section>
  );
};

export default DynamicTabs;
