import { Container } from "@/shared";
import { InternshipAccardion } from "@/widget/Internship/InternshipAccardion/InternshipAccardion";
import { InternshipForm } from "@/widget/Internship/InternshipForm/InternshipForm";
import { InternshipHero } from "@/widget/Internship/InternshipHero/InternshipHero";
import { InternshipOffice } from "@/widget/Internship/InternshipOffice/InternshipOffice";

export default function InternshipPage() {
  return (
    <>
      <InternshipHero />
      <section>
        <Container>
          <InternshipOffice />
        </Container>
      </section>
      <InternshipAccardion />
      <InternshipForm />
    </>
  );
}
