import { Button } from "@/shared";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        padding: "50px",
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="transparent">Transparent</Button>
    </main>
  );
}
