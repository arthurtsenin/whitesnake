"use client";

import { useEffect } from "react";

import PageScript from "@/shared/analitics/PageScript";
import { CASES_PREVIEW_CARDS } from "@/widget/GridContainer/data";
import { GridContainer } from "@/widget/GridContainer/GridContainer";
import { PortfolioHero } from "@/widget/PortfolioHero/PortfolioHero";

export default function PortfolioPage() {
  useEffect(() => {
    const timerId = setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 200);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <>
      <PageScript />
      <div>
        <PortfolioHero
          title="Портфолио"
          subtitle="Как мы решаем сложные задачи"
        />
        <GridContainer title="Портфолио" data={CASES_PREVIEW_CARDS} />
      </div>
    </>
  );
}
