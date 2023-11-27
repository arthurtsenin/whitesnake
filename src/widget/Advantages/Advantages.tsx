"use client";
import classNames from "classnames";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";

import styles from "./Advantages.module.css";

import {
  ADVANTAGES_DESCRIPTION,
  ADVANTAGES_IMAGES,
  ADVANTAGES_TABS,
  BENEFITS_DATA,
} from "./data";
import { TabList } from "../Tabs/ui/TabList/TabList";
import { Title } from "../../shared";

export const Advantages = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [tab, setCurrentTab] = useState<string | null>(ADVANTAGES_TABS[0].name);
  const [choosenTab, setChoosenTab] = useState<number>(1);

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 744);
    }
  }, []);

  const tabHandler = (value: string) => {
    setCurrentTab(value);
    if (value === "Плюшки") {
      setChoosenTab(7);
    } else {
      setChoosenTab(1);
    }
  };

  const dataChangeHandler = (id: number) => {
    setChoosenTab(id);
  };

  return (
    <section className={styles.section}>
      <Title title="Наши преимущества и бенефиты" />
      {isMobile && (
        <div className={styles.tabListWrapper}>
          <TabList
            clickHandler={tabHandler}
            currentTab={tab || ""}
            tabs={ADVANTAGES_TABS}
          />
        </div>
      )}

      <div className={styles.container}>
        <div className={styles.leftSide}>
          <div
            className={classNames(styles.glow, {
              [styles.redGlow]: choosenTab <= 6,
              [styles.blueGlow]: choosenTab > 6,
            })}
          />
          {BENEFITS_DATA.map(
            (el) =>
              el.type === (isMobile ? tab : "Бенефиты") && (
                <button
                  onClick={() => dataChangeHandler(el.id)}
                  className={classNames(styles.tab, {
                    [styles.greenTab]:
                      el.color === "green" && choosenTab === el.id,
                    [styles.redTab]: el.color === "red" && choosenTab === el.id,
                    [styles.activeTab]: el.id === choosenTab,
                  })}
                  key={el.id}
                >
                  {el.title}
                </button>
              ),
          )}
        </div>

        <div className={styles.middle}>
          <div
            className={classNames(styles.glow, {
              [styles.redGlow]: choosenTab <= 6,
              [styles.blueGlow]: choosenTab > 6,
            })}
          />
          {ADVANTAGES_IMAGES.map((el) => (
            <Image
              className={classNames(styles.hideImage, {
                [styles.showImage]: el.id === choosenTab,
              })}
              key={el.id}
              alt=""
              src={el.url}
            />
          ))}
          <div className={styles.description}>
            {ADVANTAGES_DESCRIPTION.map((el) => (
              <p
                className={classNames(styles.hiddenDescription, {
                  [styles.showDescription]: el.id === choosenTab,
                })}
                key={el.id}
              >
                {el.text}
              </p>
            ))}
          </div>
        </div>

        <div className={styles.rightSide}>
          <div
            className={classNames(styles.glow, {
              [styles.redGlow]: choosenTab <= 6,
              [styles.blueGlow]: choosenTab > 6,
            })}
          />
          {BENEFITS_DATA.map(
            (el) =>
              el.type === "Плюшки" && (
                <button
                  onClick={() => dataChangeHandler(el.id)}
                  className={classNames(styles.tab, {
                    [styles.greenTab]:
                      el.color === "green" && choosenTab === el.id,
                    [styles.redTab]: el.color === "red" && choosenTab === el.id,
                    [styles.activeTab]: el.id === choosenTab,
                  })}
                  key={el.id}
                >
                  {el.title}
                </button>
              ),
          )}
        </div>
        <div className={styles.mobileDescription}>
          {ADVANTAGES_DESCRIPTION.map((el) => (
            <p
              className={classNames(styles.hiddenDescription, {
                [styles.showDescription]: el.id === choosenTab,
              })}
              key={el.id}
            >
              {el.text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
