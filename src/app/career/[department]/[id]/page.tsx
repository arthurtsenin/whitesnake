import { VacancyPageLayout } from "@/page/dynamic/vacancy/Vacancy.page";
import PageScript from "@/shared/analitics/PageScript";
import { getLists } from "@/shared/utils/getVacancyLists";
import { getSubtitle } from "@/shared/utils/getVacancySubtitle";
import { getTitles } from "@/shared/utils/getVacancyTitles";

import { getVacancy } from "../service";

type VacancyPageType = {
  params: { id: string; department: string };
};

export default async function VacancyPage({ params }: VacancyPageType) {
  const vacancy = await getVacancy(params.id);

  const subtitle = getSubtitle(vacancy.description, vacancy.name) || [""];
  const titles = getTitles(vacancy.description);
  const lists = getLists(vacancy.description);

  return (
    <>
      <PageScript />
      <VacancyPageLayout
        department={params.department}
        jobTitle={vacancy.name}
        title={vacancy.name}
        subtitle={subtitle[0]}
        titles={titles}
        lists={lists}
      />
    </>
  );
}
