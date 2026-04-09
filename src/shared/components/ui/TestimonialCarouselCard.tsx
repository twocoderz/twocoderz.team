import { motion } from "framer-motion";
import type { Testimonial } from "../../data/testimonials";
import { ArrowLeftIcon } from "../../icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";
import MyUser from "./MyUser";

const transitionEase = [0.22, 1, 0.36, 1] as const;

const testimonialMotionKey = (index: number, name: string) =>
  `${index}-${name}`;

type TestimonialCarouselCardProps = {
  testimonial: Testimonial;
  currentIndex: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
};

export default function TestimonialCarouselCard(
  props: TestimonialCarouselCardProps,
) {
  const { testimonial, currentIndex, total, onPrev, onNext } = props;

  return (
    <div className="flex flex-col items-start max-w-2xl px-p4 py-p4">
      <div className="flex items-start justify-between w-full mb-p12">
        {/* Company Logo */}
        <img
          src={`/images/${testimonial.company}.svg`}
          alt={testimonial.company}
          className="h-p12 object-contain"
        />
        <div className="flex items-center gap-p4 ">
          <button
            onClick={onPrev}
            className="cursor-pointer transition-all duration-500"
            aria-label="Previous testimonial"
          >
            <ArrowLeftIcon className="w-5 h-5 text-black-60" />
          </button>

          <p className="text-black-60 text-base">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </p>

          <button
            onClick={onNext}
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
          "{testimonial.quote}"
        </p>

        <motion.div
          key={`profile-${testimonialMotionKey(currentIndex, testimonial.name)}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.36,
            ease: transitionEase,
            delay: 0.07,
          }}
        >
          <MyUser
            src={testimonial.src}
            name={testimonial.name}
            profession={testimonial.profession}
          />
        </motion.div>
      </div>
    </div>
  );
}
