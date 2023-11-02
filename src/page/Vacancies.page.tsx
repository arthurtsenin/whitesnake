import { FC } from "react";

import { VacancyType } from "@/app/vacancies/page";
import { VacanciesForm } from "@/widget/Form/VacanciesForm/VacanciesForm";
import { VacanciesCards } from "@/widget/Vacancies/VacanciesCards/VacanciesCards";
import { VacanciesHero } from "@/widget/Vacancies/VacanciesHero/VacanciesHero";

type VacanciesPageLayoutProps = {
  path: string;
  vacancies: Array<VacancyType>;
};

export const VacanciesPageLayout: FC<VacanciesPageLayoutProps> = ({
  path,
  vacancies,
}) => {
  const cards = vacancies.map((card) => ({
    id: card.id,
    title: card.name,
    location: card.area.name,
  }));

  const jobTitles = cards.map((card) => card.title).concat("Другое");

  return (
    <>
      <VacanciesHero path={path} />
      <VacanciesCards cards={cards} />
      <VacanciesForm jobTitles={jobTitles} />
    </>
  );
};
