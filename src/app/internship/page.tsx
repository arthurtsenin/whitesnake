import PageScript from "@/shared/analitics/PageScript";
import { InternshipAccardion } from "@/widget/Internship/InternshipAccardion/InternshipAccardion";
import { InternshipForm } from "@/widget/Internship/InternshipForm/InternshipForm";
import { InternshipHero } from "@/widget/Internship/InternshipHero/InternshipHero";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";
import { InternshipCardsContainer } from "@/widget/InternshipCardsContainer/InternshipCardsContainer";
import { TileTab } from "@/widget/TileTab/TileTab";

export default function InternshipPage() {
  return (
    <>
      <InternshipHero />
      <InternshipCardsContainer />
      <InternshipWorkBenefits />
      <InternshipOffice />
      <TileTab />
      <InternshipAccardion />
      <InternshipForm />
      <PageScript />
    </>
  );
}
