"use client";

import { useEffect } from "react";

import PageScript from "@/shared/analitics/PageScript";
import { Advantages } from "@/widget/Advantages/Advantages";
import { VacancyForm } from "@/widget/Form/VacancyForm/VacancyForm";
import { InternshipAccardion } from "@/widget/Internship/InternshipAccardion/InternshipAccardion";
import { InternshipHero } from "@/widget/Internship/InternshipHero/InternshipHero";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";
import { InternshipCardsContainer } from "@/widget/InternshipCardsContainer/InternshipCardsContainer";

export default function InternshipPage() {
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
      <InternshipHero />
      <InternshipCardsContainer />
      <InternshipWorkBenefits />
      <InternshipOffice />
      <Advantages />
      <InternshipAccardion />
      <VacancyForm formTitle="Оставить заявку на стажировку" />
    </>
  );
}
