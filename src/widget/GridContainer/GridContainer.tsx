import Image from "next/image";
import { FC } from "react";

import styles from "./GridContainer.module.css";

import { Container, Title } from "@/shared";
import { TitleProps } from "@/shared/ui/Title/Title";

import { CasePreviewType } from "./data";
import { CaseCard } from "./ui/CaseCard/CaseCard";

import upperRaindrop from "&/images/raindrops/19.webp";

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
    <Container>
      <section className={styles.section}>
        <div className={styles.upperWrapper}>
          <Image src={upperRaindrop} alt="" priority />
        </div>
        <Title suptitle={suptitle} title={title} subtitle={subtitle} />
        <div className={styles.container}>
          {data.map((card) => (
            <div key={card.id} className={styles.wrapper}>
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
    </Container>
  );
};
