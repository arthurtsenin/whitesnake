import React from "react";

import { ROUTES_CONFIG } from "@/page/dynamic/cases/config";

export default function CasesPage({ params }: { params: { case: string } }) {
  return <React.Fragment>{ROUTES_CONFIG[params.case]}</React.Fragment>;
}
