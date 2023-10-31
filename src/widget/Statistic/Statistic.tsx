import Image from "next/image";
import { FC } from "react";

import styles from "./Statistic.module.css";

import { FifthCard } from "./ui/FifthCard/FifthCard";
import { FirstCard } from "./ui/FirstCard/FirstCard";
import { FourthCard } from "./ui/FourthCard/FourthCard";
import { SecondCard } from "./ui/SecondCard/SecondCard";
import { ThirdCard } from "./ui/ThirdCard/ThirdCard";
import { Container } from "../../shared";

import raindropBlue from "&/images/statistic/raindrop.png";
import raindropYellow from "&/images/statistic/raindrop.png";
import greenRaindrop from "&/images/statistic/raindrop-green.png";

export const Statistic: FC = () => {
  return (
    <Container>
      <div className={styles.mask}>
        <div className={styles.images}>
          <Image src={raindropBlue} alt="raindrop" />
          <Image src={raindropYellow} alt="raindrop" />
          <Image src={greenRaindrop} alt="raindrop" />
        </div>
        <div className={styles.glowBlue} />
        <div className={styles.glowRed} />
        <div className={styles.container}>
          <FirstCard />
          <SecondCard />
          <ThirdCard />
          <FourthCard />
          <FifthCard />
        </div>
      </div>
    </Container>
  );
};
