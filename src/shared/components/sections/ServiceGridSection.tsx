import Container from "../ui/Container";
import Section from "../ui/Section";
import { Grid } from "../ui/Grid";
import { ServiceCard } from "../ui/ServiceCard";
import type { Service } from "../../data/services";

export interface ServiceGridProps {
  services: Service[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export function ServiceGridSection({
  services,
  title = "Our Services",
  columns = 3,
}: ServiceGridProps) {
  return (
    <Section id="services">
      <Container>
        {title && (
          <div className="mb-p12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black-80">
              {title}
            </h2>
          </div>
        )}
        <Grid columns={columns}>
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              details={service.details}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}
