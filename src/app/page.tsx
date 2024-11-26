import MainSection from "@/components/MainSection/MainSection";
import { mainSectionItems } from "@/constants";

export default function Home() {
  return (
    <main >
      {/* Title section */}
      <MainSection title="Trending" items={mainSectionItems} isTitleSection />

      {/* Albums section */}
      <MainSection title="Albums" items={mainSectionItems} />
    </main>
  );
}
