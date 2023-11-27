import PageScript from "@/shared/analitics/PageScript";
import { Advantages } from "@/widget/Advantages/Advantages";
import { VacancyForm } from "@/widget/Form/VacancyForm/VacancyForm";
import { HIRING_PROCESS_DATA } from "@/widget/HiringProcess/data";
import { HiringProcess } from "@/widget/HiringProcess/HiringProcess";
import { InternshipAccardion } from "@/widget/Internship/InternshipAccardion/InternshipAccardion";
import { InternshipHero } from "@/widget/Internship/InternshipHero/InternshipHero";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";
import { InternshipCardsContainer } from "@/widget/InternshipCardsContainer/InternshipCardsContainer";

export default function InternshipPage() {
  return (
    <>
      <PageScript />
      <InternshipHero />
      <InternshipCardsContainer />
      <InternshipWorkBenefits />
      <InternshipOffice />
      <Advantages />
      <HiringProcess
        title="Как происходит процесс найма?"
        cards={HIRING_PROCESS_DATA}
      />
      <InternshipAccardion />
      <VacancyForm formTitle="Оставить заявку на стажировку" />
    </>
  );
}
