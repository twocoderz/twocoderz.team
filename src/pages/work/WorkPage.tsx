import { useState } from "react";
import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { WorkGridSection } from "../../shared/components/sections/WorkGridSection";
import { FilterTabs } from "../../shared/components/ui/FilterTabs";
import { portfolioData } from "../../shared/data/portfolio";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web", "Design", "Apps"];

  const filteredProjects =
    selectedCategory === "All"
      ? portfolioData
      : portfolioData.filter((p) => {
          if (selectedCategory === "Web") {
            return p.services?.some(
              (s) =>
                s.toLowerCase().includes("web") ||
                s.toLowerCase().includes("development"),
            );
          }
          if (selectedCategory === "Design") {
            return p.services?.some(
              (s) =>
                s.toLowerCase().includes("design") ||
                s.toLowerCase().includes("ui") ||
                s.toLowerCase().includes("ux") ||
                s.toLowerCase().includes("branding") ||
                s.toLowerCase().includes("identity"),
            );
          }
          if (selectedCategory === "Apps") {
            return p.services?.some((s) => s.toLowerCase().includes("app"));
          }
          return true;
        });

  return (
    <Layout>
      <HeroSection
        title="We elevate products and designs"
        spH1ClassName="max-w-4xl"
      />
      <FilterTabs
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
        className="mb-p10 mt-p8"
      />
      <WorkGridSection
        projects={filteredProjects}
      />
    </Layout>
  );
}
