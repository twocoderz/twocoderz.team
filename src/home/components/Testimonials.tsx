import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../shared/components/ui/Container";
import MyLink from "../../shared/components/ui/MyLink";
import MyUser from "../../shared/components/ui/MyUser";
import { ArrowLeftIcon } from "../../shared/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import { Button } from "../../shared/components/ui/Button";
import Section from "../../shared/components/ui/Section";

const testimonials = [
  {
    name: "Brian Beaver",
    profession: "VP of Design at Turo",
    company: "apple",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=BrianBeaver",
    quote:
      "The team's exceptional design thinking and execution transformed our vision into reality. Couldn't be happier with the results.",
  },
  {
    name: "Malini Leveque",
    profession: "Vice President, Product Design and Research at Citrix",
    company: "adobe",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=MaliniLeveque",
    quote:
      "Outstanding collaboration and attention to detail. They truly understand what makes great design work across all platforms.",
  },
  {
    name: "Dan Brown",
    profession: "Senior Marketing Manager at Mozilla",
    company: "mozilla",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=DanBrown",
    quote:
      "Their approach to problem-solving is refreshing. We've seen tangible improvements in user engagement and satisfaction.",
  },
  {
    name: "Chris Chen",
    profession: "Head of ColorOS Design Department at Oppo",
    company: "oppo",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChrisChen",
    quote:
      "Impressed with their technical expertise and creative solutions. A pleasure to work with from start to finish.",
  },
  {
    name: "Chris Bank",
    profession: "VP of Design at Turo",
    company: "meta",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=ChrisBank",
    quote:
      "They delivered beyond our expectations. The team's passion for excellence is evident in every detail of their work.",
  },
  {
    name: "Andrew Mason",
    profession: "CEO at Descript",
    company: "spotify",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=AndrewMason",
    quote:
      "Working with them elevated our entire product. Their insights and execution quality are second to none.",
  },
  {
    name: "Mark Opland",
    profession: "Product Design Director at Xero",
    company: "xerox",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=MarkOpland",
    quote:
      "The best investment we made this year. Their strategic thinking paired with design excellence is a winning combination.",
  },
  {
    name: "Khoi Vinh",
    profession: "Senior Director of Product Design at Adobe",
    company: "adobe",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=KhoiVinh",
    quote:
      "Exceptional talent and professionalism. They brought our most ambitious ideas to life with remarkable skill.",
  },
  {
    name: "Edu Carneiro",
    profession: "Head of Web Marketing, Brand & SEO at Redis",
    company: "stripe",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=EduCarneiro",
    quote:
      "From concept to launch, everything was handled with care and precision. Highly recommend their services.",
  },
  {
    name: "Kevin Sproles",
    profession: "CEO at Volusion",
    company: "netflix",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=KevinSproles",
    quote:
      "Thankful for the team for helping us take the Volusion brand to the next level. Couldn't have done it without them.",
  },
  {
    name: "Sarah Johnson",
    profession: "Design Director at Snapchat",
    company: "snapchat",
    src: "https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJohnson",
    quote:
      "Their innovative approach and deep understanding of design principles made our project a huge success.",
  },
];

const transitionEase = [0.22, 1, 0.36, 1] as const;

const testimonialMotionKey = (index: number, name: string) =>
  `${index}-${name}`;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const current = testimonials[currentIndex];

  return (
    <Section>
      <Container>
        <div className="flex flex-col ">
          <div className="flex items-start justify-between mb-p16">
            <div className="flex flex-col items-start gap-p8 max-w-xs">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
                What our clients say
              </h2>
              <MyLink href="#" label="Reviews" />
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
                    {String(testimonials.length).padStart(2, "0")}
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
