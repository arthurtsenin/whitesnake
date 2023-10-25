import PageScript from "@/shared/analitics/PageScript";
import Accordion from "@/widget/Accordion/Accordion";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";
import { Benefits } from "@/widget/Career/Benefits/Benefits";
import { CareerHero } from "@/widget/Career/CareerHero/CareerHero";
import { WORKING_CONDITIONS_DATA } from "@/widget/Career/WorkingConditions/data";
import { WorkingConditions } from "@/widget/Career/WorkingConditions/WorkingConditions";
import { JOB_TITLES } from "@/widget/Form/data";
import { VacanciesForm } from "@/widget/Form/VacanciesForm/VacanciesForm";
import { VacanciesCards } from "@/widget/Vacancies/VacanciesCards/VacanciesCards";

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

async function getData(): Promise<Record<string, Array<VacancyType>>> {
  const res = await fetch(vacanciesApiPath, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function CareerPage() {
  const vacanciesData = await getData();
  const vacancies = vacanciesData.items;

  const cards = vacancies.map((card) => ({
    id: card.id,
    title: card.name,
    location: card.area.name,
  }));

  return (
    <>
      <PageScript />
      <CareerHero />
      <VacanciesCards cards={cards} />
      <WorkingConditions
        title="Что такое работа в Whitesnake"
        conditions={WORKING_CONDITIONS_DATA}
      />
      <Benefits />
      <Accordion accordions={ACCORDIONS_DATA} />
      <VacanciesForm jobTitles={JOB_TITLES} />
    </>
  );
}
