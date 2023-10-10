import { ROUTES_CONFIG } from "./cases/cases";

export default function CasesPage({ params }: { params: { case: string } }) {
  return <section>{ROUTES_CONFIG[params.case]}</section>;
}
