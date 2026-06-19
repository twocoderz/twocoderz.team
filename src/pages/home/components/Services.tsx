import Container from "../../../shared/components/ui/Container";
import Section from "../../../shared/components/ui/Section";
import { servicesData } from "../../../shared/data/services";

const SERVICE_COLOR_CLASSES: Record<string, string> = {
  "design-maquette": "bg-[#bd7bdb]",
  "site-analysis": "bg-[#fb9845]",
  "website-redesign": "bg-[#72c9b7]",
  "web-development": "bg-[#1161b6]",
  "mobile-development": "bg-black",
};

export default function Services() {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div
          className="grid grid-cols-1 gap-y-p16 md:grid-cols-2 md:gap-x-p12 lg:grid-cols-3 lg:gap-x-p13 lg:gap-y-p22"
          role="list"
          aria-label="Services"
        >
          {servicesData.map((service) => (
            <article key={service.id} className="flex flex-col" role="listitem">
              <div
                className={`aspect-square w-full ${SERVICE_COLOR_CLASSES[service.id] ?? "bg-primary"}`}
                aria-hidden
              />
              <h2 className="mt-p6 text-2xl font-bold leading-tight text-black md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-p5 max-w-sm text-r14 leading-snug text-black">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
