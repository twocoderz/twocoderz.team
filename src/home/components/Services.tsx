import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";
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
    <a href={href} className="group ">
      <span className="text-lg font-bold text-black-80">{name}</span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <ArrowRightIcon className="w-5 h-5 text-black-80" />
      </span>
    </a>
  );
}

export default function Services() {
  return (
    <section className="bg-transparent min-h-scree">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-p4 mt-p5">
            {/* Colonne brand */}
            <div>
              <p className="text-sm uppercase tracking-widest mb-p1 opacity-50">
                Brand
              </p>
              {brandServices.map((service) => (
                <ServiceRow key={service.name} {...service} />
              ))}
            </div>
            {/* Colonne product */}
            <div>
              <p className="text-sm uppercase tracking-widest mb-p1 opacity-50">
                Product
              </p>
              {productServices.map((service) => (
                <ServiceRow key={service.name} {...service} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
