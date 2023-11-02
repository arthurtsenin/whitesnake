"use client";

import Image from "next/image";
import { useRef } from "react";

import styles from "./Footer.module.css";

import { Button, Container } from "@/shared";

import { BenefitCards } from "../BenefitCards/BenefitCards";
import { BENEFIT_CARD_WITHOUT_ICON_DATA } from "../BenefitCards/data";
import { ButtonUp } from "../ButtonUp/ButtonUp";
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Navigation/ui/Logo/Logo";

import bubble from "&/images/footer/bubble.png";

export const Footer = () => {
  const footerRef = useRef<HTMLElement | null>(null);

  return (
    <footer className={styles.container} ref={footerRef}>
      <div className={styles.glow} />
      <div className={styles.glow} />
      <Image
        alt="декоративное изображение"
        src={bubble}
        className={styles.image}
      />
      <ButtonUp elementRef={footerRef} />
      <Container>
        <div className={styles.navContainer}>
          <nav className={styles.nav}>
            <Logo variant="footer" />
            <ul className={styles.navList}>
              <Navigation />
            </ul>
          </nav>
          <div className={styles.buttons}>
            <Button variant="primary">Связаться с нами</Button>
            <Button variant="transparent">Карьера</Button>
          </div>
          <div className={styles.cards}>
            <BenefitCards
              data={BENEFIT_CARD_WITHOUT_ICON_DATA}
              variant="withIcon"
            />
          </div>
        </div>
      </Container>
    </footer>
  );
};
