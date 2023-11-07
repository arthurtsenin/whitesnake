import { FC } from "react";

import { VacancyForm } from "@/widget/Form/VacancyForm/VacancyForm";
import { VacancyDescription } from "@/widget/Vacancy/VacancyDescription/VacancyDescription";
import { VacancyHero } from "@/widget/Vacancy/VacancyHero/VacancyHero";

type VacancyPageLayoutProps = {
  jobTitle: string;
  title: string;
  subtitle: string;
  titles?: Array<string>;
  lists?: Array<Array<string> | undefined>;
};

export const VacancyPageLayout: FC<VacancyPageLayoutProps> = ({
  jobTitle,
  title,
  subtitle,
  titles,
  lists,
}) => {
  return (
    <>
      <VacancyHero title={title} subtitle={subtitle} />
      <VacancyDescription titles={titles} lists={lists} />
      <VacancyForm jobTitle={jobTitle} />
    </>
  );
};
