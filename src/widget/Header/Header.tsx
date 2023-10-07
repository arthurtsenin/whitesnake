"use client";

import classNames from "classnames";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

import styles from "./Header.module.css";

import { useBurgerMenu } from "@/shared/hooks/use-burger-menu";

import { Burger } from "./ui/Burger/Burger";
import { Navigation } from "../Navigation/Navigation";
import { Logo } from "../Navigation/ui/Logo/Logo";

export const Header = () => {
  const { isVisible, setInvisible, toggleVisibility } = useBurgerMenu();
  const pathname = usePathname();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => setInvisible(), [pathname]);

  return (
    <header
      className={classNames(styles.header, {
        [styles.burgerOpen]: isVisible,
      })}
    >
      <nav className={styles.container}>
        <Logo variant="header" clickHandler={setInvisible} />
        <Burger onClick={toggleVisibility} open={isVisible} />
        <ul
          className={classNames(styles.nav, {
            [styles.open]: isVisible,
          })}
        >
          <Navigation clickHandler={setInvisible} />
        </ul>
      </nav>
    </header>
  );
};
