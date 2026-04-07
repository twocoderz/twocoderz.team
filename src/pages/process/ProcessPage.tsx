import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";

export default function ProcessPage() {
  return (
    <Layout>
      <HeroSection
        title="Process"
        subtitle={`For those who want to be involved in every step of the creative process's nitty-gritty details.
        With this Funnel, we research dozens of options on each step until we find
        the perfect one. This approach fits teams who want to make things right
        and are not constrained by time and budget.`}
        alignment="center"
        className="bg-black text-white"
        spClassName="py-p8"
      />
      <Container>
        <div className="mt-p23">
          <h2 className="text-black-80 text-3xl font-bold">
            Web Development Process
          </h2>
        </div>
      </Container>
    </Layout>
  );
}
