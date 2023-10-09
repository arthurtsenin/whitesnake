import { Accordion, DynamicTabs, StaticTabs } from "@/widget";
import { ACCORDIONS_DATA } from "@/widget/Accordion/data";
import { Banner } from "@/widget/Banner/Banner";
import { BenefitCards } from "@/widget/BenefitCards/BenefitCards";
import { BENEFIT_CARD_WITH_ICON_DATA } from "@/widget/BenefitCards/data";
import { Contacts } from "@/widget/Contacts/Contacts";
import { CONTACTS_DATA } from "@/widget/Contacts/data";
import { CASES_PREVIEW_CARDS } from "@/widget/GridContainer/data";
import { GridContainer } from "@/widget/GridContainer/GridContainer";
import { HomeHero } from "@/widget/HomeHero/HomeHero";
import { INDUSTRY_DATA, TECHNOLOGIE_DATA } from "@/widget/Tabs/data";

export default function Home() {
  return (
    <main className="main">
      <HomeHero />
      <BenefitCards variant="withIcon" data={BENEFIT_CARD_WITH_ICON_DATA} />
      <GridContainer
        data={CASES_PREVIEW_CARDS}
        title="fgdhdfhdfhd"
        suptitle="gffgfgfgfg"
        subtitle="dhfhghdfgh"
      />
      <StaticTabs
        data={INDUSTRY_DATA}
        title="fgdhdfhdfhd"
        suptitle="gffgfgfgfg"
        subtitle="dhfhghdfgh"
      />
      <Banner />
      <DynamicTabs
        data={TECHNOLOGIE_DATA}
        title="fgdhdfhdfhd"
        suptitle="gffgfgfgfg"
        subtitle="dhfhghdfgh"
      />
      <Contacts
        contacts={CONTACTS_DATA}
        title="fgdhdfhdfhd"
        suptitle="gffgfgfgfg"
        subtitle="dhfhghdfgh"
      />
      <Accordion accordions={ACCORDIONS_DATA} />
    </main>
  );
}
