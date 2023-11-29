"use client";

import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useEffect } from "react";

import styles from "./FormProvider.module.css";

import { FORMS } from "../config";
import { CloseButton } from "../ui/CloseButton/CloseButton";

import raindropUpper from "&/images/raindrops/13.webp";
import raindropLower from "&/images/raindrops/14.webp";
import sphere from "&/images/sphere.webp";

export const FormProvider: FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const formName = searchParams?.get("form") ?? "";
  const isFormExistInConfig = Object.keys(FORMS).includes(formName);

  useEffect(() => {
    if (!isFormExistInConfig) {
      router.replace(pathname);
    }
  }, [searchParams, pathname, isFormExistInConfig, router]);

  useEffect(() => {
    isFormExistInConfig
      ? document.body.classList.add("lock")
      : document.body.classList.remove("lock");
  });

  return (
    <>
      {isFormExistInConfig && (
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
            {FORMS[formName]}
          </div>
        </div>
      )}
    </>
  );
};
