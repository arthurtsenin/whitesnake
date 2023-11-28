"use client";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import PageScript from "@/shared/analitics/PageScript";
import { InternshipAccardion } from "@/widget/Internship/InternshipAccardion/InternshipAccardion";
import { InternshipHero } from "@/widget/Internship/InternshipHero/InternshipHero";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";

const IntershipCards = dynamic(
  () => import("@/widget/InternshipCardsContainer/InternshipCardsContainer"),
);
const WorkBenefits = dynamic(
  () =>
    import("@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits"),
);
const Advantages = dynamic(() => import("@/widget/Advantages/Advantages"));
const VacancyForm = dynamic(
  () => import("@/widget/Form/VacancyForm/VacancyForm"),
);

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
      <IntershipCards />
      <WorkBenefits />
      <InternshipOffice />
      <Advantages />
      <InternshipAccardion />
      <VacancyForm formTitle="Оставить заявку на стажировку" />
    </>
  );
}
