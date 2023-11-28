import dynamic from "next/dynamic";

import PageScript from "@/shared/analitics/PageScript";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";
import { HomeBanner } from "@/widget/Banner/HomeBanner/HomeBanner";
import { BenefitCards } from "@/widget/BenefitCards/BenefitCards";
import { BENEFIT_CARD_WITH_ICON_DATA } from "@/widget/BenefitCards/data";
import { CASES_PREVIEW_CARDS } from "@/widget/GridContainer/data";
import { GridContainer } from "@/widget/GridContainer/GridContainer";
import { HomeHero } from "@/widget/HomeHero/HomeHero";
import { Statistic } from "@/widget/Statistic/Statistic";
import { INDUSTRY_DATA, TECHNOLOGIE_DATA } from "@/widget/Tabs/data";

const StaticTabs = dynamic(() => import("@/widget/Tabs/StaticTabs"));
const DynamicTabs = dynamic(() => import("@/widget/Tabs/DynamicTabs"));
const Accordion = dynamic(() => import("@/widget/Accordion/Accordion"));
const Scroller = dynamic(() => import("@/widget/HomeScroller/HomeScroller"));

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
      <Scroller />
      <Statistic />
      <HomeBanner />
      <DynamicTabs
        title="Современный стек технологий"
        subtitle="С нами работают специалисты с разнообразным опытом и постоянно обучаются"
        suptitle="технологии"
        data={TECHNOLOGIE_DATA}
      />
      <Accordion accordions={ACCORDIONS_DATA} />
    </>
  );
}
