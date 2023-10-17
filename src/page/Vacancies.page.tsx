import { FC } from "react";

// import { VacanciesForm } from "@/widget/Vacancies/VacanciesForm/VacanciesForm";
import { VacanciesHero } from "@/widget/Vacancies/VacanciesHero/VacanciesHero";
import { VacanciesCards } from "@/widget/Vacancies/VacancyCards/VacancyCards";

type VacanciesPageLayoutProps = {
  path: string;
  titles: Array<string>;
  locations: Array<string>;
  urls: Array<string>;
};

export const VacanciesPageLayout: FC<VacanciesPageLayoutProps> = ({
  path,
  titles,
  locations,
  urls,
}) => {
  return (
    <>
      <VacanciesHero path={path} />
      <VacanciesCards titles={titles} locations={locations} urls={urls} />
      {/* <VacanciesForm /> */}
    </>
  );
};
