import Image from "next/image";

import styles from "./HomeHero.module.css";

import { Scroller } from "./ui/Scroller";
import { Button } from "../../shared";

import raindropLower from "&/images/main-hero/raindrop-lower.png";
import raindropMiddle from "&/images/main-hero/raindrop-middle.png";
import raindropUpper from "&/images/main-hero/raindrop-upper.png";
import sphere from "&/images/main-hero/sphere.png";

// type HomeHeroProps = {}

export const HomeHero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.text}>
            <h1>
              Ваше видение, <br /> наша экспертиза:
            </h1>
            <p>
              Воплощаем будущее в реальность с высшим качеством и инновациями!
            </p>
          </div>
          <div className={styles.buttons}>
            <Button variant="primary">Связаться с нами</Button>
            <Button variant="transparent">Карьера</Button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imgWrapper}>
            <Image src={raindropUpper} alt="raindrop" priority />
          </div>
          <div className={styles.imgWrapper}>
            <Image src={raindropMiddle} alt="raindrop" priority />
          </div>
          <div className={styles.imgWrapper}>
            <Image src={raindropLower} alt="raindrop" priority />
          </div>
        </div>
      </div>
      <div className={styles.sphere}>
        <Image src={sphere} alt="sphere" priority />
      </div>
      <div className={styles.glowRed}></div>
      <div className={styles.glowBlue}></div>
      <div className={styles.slider}>
        <Scroller />
      </div>
    </section>
  );
};
