"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import styles from "./FormProvider.module.css";

import { CloseButton } from "./ui/CloseButton/CloseButton";

export const FormProvider = () => {
  const searchParams = useSearchParams();
  const currentForm = searchParams?.get("form");

  useEffect(() => {
    currentForm
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");
  });

  return (
    <>
      {currentForm && (
        <div className={styles.bg}>
          <div className={styles.container}>
            <CloseButton />
            {`Какая-то форма ${currentForm}`}
          </div>
        </div>
      )}
    </>
  );
};
