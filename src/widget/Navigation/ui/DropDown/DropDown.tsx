"use client";

import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "./DropDown.module.css";

import { useOutsideClick } from "@/shared/hooks/use-outside-click";

import arrow from "&/images/vacancies/arrow.png";

export const DropDown = () => {
  const [open, setOpen] = useState<boolean>(false);

  const closeDropDownHandler = () => setOpen(false);
  const toggleDropDownHandler = () => setOpen((prev) => !prev);

  const divOutsideRef = useOutsideClick(closeDropDownHandler);

  return (
    <div ref={divOutsideRef} className={styles.container}>
      <button className={styles.button} onClick={toggleDropDownHandler}>
        Вакансии
        <div
          className={classNames(styles.wrapper, {
            [styles.turn]: open,
          })}
        >
          <Image src={arrow} alt="Все вакансии." />
        </div>
      </button>

      <div
        className={classNames(styles.content, {
          [styles.show]: open,
        })}
      >
        <Link onClick={closeDropDownHandler} href="/career/python">
          Python
        </Link>
        <Link onClick={closeDropDownHandler} href="/career/js">
          JS
        </Link>
      </div>
    </div>
  );
};
