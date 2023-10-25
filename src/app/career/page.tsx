import PageScript from "@/shared/analitics/PageScript";
import { CareerHero } from "@/widget/Career/CareerHero/CareerHero";
import { WORKING_CONDITIONS_DATA } from "@/widget/WorkingConditions/data";
import { WorkingConditions } from "@/widget/WorkingConditions/WorkingConditions";

export default function CareerPage() {
  return (
    <>
      <PageScript />
      <CareerHero />
      <WorkingConditions
        title="Что такое работа в Whitesnake"
        conditions={WORKING_CONDITIONS_DATA}
      />
    </>
  );
}
