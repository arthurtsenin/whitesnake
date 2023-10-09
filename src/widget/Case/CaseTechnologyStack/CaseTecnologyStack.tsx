import { FC } from "react";

import styles from "./CaseTechnologyStack.module.css";

import { Chip } from "@/shared/ui/Chip/Chip";

import { CaseTitle } from "../ui/Title/CaseTitle";

type caseTechnologyStackProps = {
  stack: { [key: string]: string[] };
  title: string;
};

export const CaseTechnologyStack: FC<caseTechnologyStackProps> = ({
  title,
  stack,
}) => {
  return (
    <div className={styles.container}>
      <CaseTitle title={title} />
      <div className={styles.stack}>
        {Object.entries(stack).map(([key, value]) => (
          <div key={key} className={styles.stackItem}>
            <p className={styles.stackTitle}>{key}</p>
            <div className={styles.stackChips}>
              {value.map((tech) => (
                <Chip key={tech} text={tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
