import styles from "./Statistic.module.css";

import { FifthCard } from "./ui/FifthCard/FifthCard";
import { FirstCard } from "./ui/FirstCard/FirstCard";
import { FourthCard } from "./ui/FourthCard/FourthCard";
import { SecondCard } from "./ui/SecondCard/SecondCard";
import { ThirdCard } from "./ui/ThirdCard/ThirdCard";
import { Container } from "../../shared";

export const Statistic = () => {
  return (
    <Container>
      <div className={styles.container}>
        <FirstCard />
        <SecondCard />
        <ThirdCard />
        <FourthCard />
        <FifthCard />
      </div>
    </Container>
  );
};
