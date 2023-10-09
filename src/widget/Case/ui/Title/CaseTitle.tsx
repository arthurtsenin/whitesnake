import { FC } from "react";

import styles from "./CaseTitle.module.css";

type CaseTitleProps = {
  title: string;
};

export const CaseTitle: FC<CaseTitleProps> = ({ title }) => {
  return <h2 className={styles.title}> {title}</h2>;
};
