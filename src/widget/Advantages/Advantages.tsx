"use client";
import classNames from "classnames";
import Image from "next/image";
import { useState } from "react";

import styles from "./Advantages.module.css";

import { BENEFITS_DATA } from "./data";

export const Advantages = () => {
  const [selectedTab, setSelectedTab] = useState<number>(1);

  const tabChangeHandler = (id: number) => {
    setSelectedTab(id);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSide}>
        <div
          className={classNames(styles.light, {
            [styles.redLight]: selectedTab <= 5,
            [styles.greenLight]: selectedTab > 5,
          })}
        />
        {BENEFITS_DATA.map(
          (item) =>
            item.type === "бенефиты" && (
              <div
                className={classNames(styles.title, {
                  [styles.benefit]:
                    item.type === "бенефиты" && item.id === selectedTab,
                })}
                key={item.id}
                role="button"
                onClick={() => tabChangeHandler(item.id)}
              >
                {item.title}
              </div>
            ),
        )}
      </div>
      <div className={styles.middle}>
        <div
          className={classNames(styles.light, {
            [styles.redLight]: selectedTab <= 5,
            [styles.greenLight]: selectedTab > 5,
          })}
        />
        <div className={styles.wrapper}>
          {BENEFITS_DATA.map((item) => (
            <Image
              className={classNames(styles.hiddenImage, {
                [styles.showImage]: selectedTab === item.id,
              })}
              key={item.id}
              alt=""
              src={item.figure}
            />
          ))}

          <div
            className={classNames(styles.glow, {
              [styles.red]: BENEFITS_DATA[selectedTab - 1].type === "бенефиты",
              [styles.green]: BENEFITS_DATA[selectedTab - 1].type === "плюшки",
            })}
          />
        </div>
        <div className={styles.descriptionContainer}>
          {BENEFITS_DATA.map((item) => (
            <p
              className={classNames(styles.hiddenDescription, {
                [styles.showDescription]: selectedTab === item.id,
              })}
              key={item.id}
            >
              {item.description}
            </p>
          ))}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div
          className={classNames(styles.light, {
            [styles.redLight]: selectedTab <= 5,
            [styles.greenLight]: selectedTab > 5,
          })}
        />
        {BENEFITS_DATA.map(
          (item) =>
            item.type === "плюшки" && (
              <div
                className={classNames(styles.title, {
                  [styles.plush]:
                    item.type === "плюшки" && item.id === selectedTab,
                })}
                key={item.id}
                role="button"
                onClick={() => tabChangeHandler(item.id)}
              >
                {item.title}
              </div>
            ),
        )}
      </div>
    </div>
  );
};
