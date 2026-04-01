import Container from "../../shared/components/ui/Container";

export default function Services() {
  return (
    <section className="bg-transparent min-h-scree">
      <Container>
        <div className="flex flex-col py-p6 ">
          <h2 className="text-2xl max-w-lg md:text-3xl lg:text-4xl font-bold text-black-80">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
            <p className="text-black-80 text-md lg:text-lg max-w-md">
              Our services cover every stage of your digital project, from
              initial ideas to final delivery. We focus on clarity, performance,
              and long-term scalability.
            </p>
          </div>
          {/* Deux colonnes */}
          <div>
            {/* Colonne brand */}
            <div></div>
            {/* Colonne product */}
            <div></div>
          </div>
        </div>
      </Container>
    </section>
  );
}
