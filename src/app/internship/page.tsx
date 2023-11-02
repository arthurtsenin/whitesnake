import { InternshipAccardion } from "@/widget/Internship/InternshipAccardion/InternshipAccardion";
import { InternshipForm } from "@/widget/Internship/InternshipForm/InternshipForm";
import { InternshipHero } from "@/widget/Internship/InternshipHero/InternshipHero";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";
import { TileTab } from "@/widget/TileTab/TileTab";

export default function InternshipPage() {
  return (
    <>
      <InternshipHero />
      <section>
        <InternshipWorkBenefits />
      </section>
      <section>
        <InternshipOffice />
      </section>
      <TileTab />
      <InternshipAccardion />
      <InternshipForm />
    </>
  );
}
