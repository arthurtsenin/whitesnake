import { Container } from "@/shared";
import PageScript from "@/shared/analitics/PageScript";
import { CompanyValues } from "@/widget/CompanyValues/CompanyValues";
import { HomeHero } from "@/widget/HomeHero/HomeHero";
import { InternshipWorkBenefits } from "@/widget/Internship/InternshipWorkBenefits/InternshipWorkBenefits";

export default function AboutPage() {
  return (
    <>
      <PageScript />
      <Container>
        <HomeHero />
        <CompanyValues />
        <InternshipWorkBenefits />
      </Container>
    </>
  );
}
