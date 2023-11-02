"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./TileTab.module.css";

import { Container } from "@/shared";

import { BENEFITS, INDUSTRY_DATA } from "./data";
import { TabList } from "./ui/TabList/TabList";

export const TileTab = () => {
  const [currentTab, setCurrentTab] = useState(Object.keys(INDUSTRY_DATA)[0]);

  return (
    <Container>
      <div className={styles.container}>
        <h3 className={styles.title}>
          Блестяще уникальные и глубоко мыслящие. Это яркие умы, которые мы
          взращиваем
        </h3>

        <div className={styles.description}>
          {INDUSTRY_DATA[currentTab].description}
        </div>

        <div className={styles.wrapper}>
          <div className={styles.glow} />
          <Image src={INDUSTRY_DATA[currentTab].image} alt="currentTab" />
        </div>
        <div className={styles.list}>
          <TabList
            tabs={Object.values(BENEFITS)}
            currentTab={currentTab}
            clickHandler={setCurrentTab}
          />
        </div>
      </div>
    </Container>
  );
};
