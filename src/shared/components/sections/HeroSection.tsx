import { twMerge } from "tailwind-merge";
import Container from "../ui/Container";
import Section from "../ui/Section";

export interface HeroSectionProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  spClassName?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref,
  backgroundImage,
  alignment = "center",
  className,
  spClassName,
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
        <div
          className={twMerge(
            `mx-auto max-w-2xl ${alignmentClass}`,
            spClassName,
          )}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-p6">
            {title}
          </h1>
          {subtitle && <p className="text-sm md:text-base mb-p8">{subtitle}</p>}
          {ctaText && ctaHref && (
            <a
              href={ctaHref}
              className="inline-block px-p8 py-p4 text-white rounded-full hover:scale-105 transition-transform"
            >
              {ctaText}
            </a>
          )}
        </div>
      </Container>
    </Section>
  );
}
