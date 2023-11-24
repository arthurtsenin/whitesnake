// type LifeGridProps = {}

import classNames from "classnames";
import Image from "next/image";

import styles from "./LifeGrid.module.css";

import { Button, Container, Title } from "@/shared";

import { IMAGES } from "./data";

import raindropUpper from "&/images/main-hero/raindrop-middle.webp";

export const LifeGrid = () => {
  return (
    <Container>
      <section className={styles.section}>
        <div className={styles.raindropUpper}>
          <Image src={raindropUpper} alt="" priority />
        </div>
        <Title
          title="Жизнь в Whitesnake"
          subtitle="Мы строим компанию, в которую приходят по призванию. Мы крутые. Корпоративы тусовки дружеская обстановка"
        />
        <Button>Присоединиться</Button>
        <div className={styles.gallery}>
          {IMAGES.map((item) => (
            <div
              key={item.id}
              className={classNames(styles.wrapper, styles[item.class])}
            >
              <Image src={item.image} alt="" />
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};
