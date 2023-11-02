"use client";

import { useRouter } from "next/navigation";

import styles from "./CloseButton.module.css";

export const CloseButton = () => {
  const router = useRouter();

  const onClick = () => router.back();

  return (
    <span className={styles.close} onClick={onClick}>
      X
    </span>
  );
};
