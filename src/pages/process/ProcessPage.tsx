import { ROUTES } from "../../routes";
import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import AccodionList from "../../shared/components/ui/AccordionItem";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import { processSections } from "./components/processSections";

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
        spClassName="py-p4"
      />
      <Container>
        <div className="flex flex-col items-start gap-p24 mt-p23">
          {processSections.map((section) => (
            <section
              key={section.id}
              className="flex flex-col items-start gap-p12 w-full"
            >
              <h2 className="text-4xl text-black-80 font-bold ">
                {section.title}
              </h2>
              <AccodionList
                items={section.items}
                defaultOpenId={section.defaultOpenId}
                allowMultiple={false}
              />
            </section>
          ))}
        </div>
        <div className="text-center mt-p24 mb-p24">
          <a href={ROUTES.CONTACT}>
            <Button variant="primary" size="lg">
              <span> Let&apos;s talk</span>
              <ArrowRightIcon className="w-4 h-4 ml-p4" />
            </Button>
          </a>
        </div>
      </Container>
    </Layout>
  );
}
