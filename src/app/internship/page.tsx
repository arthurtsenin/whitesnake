import PageScript from "@/shared/analitics/PageScript";
import { InternshipAccardion } from "@/widget/Internship/InternshipAccardion/InternshipAccardion";
import { InternshipForm } from "@/widget/Internship/InternshipForm/InternshipForm";
import { InternshipHero } from "@/widget/Internship/InternshipHero/InternshipHero";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";
import { InternshipCardsContainer } from "@/widget/InternshipCardsContainer/InternshipCardsContainer";

import { Advantages } from "../../widget/Advantages/Advantages";

export default function InternshipPage() {
  return (
    <>
      <PageScript />
      <InternshipHero />
      <InternshipCardsContainer />
      <InternshipWorkBenefits />
      <InternshipOffice />
      <Advantages />
      <InternshipAccardion />
      <InternshipForm />
    </>
  );
}
