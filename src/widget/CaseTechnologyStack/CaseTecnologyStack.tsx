import { FC } from "react";

import styles from "./CaseTechnologyStack.module.css";

import { Chip } from "@/shared/ui/Chip/Chip";

type caseTechnologyStackProps = {
  stack: { [key: string]: string[] };
};

export const CaseTechnologyStack: FC<caseTechnologyStackProps> = ({
  stack,
}) => {
  return (
    <div className={styles.stack}>
      {Object.entries(stack).map(([key, value]) => (
        <div key={key}>
          <p className={styles.stackTitle}>{key}</p>
          <div className={styles.stackChips}>
            {value.map((tech) => (
              <Chip key={tech} text={tech} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
