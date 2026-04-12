import { useState } from "react";
import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { PortfolioGridSection } from "../../shared/components/sections/PortfolioGridSection";
import { FilterTabs } from "../../shared/components/ui/FilterTabs";
import { portfolioData } from "../../shared/data/portfolio";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(portfolioData.flatMap((p) => p.services || [])),
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => p.services?.includes(selectedCategory));

  return (
    <Layout>
      <HeroSection
        title="Our Work"
        alignment="center"
        spH1ClassName="max-w-2xl"
      />
      <FilterTabs
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        className="mb-12"
      />
      <PortfolioGridSection
        projects={filteredProjects}
        title="Featured Projects"
      />
    </Layout>
  );
}
