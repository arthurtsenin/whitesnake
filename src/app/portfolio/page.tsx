import PageScript from "@/shared/analitics/PageScript";
import { Contacts } from "@/widget/Contacts/Contacts";
import { CONTACTS_DATA } from "@/widget/Contacts/data";
import { CASES_PREVIEW_CARDS } from "@/widget/GridContainer/data";
import { GridContainer } from "@/widget/GridContainer/GridContainer";
import { PortfolioHero } from "@/widget/PortfolioHero/PortfolioHero";

export default function PortfolioPage() {
  return (
    <>
      <div className="container">
        <PageScript />
        <PortfolioHero
          title="Портфолио"
          subtitle="Как мы решаем сложные задачи"
        />
        <GridContainer title="Портфолио" data={CASES_PREVIEW_CARDS} />
        <Contacts
          contacts={CONTACTS_DATA}
          title="Связаться с нами"
          subtitle="Закажите бесплатную консультацию, чтобы получить индивидуальное предложение в соответствии с вашими требованиями"
        />
      </div>
    </>
  );
}
