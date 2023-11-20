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
  cardItems,
  image,
}) => {
  return (
    <Container>
      <section className={styles.container}>
        {image && (
          <div className={styles.raindropWrapper}>
            <Image src={image} alt="" />
          </div>
        )}

        <div className={styles.content}>
          <p className={styles.title}>{title}</p>
          <p className={styles.question}>{question}</p>

          <div className={styles.answer}>
            {answer.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <TechCard cardItems={cardItems} />
        </div>
      </section>
    </Container>
  );
};
