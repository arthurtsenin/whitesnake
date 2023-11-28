import PageScript from "@/shared/analitics/PageScript";
import { VacanciesForm } from "@/widget/Form/VacanciesForm/VacanciesForm";
import { VacanciesCards } from "@/widget/Vacancies/VacanciesCards/VacanciesCards";
import { VacanciesDescription } from "@/widget/Vacancies/VacanciesDescription/VacanciesDescription";
import { VacanciesHero } from "@/widget/Vacancies/VacanciesHero/VacanciesHero";

import { getVacancies } from "./service";

type VacanciesGroupPageType = {
  params: { department: string };
};

export default async function VacanciesGroupPage({
  params,
}: VacanciesGroupPageType) {
  const data = await getVacancies();
  const vacancies = data.items;

  const cards = vacancies
    .filter((card) => card.name.toLowerCase().includes(params.department))
    .map((card) => ({
      id: card.id,
      title: card.name,
      location: card.area.name,
      department: params.department,
    }));

  const employerPath =
    vacancies?.at(0)?.employer.alternate_url ||
    "https://rabota.by/employer/5674346";

  const jobTitles = cards.map((card) => card.title);

  return (
    <>
      <PageScript />
      <VacanciesHero path={employerPath} department={params.department} />
      <VacanciesCards cards={cards} />
      <VacanciesDescription />
      <VacanciesForm jobTitles={jobTitles} formTitle="Оставить заявку" />
    </>
  );
}
