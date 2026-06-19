import Container from "../../../shared/components/ui/Container";
import Section from "../../../shared/components/ui/Section";
import { servicesData } from "../../../shared/data/services";
import { ROUTES } from "../../../routes";

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
        <div className="flex flex-col gap-p16 md:gap-p20">
          <div className="flex flex-col gap-p6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
              Nos services
            </h2>
            <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
              <div
                className="hidden min-h-0 min-w-0 md:block md:flex-1"
                aria-hidden
              />
              <p className="text-black-80 text-sm lg:text-md max-w-md shrink-0">
                De l&apos;idée au lancement, nous vous accompagnons avec des
                solutions claires, utiles et adaptées à votre activité.
              </p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-y-p16 md:grid-cols-2 md:gap-x-p12 lg:grid-cols-3 lg:gap-x-p13 lg:gap-y-p22"
            role="list"
            aria-label="Services"
          >
            {servicesData.map((service) => (
              <a
                href={ROUTES.SERVICES}
                key={service.id}
                className="flex flex-col cursor-pointer group"
                role="listitem"
              >
                <div
                  className={`h-64 w-full ${SERVICE_COLOR_CLASSES[service.id] ?? "bg-primary"}`}
                  aria-hidden
                />
                <h3 className="mt-p6 text-2xl group-hover:underline transition-all duration-500 font-bold leading-tight text-black md:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-p2 max-w-xs text-r14 leading-snug text-black">
                  {service.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
