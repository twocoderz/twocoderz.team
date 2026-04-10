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
        title="Frequently asked questions"
        subtitle="At Twocoderz, we believe in empowering you with straightforward, transparent information about our team, our approach, and what it takes to bring your project to life. Here, we answer your most pressing questions directly and with purpose, so you can make an informed, confident choice in partnering with us."
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
              <span> Let&apos;s talk</span>
              <ArrowRightIcon className="w-4 h-4 ml-p4" />
            </Button>
          </a>
        </div>
      </Container>
    </Layout>
  );
}
