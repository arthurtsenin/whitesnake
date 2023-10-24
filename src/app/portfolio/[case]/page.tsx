import { ROUTES_CONFIG } from "@/page/dynamic/cases/config";
import PageScript from "@/shared/analitics/PageScript";

export default function CasesPage({ params }: { params: { case: string } }) {
  return (
    <>
      <PageScript />
      {ROUTES_CONFIG[params.case]}
    </>
  );
}
