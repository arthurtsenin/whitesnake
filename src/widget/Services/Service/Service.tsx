import Image from "next/image";
import { FC } from "react";

import styles from "./Service.module.css";

import { Container } from "@/shared";

import { TechCard } from "./ui/TechCard/TechCard";
import { ServiceDataType } from "../data";

type ServiceProps = object & ServiceDataType;

export const Service: FC<ServiceProps> = ({
  title,
  question,
  answer,
  cardContainerType,
  cardItems,
  image,
  additionalImage,
  glowColor,
}) => {
  return (
    <Container>
      <section className={styles.container}>
        {additionalImage && (
          <>
            <div className={styles.additionalRaindropWrapper}>
              <Image src={additionalImage} alt="" />
            </div>
            <div className={styles.additionalGlow} />
          </>
        )}

        {image && (
          <>
            <div className={styles.raindropWrapper}>
              <Image src={image} alt="" />
            </div>
            <div className={styles.glow} data-glow-color={glowColor} />
          </>
        )}

        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.question}>{question}</p>

          <div className={styles.answer}>
            {answer.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <TechCard
            cardContainerType={cardContainerType}
            cardItems={cardItems}
          />
        </div>
      </section>
    </Container>
  );
};
