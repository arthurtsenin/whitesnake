import dynamic from "next/dynamic";

import PageScript from "@/shared/analitics/PageScript";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";
import { Banner } from "@/widget/Banner/Banner";
import { BenefitCards } from "@/widget/BenefitCards/BenefitCards";
import { BENEFIT_CARD_WITH_ICON_DATA } from "@/widget/BenefitCards/data";
import { Contacts } from "@/widget/Contacts/Contacts";
import { CONTACTS_DATA } from "@/widget/Contacts/data";
import { CASES_PREVIEW_CARDS } from "@/widget/GridContainer/data";
import { GridContainer } from "@/widget/GridContainer/GridContainer";
import { HomeHero } from "@/widget/HomeHero/HomeHero";
import { Statistic } from "@/widget/Statistic/Statistic";
import { INDUSTRY_DATA, TECHNOLOGIE_DATA } from "@/widget/Tabs/data";

import { HomeScroller } from "../widget/HomeScroller/HomeScroller";

const StaticTabs = dynamic(() => import("@/widget/Tabs/StaticTabs"));

const DynamicTabs = dynamic(() => import("@/widget/Tabs/DynamicTabs"));
const Accordion = dynamic(() => import("@/widget/Accordion/Accordion"));

export default function Home() {
  return (
    <>
      <PageScript />
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
        data={INDUSTRY_DATA}
      />

      <HomeScroller />

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
        subtitle="Закажите бесплатную консультацию, чтобы получить индивидуальное предложение в соответствии с вашими требованиями"
      />
      <Accordion accordions={ACCORDIONS_DATA} />
    </>
  );
}
