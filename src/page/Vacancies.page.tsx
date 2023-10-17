import { FC } from "react";

import { VacancyType } from "@/app/vacancies/page";
import { VacanciesCards } from "@/widget/Vacancies/VacanciesCards/VacanciesCards";
// import { VacanciesForm } from "@/widget/Vacancies/VacanciesForm/VacanciesForm";
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
    title: card.name,
    location: card.area.name,
    url: card.alternate_url,
  }));

  return (
    <>
      <VacanciesHero path={path} />
      <VacanciesCards cards={cards} />
      {/* <VacanciesForm /> */}
    </>
  );
};
