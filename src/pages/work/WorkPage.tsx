import { useState } from "react";
import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { WorkGridSection } from "../../shared/components/sections/WorkGridSection";
import { FilterTabs } from "../../shared/components/ui/FilterTabs";
import { portfolioData } from "../../shared/data/portfolio";
import Container from "../../shared/components/ui/Container";
import { ROUTES } from "../../routes";
import { Button } from "../../shared/components/ui/Button";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  const categories = ["Tous", "Web", "Design", "Applications"];

  const filteredProjects =
    selectedCategory === "Tous"
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
          if (selectedCategory === "Applications") {
            return p.services?.some((s) => s.toLowerCase().includes("app"));
          }
          return true;
        });

  return (
    <Layout>
      <HeroSection
        title="Des projets pensés pour marquer"
        subtitle="Découvrez une sélection de réalisations et d&apos;expériences digitales."
        spH1ClassName="max-w-4xl"
      />

      <Container>
        <FilterTabs
          categories={categories}
          selected={selectedCategory}
          onSelect={setSelectedCategory}
          className="mt-p8"
        />
        <WorkGridSection projects={filteredProjects} />
      </Container>

      <div className="text-center mt-p24 mb-p24">
        <a href={ROUTES.CONTACT}>
          <Button variant="primary" size="lg">
            <span> Obtenir un devis</span>
            <ArrowRightIcon className="w-4 h-4 ml-p4" />
          </Button>
        </a>
      </div>
    </Layout>
  );
}
