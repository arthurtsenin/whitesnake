import { HomeHero } from "../widget/HomeHero/HomeHero";
import { ScrollCarousel } from "../widget/ScrollCarousel/ScrollCarousel";

export default function Home() {
  return (
    <main className="main">
      <HomeHero />
      <ScrollCarousel />
    </main>
  );
}
