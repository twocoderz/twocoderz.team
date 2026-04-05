import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../../shared/components/ui/Container";
import MyLink from "../../../shared/components/ui/MyLink";
import MyUser from "../../../shared/components/ui/MyUser";
import { ArrowLeftIcon } from "../../../shared/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../../shared/icons/ArrowRightIcon";
import { Button } from "../../../shared/components/ui/Button";
import Section from "../../../shared/components/ui/Section";
import { testimonialsData } from "../../../shared/data/testimonials";

const transitionEase = [0.22, 1, 0.36, 1] as const;

const testimonialMotionKey = (index: number, name: string) =>
  `${index}-${name}`;

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
        <div className="flex flex-col ">
          <div className="flex items-start justify-between mb-p16">
            <div className="flex flex-col items-start gap-p8 max-w-xs">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
                What our clients say
              </h2>
              <MyLink href="#testimonials" label="Reviews" />
            </div>

            <div className="flex flex-col items-start max-w-2xl px-p4 py-p4">
              <div className="flex items-start justify-between w-full mb-p12">
                {/* Company Logo */}
                <img
                  src={`/images/${current.company}.svg`}
                  alt={current.company}
                  className="h-p12 object-contain"
                />
                <div className="flex items-center gap-p4 ">
                  <button
                    onClick={handlePrev}
                    className="cursor-pointer transition-all duration-500"
                    aria-label="Previous testimonial"
                  >
                    <ArrowLeftIcon className="w-5 h-5 text-black-60" />
                  </button>

                  <p className="text-black-60 text-base">
                    {String(currentIndex + 1).padStart(2, "0")} /{" "}
                    {String(testimonialsData.length).padStart(2, "0")}
                  </p>

                  <button
                    onClick={handleNext}
                    className="cursor-pointer transition-all duration-500"
                    aria-label="Next testimonial"
                  >
                    <ArrowRightIcon className="w-5 h-5 text-black-60" />
                  </button>
                </div>
              </div>
              <div className="flex flex-col">
                {/* Quote */}
                <p className="text-lg font-normal text-black-80 mb-p12 leading-relaxed max-w-lg">
                  "{current.quote}"
                </p>

                <motion.div
                  key={`profile-${testimonialMotionKey(currentIndex, current.name)}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.36,
                    ease: transitionEase,
                    delay: 0.07,
                  }}
                >
                  <MyUser
                    src={current.src}
                    name={current.name}
                    profession={current.profession}
                  />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="text-center mt-p24">
            <Button variant="primary" size="lg">
              <span> Let&apos;s talk</span>
              <ArrowRightIcon className="w-4 h-4 ml-p4" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
