import PageScript from "@/shared/analitics/PageScript";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";
import { Advantages } from "@/widget/Advantages/Advantages";
import { CareerAccordion } from "@/widget/Career/CareerAccordion/CareerAccordion";
import { CareerHero } from "@/widget/Career/CareerHero/CareerHero";
import { CareerVacanciesCards } from "@/widget/Career/CareerVacanciesCards/CareerVacanciesCards";
import { MANAGER_BENEFITS_DATA } from "@/widget/Career/ManagerBenefits/data";
import { ManagerBenefits } from "@/widget/Career/ManagerBenefits/ManagerBenefits";
import { VacanciesForm } from "@/widget/Form/VacanciesForm/VacanciesForm";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";

export type VacancyType = {
  id: string;
  premium: boolean;
  name: string;
  department: null;
  has_test: boolean;
  response_letter_required: boolean;
  area: { id: string; name: string; url: string };
  salary: null;
  type: { id: string; name: string };
  address: null;
  response_url: null;
  sort_point_distance: null;
  published_at: string;
  created_at: string;
  archived: boolean;
  apply_alternate_url: string;
  show_logo_in_search: null;
  insider_interview: null;
  url: string;
  alternate_url: string;
  relations: [];
  employer: {
    id: string;
    name: string;
    url: string;
    alternate_url: string;
    logo_urls: {
      [key: string]: string;
    };
    vacancies_url: string;
    accredited_it_employer: boolean;
    trusted: boolean;
  };
  snippet: {
    requirement: string;
    responsibility: string;
  };
  contacts: null;
  schedule: { id: string; name: string };
  working_days: [];
  working_time_intervals: [];
  working_time_modes: [];
  accept_temporary: boolean;
  professional_roles: [{ id: string; name: string }];
  accept_incomplete_resumes: boolean;
  experience: { id: string; name: string };
  employment: { id: string; name: string };
  adv_response_url: null;
  is_adv_vacancy: boolean;
};

const vacanciesApiPath = `https://api.hh.ru/vacancies/?text=%D0%A3%D0%B0%D0%B9%D1%82%D0%A1%D0%BD%D0%B5%D0%B9%D0%BA&host=rabota.by`;

async function getVacanciesData(): Promise<Record<string, Array<VacancyType>>> {
  const res = await fetch(vacanciesApiPath, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CareerPage() {
  const vacanciesData = await getVacanciesData();
  const vacancies = vacanciesData.items;

  const cards = vacancies
    .map((vacancy) => ({
      id: vacancy.id,
      title: vacancy.name,
      location: vacancy.area.name,
    }))
    .slice(0, 3);

  const jobTitles = vacancies.map((vacancy) => vacancy.name).concat("Другое");

  return (
    <>
      <PageScript />
      <CareerHero />
      <CareerVacanciesCards cards={cards} />
      <InternshipWorkBenefits />
      <ManagerBenefits
        title="Стань менеджером"
        subtitle="Мы поощряем ребят, которые берут стажеров под личное руководство и даём возможность расти в сторону менеджмента"
        benefits={MANAGER_BENEFITS_DATA}
      />
      <Advantages />
      <InternshipOffice />
      <CareerAccordion
        title="Часто задаваемые вопросы"
        accordions={ACCORDIONS_DATA}
      />
      <VacanciesForm jobTitles={jobTitles} />
    </>
  );
}
