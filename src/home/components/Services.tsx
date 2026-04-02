import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../shared/components/ui/Container";
import { ChevronLeftIcon } from "../../shared/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "../../shared/icons/ChevronRightIcon";

const SERVICES = [
  {
    title: "Mobile Development",
    description:
      "Native and cross-platform apps with polished UX, offline-ready flows, and store-ready builds. We ship performant mobile products that scale with your roadmap.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Development",
    description:
      "Fast, accessible sites and web apps using modern stacks. From marketing pages to complex dashboards, we focus on SEO, Core Web Vitals, and maintainable code.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "UX/UI Design",
    description:
      "Research-backed interfaces, design systems, and prototypes that align business goals with user needs. Clear hierarchy, consistent patterns, and delightful details.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "API Development",
    description:
      "RESTful and event-driven APIs with solid contracts, versioning, and observability. Secure authentication, rate limits, and documentation your team can rely on.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "App Design",
    description:
      "End-to-end product design from concept to handoff. User journeys, high-fidelity screens, and component libraries that developers can implement without guesswork.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Desktop Apps",
    description:
      "Cross-platform desktop experiences with native feel—installers, auto-updates, and deep OS integration when you need power users and offline-first workflows.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const ACCENT_DARK = "#1a0b33";
const ACCENT_NAV_MUTED = "#3d2a5c";


export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = SERVICES.length;

  const goPrev = () => {
    setActiveIndex((i) => (i - 1 + total) % total);
  };

  const goNext = () => {
    setActiveIndex((i) => (i + 1) % total);
  };

  const indexLabel = (n: number) => String(n + 1).padStart(2, "0");

  return (
    <section className="bg-[#f5f5f7] py-p12 md:py-p16">
      <Container>
        <div className="flex flex-col gap-p8 md:gap-p10">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight">
              Our services
            </h2>
            <p className="mt-p4 text-black-70 text-sm md:text-r16 leading-relaxed">
              End-to-end delivery across mobile, web, APIs, and design—one team,
              clear communication, and builds you can evolve for years.
            </p>
          </div>

          <div
            className="flex flex-row gap-2 md:gap-3 w-full min-h-[min(72vh,520px)] md:min-h-[440px] md:h-[440px] overflow-x-auto overflow-y-hidden snap-x snap-mandatory md:snap-none pb-1 md:pb-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="list"
            aria-label="Services"
          >
            {SERVICES.map((service, index) => {
              const isActive = index === activeIndex;
              return (
                <motion.button
                  key={service.title}
                  type="button"
                  layout
                  transition={{
                    layout: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
                  }}
                  role="listitem"
                  aria-expanded={isActive}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "relative shrink-0 snap-center rounded-r6 text-left overflow-hidden border-0 cursor-pointer",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2",
                    "min-h-[min(72vh,520px)] md:min-h-0",
                    isActive
                      ? "w-[min(88vw,420px)] md:flex-[3] md:min-w-0 md:w-auto"
                      : "w-[4.5rem] sm:w-24 md:flex-[0.35] md:min-w-[5.5rem] md:w-auto",
                  ].join(" ")}
                  style={
                    isActive
                      ? { backgroundColor: ACCENT_DARK }
                      : undefined
                  }
                >
                  {isActive ? (
                    <div className="flex h-full flex-col justify-between p-p6 md:p-p8 lg:p-p10 min-h-[inherit]">
                      <p className="text-white/90 font-semibold tabular-nums">
                        <span className="text-2xl md:text-3xl">
                          {indexLabel(index)}
                        </span>
                        <span className="text-white/40 text-sm md:text-r16 font-medium">
                          /{String(total).padStart(2, "0")}
                        </span>
                      </p>
                      <div className="mt-p6 flex flex-1 flex-col justify-center gap-p4">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-sm md:text-r16 text-white/55 leading-relaxed max-w-prose">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div
                        className="absolute inset-0 bg-cover bg-center scale-105"
                        style={{
                          backgroundImage: `url(${service.image})`,
                        }}
                      />
                      <div
                        className="absolute inset-0 bg-black/45"
                        aria-hidden
                      />
                      <span className="absolute bottom-p4 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-bold text-white/35 tabular-nums pointer-events-none">
                        {indexLabel(index)}
                      </span>
                    </>
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="flex items-center gap-p3">
            <button
              type="button"
              onClick={goPrev}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
              style={{ backgroundColor: ACCENT_DARK }}
              aria-label="Previous service"
            >
              <ChevronLeftIcon />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-white shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20 focus-visible:ring-offset-2"
              style={{ backgroundColor: ACCENT_NAV_MUTED }}
              aria-label="Next service"
            >
              <ChevronRightIcon />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
