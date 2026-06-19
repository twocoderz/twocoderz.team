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
        title="Processus"
        subtitle={`Une méthode simple pour avancer avec clarté : comprendre votre besoin, proposer une direction, construire proprement et livrer une solution prête à être utilisée.`}
        alignment="center"
        className="bg-black text-white"
        spClassName="py-p8"
        spH1ClassName="max-w-2xl"
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
              <span> Parlons de votre projet</span>
              <ArrowRightIcon className="w-4 h-4 ml-p4" />
            </Button>
          </a>
        </div>
      </Container>
    </Layout>
  );
}
