"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import styles from "./Footer.module.css";

import { Button } from "@/shared";

import { ButtonUp } from "../ButtonUp/ButtonUp";
import { Navigation } from "../Navigation/Navigation";
import { ROUTES } from "../Navigation/routes";
import { Logo } from "../Navigation/ui/Logo/Logo";

import bubble from "&/images/footer/bubble.png";
import telega from "&/images/footer/telegram.png";
import linked from "&/images/vacancies/hero/linkedin.png";
import rabotaby from "&/images/vacancies/hero/rabotaby.png";

export const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <footer className={styles.container} ref={footerRef}>
      <div className={styles.glow} />
      <div className={styles.glow} />
      <Image alt="" src={bubble} className={styles.image} />
      <ButtonUp elementRef={footerRef} />
      <div className={styles.contentContainer}>
        <div className={styles.logo}>
          <Logo variant="footer" />
        </div>
        <div className={styles.navContainer}>
          <div className={styles.leftSide}>
            <p>Беларусь, Минск, проспект Дзержинского 104 (БЦ Титан) 20 этаж</p>
            <Link href="#">contact@whitesnake.io</Link>
            <div className={styles.imagesContainer}>
              <Image alt="" src={telega} />
              <Image alt="" src={rabotaby} />
              <Image alt="" src={linked} />
            </div>
          </div>
          <nav className={styles.nav}>
            <ul className={styles.navList}>
              <Navigation />
            </ul>
            <div className={styles.lowerInfo}>
              <p>Все права защищены.</p>
              <br />
              <Link href="#">
                Политика конфиденциальности и обработки данных
              </Link>
            </div>
          </nav>
          <div className={styles.lowerInfoMobile}>
            <p>Все права защищены.</p>
            <br />
            <Link href="#">Политика конфиденциальности и обработки данных</Link>
          </div>

          <Link href={ROUTES.FIVE.href} className={styles.benefit}>
            <p>Работа в Whitesnake</p>
            <p>
              Если ты разработчик, мы с радостью с тобой пообщаемся и рассмотрим
              возможность работать с нами.
            </p>
            <Button variant="primary">Карьера</Button>
          </Link>
        </div>
      </div>
    </footer>
  );
};
