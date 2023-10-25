import { FC } from "react";

import styles from "./WorkingConditions.module.css";

import { Title } from "@/shared";
import { TitleProps } from "@/shared/ui/Title/Title";

import { WorkingConditionType } from "./data";
import { WorkingCondition } from "./ui/WorkingCondition";
import { Container } from "../../shared";

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
        <div className={styles.glowRed1} />
        <div className={styles.glowBlue1} />
        <div className={styles.glowRed2} />
        <div className={styles.glowBlue2} />

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
