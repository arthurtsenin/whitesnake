import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";

import styles from "./LifeGrid.module.css";

import { Button, Container, Title } from "@/shared";

import { IMAGES } from "./data";
import { NAVIGATION_LINKS } from "../Navigation/routes";

import raindropUpper from "&/images/raindrops/13.png";

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

        <Link href={NAVIGATION_LINKS.career.href}>
          <Button>Присоединиться</Button>
        </Link>

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
