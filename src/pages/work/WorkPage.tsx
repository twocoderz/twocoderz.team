import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { PortfolioGridSection } from "../../shared/components/sections/PortfolioGridSection";
import { portfolioData } from "../../shared/data/portfolio";

export default function WorkPage() {
  return (
    <Layout>
      <HeroSection
        title="Our Work"
        alignment="center"
        spH1ClassName="max-w-2xl"
      />
      <PortfolioGridSection
        projects={portfolioData}
        title="Featured Projects"
      />
      {/* Add filtering/search */}
      {/* Add pagination or load more */}
    </Layout>
  );
}
