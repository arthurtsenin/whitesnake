import Image from "next/image";
import Link from "next/link";

import styles from "./HomeHero.module.css";

import { FORM_URL_PARAMS } from "@/widget/Form/params";

import { ROUTES } from "../Navigation/routes";
import { Button } from "../../shared";

import raindropUpper from "&/images/raindrops/10.png";
import raindropMiddle from "&/images/raindrops/13.png";
import raindropLower from "&/images/raindrops/14.webp";
import sphere from "&/images/sphere.webp";

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
            <Link href={FORM_URL_PARAMS.BookACall}>
              <Button variant="primary">Связаться с нами</Button>
            </Link>
            <Link href={`${ROUTES.FIVE.href}#leave-request`}>
              <Button variant="transparent">Хочу в команду</Button>
            </Link>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.imgWrapper}>
            <Image src={raindropUpper} alt="" priority />
          </div>
          <div className={styles.imgWrapper}>
            <Image src={raindropMiddle} alt="" priority />
          </div>
          <div className={styles.imgWrapper}>
            <Image src={raindropLower} alt="" priority />
          </div>
        </div>
      </div>
      <div className={styles.sphere}>
        <Image src={sphere} alt="" priority placeholder="blur" />
      </div>
      <div className={styles.glowRed}></div>
      <div className={styles.glowBlue}></div>
    </section>
  );
};
