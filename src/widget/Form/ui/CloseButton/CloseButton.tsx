"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./CloseButton.module.css";

import close from "&/images/icons/close.png";

export const CloseButton = () => {
  const router = useRouter();

  const onClick = () => router.back();

  return (
    <div className={styles.wrapper} onClick={onClick}>
      <Image src={close} alt="Закрыть форму" />
    </div>
  );
};
