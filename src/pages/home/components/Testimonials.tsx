import { useState } from "react";
import Container from "../../../shared/components/ui/Container";
import MyLink from "../../../shared/components/ui/MyLink";
import { ArrowRightIcon } from "../../../shared/icons/ArrowRightIcon";
import { Button } from "../../../shared/components/ui/Button";
import Section from "../../../shared/components/ui/Section";
import TestimonialCarouselCard from "../../../shared/components/ui/TestimonialCarouselCard";
import { testimonialsData } from "../../../shared/data/testimonials";
import { ROUTES } from "../../../routes";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsData.length - 1 ? 0 : prev + 1,
    );
  };

  const current = testimonialsData[currentIndex];

  return (
    <Section id="testimonials">
      <Container>
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-start justify-between gap-p16 mb-p16">
            {/* Titre + lien */}
            <div className="flex flex-col items-start gap-p8 w-full md:max-w-xs">
              <h2 className="text-4xl lg:text-4xl font-bold text-black tracking-tight">
                Ce que disent nos clients
              </h2>
              <MyLink href="#testimonials" label="Tous les avis" />
            </div>

            {/* Carousel */}
            <div className="w-full md:w-auto">
              <TestimonialCarouselCard
                testimonial={current}
                currentIndex={currentIndex}
                total={testimonialsData.length}
                onPrev={handlePrev}
                onNext={handleNext}
              />
            </div>
          </div>

          {/* Bouton */}
          <div className="text-center mt-p24">
            <a href={ROUTES.CONTACT}>
              <Button variant="primary" size="lg">
                <span>Obtenir un devis</span>
                <ArrowRightIcon className="w-4 h-4 ml-p4" />
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
