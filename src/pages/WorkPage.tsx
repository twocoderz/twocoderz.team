import Header from "../shared/components/layout/Header";
import Footer from "../home/components/Footer";
import { HeroSection } from "../shared/components/sections/HeroSection";
import { PortfolioGridSection } from "../shared/components/sections/PortfolioGridSection";
import { portfolioData } from "../shared/data/portfolio";

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection
          title="Our Work"
          subtitle="Explore our portfolio of successful projects that delivered real business impact."
          alignment="center"
        />
        <PortfolioGridSection
          projects={portfolioData}
          title="Featured Projects"
        />
        {/* TODO: Add filtering/search */}
        {/* TODO: Add pagination or load more */}
      </main>
      <Footer />
    </>
  );
}
