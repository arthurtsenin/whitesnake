import dynamic from "next/dynamic";

import PageScript from "@/shared/analitics/PageScript";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";
import { Advantages } from "@/widget/Advantages/Advantages";
import { CareerAccordion } from "@/widget/Career/CareerAccordion/CareerAccordion";
import { CareerHero } from "@/widget/Career/CareerHero/CareerHero";
import { MANAGER_BENEFITS_DATA } from "@/widget/Career/ManagerBenefits/data";
import { ManagerBenefits } from "@/widget/Career/ManagerBenefits/ManagerBenefits";
import { VacanciesForm } from "@/widget/Form/VacanciesForm/VacanciesForm";
import { HIRING_PROCESS_DATA } from "@/widget/HiringProcess/data";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";
import { VacanciesGroups } from "@/widget/VacanciesGroups/VacanciesGroups";

import { getVacancies } from "./[department]/service";

const HiringProcess = dynamic(
  () => import("@/widget/HiringProcess/HiringProcess"),
);

export default async function CareerPage() {
  const vacanciesData = await getVacancies();
  const vacancies = vacanciesData.items;

  const cards = vacancies
    .map((vacancy) => ({
      id: vacancy.id,
      title: vacancy.name,
      location: vacancy.area.name,
    }))
    .slice(0, 3);

  const jobTitles = vacancies.map((vacancy) => vacancy.name).concat("Другое");

  const groups = cards.reduce(
    (
      acc: { [key: string]: Array<Record<string, string>> },
      item,
      index,
      array,
    ) => {
      const pythonVacancies = array
        .filter((card) => card.title.toLowerCase().includes("python"))
        .map((item) => {
          return { ...item, department: "python" };
        });

      acc["python"] = pythonVacancies;

      return acc;
    },
    {},
  );

  return (
    <>
      <PageScript />
      <CareerHero />
      <VacanciesGroups groups={groups} />
      <InternshipWorkBenefits />
      <ManagerBenefits
        title="Стань менеджером"
        subtitle="Мы поощряем ребят, которые берут стажеров под личное руководство и даём возможность расти в сторону менеджмента"
        benefits={MANAGER_BENEFITS_DATA}
      />
      <Advantages />
      <InternshipOffice />
      <HiringProcess
        title="Как происходит процесс найма?"
        cards={HIRING_PROCESS_DATA}
      />
      <CareerAccordion
        title="Часто задаваемые вопросы"
        accordions={ACCORDIONS_DATA}
      />
      <VacanciesForm jobTitles={jobTitles} formTitle="Оставить заявку" />
    </>
  );
}
