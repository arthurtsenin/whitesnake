import { FC } from "react";

import styles from "./CaseChallenge.module.css";

import { CaseTitle } from "../ui/Title/CaseTitle";

type caseChallengeProps = {
  info: string[];
  title: string;
};

export const CaseChallenge: FC<caseChallengeProps> = ({ info, title }) => {
  return (
    <div className={styles.container}>
      <CaseTitle title={title} />
      <div className={styles.content}>
        {info.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
