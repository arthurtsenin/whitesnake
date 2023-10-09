import classNames from "classnames";
import { FC } from "react";

import styles from "./CaseResults.module.css";

import { ResultsCube, ResultsInfo } from "@/app/portfolio/[case]/cases/types";

import { CaseTitle } from "../ui/Title/CaseTitle";

type CaseResultsProps = {
  title: string;
  text: ResultsInfo | string;
  cubes: Array<ResultsCube>;
};

export const CaseResults: FC<CaseResultsProps> = ({ title, text, cubes }) => {
  return (
    <div className={styles.container}>
      <CaseTitle title={title} />
      <div className={styles.content}>
        <div className={styles.text}>
          {typeof text === "object" ? (
            <>
              <p className={styles.title}>{text.list?.list_title}</p>
              <ul className={styles.list}>
                {text.list?.list_items.map((item) => (
                  <li className={styles.listItem} key={item.id}>
                    <mark className={styles.mark}>{item.mark}</mark>
                    {item.text}
                  </li>
                ))}
              </ul>
              <p className={styles.text}>{text.summary}</p>
            </>
          ) : (
            <p className={styles.text}>{text}</p>
          )}
        </div>

        <div
          className={classNames(styles.cubes, {
            [styles.two]: cubes.length == 2,
          })}
        >
          {cubes.map((cube) => (
            <div className={styles.cube} key={cube.title}>
              <p>{cube.title}</p>
              <p>{cube.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
