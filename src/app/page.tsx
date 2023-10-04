import { Contacts } from "@/widget/Contacts/Contacts";
import { CONTACTS_DATA } from "@/widget/Contacts/data";
import { CASES_PREVIEW_CARDS } from "@/widget/GridContainer/data";
import { GridContainer } from "@/widget/GridContainer/GridContainer";

export default function Home() {
  return (
    <main
      className="main"
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "80px",
      }}
    >
      <GridContainer
        data={CASES_PREVIEW_CARDS}
        subtitle="dfdfdf"
        title="dfdfdf"
        suptitle="dfdfdf"
      />
      <Contacts
        title="Контакты"
        subtitle="Набери нам"
        contacts={CONTACTS_DATA}
      />
    </main>
  );
}
