"use client";

import { useEffect } from "react";

import PageScript from "@/shared/analitics/PageScript";
import {
  CONSULTING_DATA,
  END_TO_END_DATA,
  TEAM_EXTENSION_DATA,
} from "@/widget/Services/data";
import { Service } from "@/widget/Services/Service/Service";
import { ServicesHero } from "@/widget/Services/ServicesHero/ServicesHero";

export default function ServicesPage() {
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
      <ServicesHero />
      <Service {...TEAM_EXTENSION_DATA} />
      <Service {...END_TO_END_DATA} />
      <Service {...CONSULTING_DATA} />
    </>
  );
}
