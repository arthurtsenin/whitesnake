import PageScript from "@/shared/analitics/PageScript";
import { VacanciesHero } from "@/widget/Vacancies/VacanciesHero/VacanciesHero";
import { WORKING_CONDITIONS_DATA } from "@/widget/WorkingConditions/data";
import { WorkingConditions } from "@/widget/WorkingConditions/WorkingConditions";

export default function CareePage() {
  return (
    <>
      <PageScript />
      <VacanciesHero path="#" />
      <WorkingConditions
        title="Что такое работа в Whitesnake"
        conditions={WORKING_CONDITIONS_DATA}
      />
    </>
  );
}
