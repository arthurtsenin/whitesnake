import { Accordion, DynamicTabs, StaticTabs } from "../widget";
import { ACCORDIONS_DATA } from "../widget/Accordion/data";
import { Banner } from "../widget/Banner/Banner";
import { BenefitCards } from "../widget/BenefitCards/BenefitCards";
import { BENEFIT_CARD_WITH_ICON_DATA } from "../widget/BenefitCards/data";
import { Contacts } from "../widget/Contacts/Contacts";
import { CONTACTS_DATA } from "../widget/Contacts/data";
import { CASES_PREVIEW_CARDS } from "../widget/GridContainer/data";
import { GridContainer } from "../widget/GridContainer/GridContainer";
import { HomeHero } from "../widget/HomeHero/HomeHero";
import { ScrollCarousel } from "../widget/ScrollCarousel/ScrollCarousel";
import { Statistic } from "../widget/Statistic/Statistic";
import { INDUSTRY_DATA, TECHNOLOGIE_DATA } from "../widget/Tabs/data";

export default function Home() {
  return (
    <>
      <HomeHero />

      <BenefitCards data={BENEFIT_CARD_WITH_ICON_DATA} variant="withIcon" />
      <GridContainer
        title="Наши проекты"
        subtitle="Как мы решаем сложные задачи"
        suptitle="портфолио"
        data={CASES_PREVIEW_CARDS}
      />
      <StaticTabs
        title="Предоставляем команды разработчиков для разных сфер"
        subtitle="Скорее всего, у нас уже есть опыт в вашей нише"
        suptitle=""
        data={INDUSTRY_DATA}
      />

      <ScrollCarousel />

      <Statistic />

      <Banner />
      <DynamicTabs
        title="Современный стек технологий"
        subtitle="С нами работают специалисты с разнообразным опытом и постоянно обучаются"
        suptitle="технологии"
        data={TECHNOLOGIE_DATA}
      />

      <Contacts
        contacts={CONTACTS_DATA}
        title="Связаться с нами"
        subtitle="Book a free strategy session to get a custom offer tailored for your business needs "
      />
      <Accordion accordions={ACCORDIONS_DATA} />
    </>
  );
}
