import { FC } from "react";

import styles from "./MainWorkingConditions.module.css";

import { Title } from "@/shared";
import { TitleProps } from "@/shared/ui/Title/Title";

import { MainWorkingConditionType } from "./data";
import { WorkingCondition } from "./ui/WorkingCondition";
import { Container } from "../../shared";

type MainWorkingConditionsProps = {
  conditions: Array<MainWorkingConditionType>;
} & TitleProps;

export const MainWorkingConditions: FC<MainWorkingConditionsProps> = ({
  title,
  conditions,
}) => {
  return (
    <Container>
      <section className={styles.section}>
        <Title title={title} />

        <div className={styles.container}>
          {conditions.map((condition) => (
            <WorkingCondition
              key={condition.id}
              title={condition.title}
              subtitle={condition.subtitle}
              imageSrc={condition.imageSrc}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};
