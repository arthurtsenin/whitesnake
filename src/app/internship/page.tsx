import PageScript from "@/shared/analitics/PageScript";
import { InternshipCardsContainer } from "@/widget/InternshipCardsContainer/InternshipCardsContainer";

import { HomeScroller } from "../../widget/HomeScroller/HomeScroller";

export default function InternshipPage() {
  return (
    <>
      <PageScript />
      Internship page
      <InternshipCardsContainer />
      <HomeScroller />
    </>
  );
}
