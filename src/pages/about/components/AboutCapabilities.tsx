import AccodionList from "../../../shared/components/ui/AccordionItem";
import TestimonialCarouselCard from "../../../shared/components/ui/TestimonialCarouselCard";
import { capabilitiesItems } from "./capabilitiesItems";
import { testimonialsDataforAbout } from "../../../shared/data/testimonials";
import { useState } from "react";
import { motion } from "framer-motion";

const sectionEase = [0.22, 1, 0.36, 1] as const;

export default function AboutCapabilities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonialAnimationSeed, setTestimonialAnimationSeed] = useState(0);
  const syncedItemCount = Math.min(
    capabilitiesItems.length,
    testimonialsDataforAbout.length,
  );
  const syncedCapabilitiesItems = capabilitiesItems.slice(0, syncedItemCount);

  const handleAccordionOpenChange = (id: string) => {
    const nextIndex = syncedCapabilitiesItems.findIndex(
      (item) => item.id === id,
    );

    if (nextIndex !== -1) {
      if (nextIndex === currentIndex) {
        setTestimonialAnimationSeed((prev) => prev + 1);
      } else {
        setCurrentIndex(nextIndex);
      }
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? syncedItemCount - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === syncedItemCount - 1 ? 0 : prev + 1));
  };

  const current = testimonialsDataforAbout[currentIndex];
  const currentAccordionId = syncedCapabilitiesItems[currentIndex]?.id;

  return (
    <motion.div
      className="flex flex-col items-start gap-p20"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: sectionEase }}
    >
      <motion.h2
        className="text-5xl tracking-wide font-bold text-black-80"
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.45, ease: sectionEase }}
      >
        Capacités
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          className="pr-p8"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.04, ease: sectionEase }}
        >
          <AccodionList
            items={syncedCapabilitiesItems}
            defaultOpenId="refresh"
            allowMultiple={false}
            openId={currentAccordionId}
            onOpenChange={handleAccordionOpenChange}
            preventCloseOnSameClick={true}
          />
        </motion.div>
        <motion.div
          className="pl-p8 pt-p20"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, delay: 0.08, ease: sectionEase }}
        >
          <TestimonialCarouselCard
            testimonial={current}
            currentIndex={currentIndex}
            total={syncedItemCount}
            onPrev={handlePrev}
            onNext={handleNext}
            animationSeed={testimonialAnimationSeed}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}
