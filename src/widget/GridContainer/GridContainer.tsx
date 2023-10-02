import { FC } from "react";

import styles from "./GridContainer.module.css";

import { Title } from "@/shared";
import { TitleProps } from "@/shared/ui/Title/Title";

import { CasePreviewType } from "./data";
import { CaseCard } from "./ui/CaseCard/CaseCard";

type GridContainerProps = {
  data: Array<CasePreviewType>;
} & TitleProps;

export const GridContainer: FC<GridContainerProps> = ({
  data,
  title,
  subtitle,
  suptitle,
}) => {
  return (
    <section className={styles.section}>
      <Title suptitle={suptitle} title={title} subtitle={subtitle} />
      <div className={styles.container}>
        {data.map((card) => (
          <div className={styles.wrapper} key={card.id}>
            <CaseCard
              caption={card.caption}
              description={card.description}
              image={card.image}
              path={card.path}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
