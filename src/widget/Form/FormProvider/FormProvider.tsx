"use client";

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

import styles from "./FormProvider.module.css";

import { FORMS } from "../config";
import { CloseButton } from "../ui/CloseButton/CloseButton";

import raindropLower from "&/images/main-hero/raindrop-lower.webp";
import raindropUpper from "&/images/main-hero/raindrop-middle.webp";
import sphere from "&/images/main-hero/sphere.webp";

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
            <div className={styles.sphere}>
              <Image src={sphere} alt="" priority placeholder="blur" />
            </div>

            <div className={styles.raindropLower}>
              <Image src={raindropLower} alt="" priority />
            </div>
            <div className={styles.raindropUpper}>
              <Image src={raindropUpper} alt="" priority />
            </div>
            <CloseButton />
            {FORMS[currentForm]}
          </div>
        </div>
      )}
    </>
  );
};
