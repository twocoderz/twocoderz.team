import Container from "../../../shared/components/ui/Container";
import MyLink from "../../../shared/components/ui/MyLink";
import { clientsData } from "../../../shared/data/clients";
import Projects from "./Projects";
import Section from "../../../shared/components/ui/Section";
import { ROUTES } from "../../../routes";

export default function Clients() {
  return (
    <Section id="works">
      <Container>
        <div className="flex flex-col gap-p6 mb-p8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
            Ils nous font confiance
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
            <MyLink label="Tous les projets" href={ROUTES.WORK} />
            <p className="text-black-80 text-sm lg:text-lg max-w-md">
              Nous aidons les entreprises à construire une présence digitale
              claire, professionnelle et orientée résultats.
            </p>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-p2 md:gap-p4 lg:gap-p8 mt-p16">
            {clientsData.map((logo) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center py-p2 md:py-p4 lg:py-p8"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-4 md:h-6 lg:h-8 group-hover:scale-105 transition-all duration-500 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
        <Projects />
      </Container>
    </Section>
  );
}
