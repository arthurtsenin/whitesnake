"use client";

import Image from "next/image";
import { FC, useState } from "react";

import styles from "./DynamicTabs.module.css";

import { Title, TitleProps } from "@/shared/ui/Title/Title";

import { DataType, TechnologieType } from "./data";
import { DynamicPannel } from "./ui/DynamicPannel/DynamicPannel";
import { TabList } from "./ui/TabList/TabList";
import { Container } from "../../shared";

import bubble from "&/images/raindrops/22.png";

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
      <div className={styles.glow} />
      <Image alt="" src={bubble} className={styles.image} priority />

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
