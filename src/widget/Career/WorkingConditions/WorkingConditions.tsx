import { FC } from "react";

import styles from "./WorkingConditions.module.css";

import { Container } from "@/shared";

import { WorkingConditionType } from "./data";
import { WorkingCondition } from "./ui/WorkingCondition/WorkingCondition";
import { Title } from "../ui/Title/Title";
import { TitleProps } from "../ui/Title/Title";

type WorkingConditionsProps = {
  conditions: Array<WorkingConditionType>;
} & TitleProps;

export const WorkingConditions: FC<WorkingConditionsProps> = ({
  title,
  conditions,
}) => {
  return (
    <Container>
      <section className={styles.section}>
        <div className={styles.glowRedUpper} />
        <div className={styles.glowBlueUpper} />
        <div className={styles.glowRedLower} />
        <div className={styles.glowBlueLower} />

        <Title title={title} />

        <div className={styles.container}>
          {conditions.map((condition) => (
            <div key={condition.id} className={styles.itemContainer}>
              <WorkingCondition
                title={condition.title}
                subtitle={condition.subtitle}
                imageSrc={condition.imageSrc}
              />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
