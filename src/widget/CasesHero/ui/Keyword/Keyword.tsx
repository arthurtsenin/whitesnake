import { FC } from "react";

import styles from "./Keyword.module.css";

export type KeywordProps = {
  keyword: string;
};

export const Keyword: FC<KeywordProps> = ({ keyword }) => {
  return <div className={styles.keyword}>{keyword}</div>;
};
