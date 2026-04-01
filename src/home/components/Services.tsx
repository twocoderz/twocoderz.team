import Container from "../../shared/components/ui/Container";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";

const brandServices = [
  {
    name: "Brand Strategy",
    href: "#",
  },
  {
    name: "Startup Branding",
    href: "#",
  },
  {
    name: "Branding",
    href: "#",
  },
  {
    name: "Web Design",
    href: "#",
  },
];

const productServices = [
  { name: "App Design", href: "#" },
  { name: "UX Design", href: "#" },
  { name: "Design Systems", href: "#" },
  { name: "Web App Development", href: "#" },
];

function ServiceRow({ name, href }: { name: string; href: string }) {
  return (
    <a href={href} className="group flex items-center px-p5 py-p4 bg-primary">
      <span className="text-lg font-bold text-white">{name}</span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ArrowRightIcon className="w-5 h-5 text-white" />
      </span>
    </a>
  );
}

export default function Services() {
  return (
    <section className="bg-transparent min-h-screen">
      <Container>
        <div className="flex flex-col py-p6 ">
          <h2 className="text-2xl max-w-lg md:text-3xl lg:text-5xl font-bold text-black-80">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
            <div></div>
            <p className="text-black-80 text-sm lg:text-md max-w-md">
              Our services cover every stage of your digital project, from
              initial ideas to final delivery. We focus on clarity, performance,
              and long-term scalability.
            </p>
          </div>
          {/* Deux colonnes */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-p12">
            {/* Colonne brand */}
            <div>
              <p className="text-sm uppercase tracking-widest mb-p6 opacity-50">
                Brand
              </p>
              <div className="flex flex-col justify-center items-start gap-p4">
                {brandServices.map((service) => (
                  <ServiceRow key={service.name} {...service} />
                ))}
              </div>
            </div>
            {/* Colonne product */}
            <div>
              <p className="text-sm uppercase tracking-widest mb-p6 opacity-50">
                Product
              </p>
              <div className="flex flex-col justify-center items-start gap-p4 ">
                {productServices.map((service) => (
                  <ServiceRow key={service.name} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
