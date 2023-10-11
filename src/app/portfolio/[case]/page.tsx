import { ROUTES_CONFIG } from "@/page/dynamic/cases/config";

export default function CasesPage({ params }: { params: { case: string } }) {
  return <section>{ROUTES_CONFIG[params.case]}</section>;
}
