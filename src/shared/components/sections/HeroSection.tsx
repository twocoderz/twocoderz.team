import { twMerge } from "tailwind-merge";
import Container from "../ui/Container";
import Section from "../ui/Section";

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  spClassName?: string;
  spH1ClassName?: string;
}

export function HeroSection({
  title,
  subtitle,
  backgroundImage,
  alignment = "center",
  className,
  spClassName,
  spH1ClassName,
}: HeroSectionProps) {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[alignment];

  return (
    <Section
      id="hero"
      className={twMerge(
        "text-black-80",
        backgroundImage ? "bg-cover bg-center" : "",
        className,
      )}
    >
      <Container>
        <div className={twMerge(`${alignmentClass}`, spClassName)}>
          <h1
            className={twMerge(
              "text-4xl md:text-6xl lg:text-7xl font-bold mb-p6 mx-auto",
              spH1ClassName,
            )}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-md md:text-lg mb-p8 mx-auto max-w-xl">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}
