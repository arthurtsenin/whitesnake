import { FC, ReactNode } from "react";

import styles from "./CaseSolution.module.css";

import { CaseTitle } from "../ui/Title/CaseTitle";

type CaseSolutionProps = {
  title: string;
  subtitle?: Array<string>;
  children: ReactNode | JSX.Element;
};

export const CaseSolution: FC<CaseSolutionProps> = ({
  title,
  subtitle,
  children,
}) => {
  return (
    <div className={styles.solution}>
      <CaseTitle title={title} />
      {subtitle?.length && (
        <div className={styles.subtitle}>
          {subtitle.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      )}
      <> {children}</>
    </div>
  );
};
