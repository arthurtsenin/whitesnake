import React, { FC } from "react";

import styles from "./VacancyDescription.module.css";

type VacancyDescriptionProps = {
  titles?: Array<string>;
  lists?: Array<Array<string> | undefined>;
};
export const VacancyDescription: FC<VacancyDescriptionProps> = ({
  titles,
  lists,
}) => {
  return (
    <div className={styles.container}>
      {titles?.map((title, index) => (
        <React.Fragment key={title}>
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.list}>
            {lists &&
              lists[index]?.map((item) => (
                <li className={styles.item} key={item}>
                  {item}
                </li>
              ))}
          </ul>
          <div className={styles.divider} />
        </React.Fragment>
      ))}
    </div>
  );
};