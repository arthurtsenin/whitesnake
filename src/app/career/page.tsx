import PageScript from "@/shared/analitics/PageScript";
import { MAIN_WORKING_CONDITIONS_DATA } from "@/widget/MainWorkingConditions/data";
import { MainWorkingConditions } from "@/widget/MainWorkingConditions/MainWorkingConditions";
import { VacanciesHero } from "@/widget/Vacancies/VacanciesHero/VacanciesHero";

export default function CareePage() {
  return (
    <>
      <PageScript />
      <VacanciesHero path="#" />
      <MainWorkingConditions
        title="Что такое работа в Whitesnake"
        conditions={MAIN_WORKING_CONDITIONS_DATA}
      />
    </>
  );
}
