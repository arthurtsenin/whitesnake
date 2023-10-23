import { FC } from "react";

import styles from "./FormTitle.module.css";

export type FormTitleProps = {
  title: string;
};

export const FormTitle: FC<FormTitleProps> = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};
