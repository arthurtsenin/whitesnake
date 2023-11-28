"use client";

import { useEffect } from "react";

import { ROUTES_CONFIG } from "@/page/dynamic/cases/config";
import PageScript from "@/shared/analitics/PageScript";

export default function CasesPage({ params }: { params: { case: string } }) {
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
      {ROUTES_CONFIG[params.case]}
    </>
  );
}
