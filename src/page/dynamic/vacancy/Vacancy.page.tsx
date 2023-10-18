import { FC } from "react";

import { VacancyDescription } from "@/widget/Vacancy/VacancyDescription/VacancyDescription";
import { VacancyForm } from "@/widget/Vacancy/VacancyForm/VacancyForm";
import { VacancyHero } from "@/widget/Vacancy/VacancyHero/VacancyHero";

type VacancyPageLayoutProps = {
  path: string;
  title: string;
  jobTitle: string;
  titles?: Array<string>;
  lists?: Array<Array<string> | undefined>;
};

export const VacancyPageLayout: FC<VacancyPageLayoutProps> = ({
  jobTitle,
  path,
  title,
  titles,
  lists,
}) => {
  return (
    <>
      <VacancyHero path={path} title={title} />
      <VacancyDescription titles={titles} lists={lists} />
      <VacancyForm jobTitle={jobTitle} />
    </>
  );
};
