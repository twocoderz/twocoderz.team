import AccodionList from "../../../shared/components/ui/AccordionItem";
import TestimonialCarouselCard from "../../../shared/components/ui/TestimonialCarouselCard";
import { capabilitiesItems } from "./capabilitiesItems";
import { testimonialsDataforAbout } from "../../../shared/data/testimonials";
import { useState } from "react";

export default function AboutCapabilities() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsDataforAbout.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonialsDataforAbout.length - 1 ? 0 : prev + 1,
    );
  };

  const current = testimonialsDataforAbout[currentIndex];

  return (
    <div className="flex flex-col items-start gap-p20">
      <h2 className="text-4xl tracking-wide font-bold text-black-80">
        Capabilities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="pr-p8">
          <AccodionList
            items={capabilitiesItems}
            defaultOpenId="refresh"
            allowMultiple={false}
          />
        </div>
        <div className="pl-p8 pt-p20">
          <TestimonialCarouselCard
            testimonial={current}
            currentIndex={currentIndex}
            total={testimonialsDataforAbout.length}
            onPrev={handlePrev}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
}
