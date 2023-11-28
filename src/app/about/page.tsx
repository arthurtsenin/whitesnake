"use client";

import { useEffect } from "react";

import PageScript from "@/shared/analitics/PageScript";
import { AboutHero } from "@/widget/AboutUs/AboutHero/AboutHero";
import { CompanyNumbers } from "@/widget/AboutUs/CompanyNumbers/CompanyNumbers";
import { COMPANY_NUMBERS_DATA } from "@/widget/AboutUs/CompanyNumbers/data";
import { CompanyValues } from "@/widget/CompanyValues/CompanyValues";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { LifeGrid } from "@/widget/LifeGrid/LifeGrid";

export default function AboutPage() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <PageScript />
      <AboutHero />
      <CompanyValues />
      <CompanyNumbers title="Немного цифр" cards={COMPANY_NUMBERS_DATA} />
      <LifeGrid />
      <InternshipOffice />
    </>
  );
}
