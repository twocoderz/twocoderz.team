import { ROUTES } from "../../routes";
import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import AccodionList from "../../shared/components/ui/AccordionItem";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import { faqsQuestions } from "./components/faqsQuestions";

export default function FaqsPage() {
  return (
    <Layout>
      <HeroSection
        title="Questions fréquentes"
        subtitle="Des réponses simples sur notre façon de travailler, les délais, les paiements et ce qu’il faut prévoir pour lancer votre projet digital."
        alignment="center"
        className="bg-black text-white"
        spClassName="py-p4"
        spH1ClassName="max-w-5xl"
      />

      <Container>
        <div className="mt-p23">
          {faqsQuestions.map((item) => (
            <section
              key={item.id}
              className="flex flex-col items-start gap-p12 w-full"
            >
              <h2 className="text-4xl text-black-80 font-bold">{item.title}</h2>
              <AccodionList
                items={item.items}
                defaultOpenId={item.defaultOpenId}
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
