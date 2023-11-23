import PageScript from "@/shared/analitics/PageScript";
import { AboutHero } from "@/widget/AboutUs/AboutHero/AboutHero";
import { CompanyNumbers } from "@/widget/AboutUs/CompanyNumbers/CompanyNumbers";
import { COMPANY_NUMBERS_DATA } from "@/widget/AboutUs/CompanyNumbers/data";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";

export default function AboutPage() {
  return (
    <>
      <PageScript />
      <AboutHero />
      <CompanyNumbers title="Немного цифр" cards={COMPANY_NUMBERS_DATA} />
      <InternshipOffice />
    </>
  );
}
