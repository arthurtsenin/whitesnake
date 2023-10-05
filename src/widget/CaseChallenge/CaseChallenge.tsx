import { FC } from "react";

import styles from "./CaseChallenge.module.css";

type caseChallengeProps = {
  info: string[];
};

export const CaseChallenge: FC<caseChallengeProps> = ({ info }) => {
  return (
    <div className={styles.challengeWrapper}>
      <div className={styles.paragraphs}>
        {info.map((paragraph, index) => (
          <p key={index} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};
