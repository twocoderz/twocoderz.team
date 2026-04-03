import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";

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
    title: "Desktop Apps",
    description:
      "Cross-platform desktop experiences with native feel—installers, auto-updates, and deep OS integration when you need power users and offline-first workflows.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
  },
] as const;

const SCROLL_MD_MIN = 768;
const layoutSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 34,
  mass: 0.85,
};
const contentSpring = {
  type: "spring" as const,
  stiffness: 400,
  damping: 35,
  mass: 0.6,
};

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [desktopScroll, setDesktopScroll] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  /** Pendant un scrollTo(smooth) après clic, on n’applique pas syncIndexFromScroll (évite les sauts). */
  const scrollSyncLockedRef = useRef(false);
  const scrollUnlockTimerRef = useRef<ReturnType<typeof setTimeout> | null>(
    null,
  );
  const total = SERVICES.length;

  const clearScrollSyncLock = useCallback(() => {
    scrollSyncLockedRef.current = false;
    if (scrollUnlockTimerRef.current !== null) {
      clearTimeout(scrollUnlockTimerRef.current);
      scrollUnlockTimerRef.current = null;
    }
  }, []);

  const armScrollSyncLock = useCallback(() => {
    scrollSyncLockedRef.current = true;
    if (scrollUnlockTimerRef.current !== null) {
      clearTimeout(scrollUnlockTimerRef.current);
    }
    scrollUnlockTimerRef.current = setTimeout(() => {
      scrollSyncLockedRef.current = false;
      scrollUnlockTimerRef.current = null;
    }, 1300);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${SCROLL_MD_MIN}px)`);
    const apply = () => setDesktopScroll(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const syncIndexFromScroll = useCallback(() => {
    const el = trackRef.current;
    if (!el || !desktopScroll) return;
    if (scrollSyncLockedRef.current) return;

    const start = el.getBoundingClientRect().top + window.scrollY;
    const trackHeight = el.offsetHeight;
    const viewH = window.innerHeight;
    const scrollRange = trackHeight - viewH;
    const y = window.scrollY;

    if (scrollRange <= 0) return;

    let idx: number;
    if (y <= start) {
      idx = 0;
    } else if (y >= start + scrollRange) {
      idx = total - 1;
    } else {
      const progress = (y - start) / scrollRange;
      const clamped = Math.min(1, Math.max(0, progress));
      idx =
        clamped >= 1
          ? total - 1
          : Math.min(total - 1, Math.floor(clamped * total));
    }

    setActiveIndex((prev) => (prev === idx ? prev : idx));
  }, [desktopScroll, total]);

  useEffect(() => {
    if (!desktopScroll) return;

    let frame = 0;
    const onScrollOrResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(syncIndexFromScroll);
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    onScrollOrResize();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      clearScrollSyncLock();
    };
  }, [desktopScroll, syncIndexFromScroll, clearScrollSyncLock]);

  useEffect(() => {
    if (!desktopScroll) return;
    const onScrollEnd = () => clearScrollSyncLock();
    window.addEventListener("scrollend", onScrollEnd);
    return () => {
      window.removeEventListener("scrollend", onScrollEnd);
    };
  }, [desktopScroll, clearScrollSyncLock]);

  const scrollTrackToIndex = (idx: number) => {
    if (!desktopScroll) return;
    const el = trackRef.current;
    if (!el) return;
    const start = el.getBoundingClientRect().top + window.scrollY;
    const scrollRange = el.offsetHeight - window.innerHeight;
    if (scrollRange <= 0) return;
    const t = total <= 1 ? 0 : idx / (total - 1);
    armScrollSyncLock();
    window.scrollTo({ top: start + t * scrollRange, behavior: "smooth" });
  };

  const indexLabel = (n: number) => String(n + 1).padStart(2, "0");

  const carousel = (
    <div className="flex w-full flex-col md:mx-auto md:h-[min(48rem,76svh)] md:w-full md:shrink-0">
      <div
        className="flex min-h-[min(72vh,520px)] w-full flex-row gap-2 overflow-x-auto overflow-y-hidden pb-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory md:h-full md:min-h-0 md:gap-3 md:snap-none [&::-webkit-scrollbar]:hidden"
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
              transition={{ layout: layoutSpring }}
              role="listitem"
              aria-expanded={isActive}
              aria-current={isActive ? "true" : undefined}
              onClick={() => {
                setActiveIndex(index);
                requestAnimationFrame(() => scrollTrackToIndex(index));
              }}
              className={[
                "relative shrink-0 snap-center rounded-r1 text-left overflow-hidden border-0 cursor-pointer",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/25 focus-visible:ring-offset-2",
                "min-h-[min(72vh,520px)] md:min-h-0 md:h-full",
                isActive
                  ? "bg-black w-[min(88vw,420px)] md:flex-5 md:min-w-0 md:w-auto"
                  : "w-p18 sm:w-24 md:flex-1 md:min-w-p22 md:w-auto",
              ].join(" ")}
            >
              {isActive ? (
                <div className="flex h-full flex-col justify-between p-p6 md:p-p8 lg:p-p10 min-h-[inherit]">
                  <p className="text-white font-semibold tabular-nums">
                    <span className="text-2xl md:text-3xl">
                      {indexLabel(index)}
                    </span>
                    <span className="text-sm md:text-r16 font-medium text-white/40">
                      /{String(total).padStart(2, "0")}
                    </span>
                  </p>
                  <div className="flex flex-1 flex-col mt-p12 gap-p4 max-w-sm overflow-y-auto overflow-x-hidden md:mt-p8">
                    <motion.div
                      key={service.title}
                      initial={{
                        opacity: 0,
                        y: 28,
                        filter: "blur(8px)",
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                      }}
                      transition={contentSpring}
                      className="flex flex-col gap-p4"
                    >
                      <h3 className="text-xl md:text-2xl lg:text-4xl font-bold text-white leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-r16 text-white/55 leading-relaxed max-w-prose">
                        {service.description}
                      </p>
                    </motion.div>
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
                  <div className="absolute inset-0 bg-black/45" aria-hidden />
                  <span className="absolute bottom-p4 left-1/2 -translate-x-1/2 text-3xl sm:text-4xl font-bold text-white/35 tabular-nums pointer-events-none">
                    {indexLabel(index)}
                  </span>
                </>
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );

  return (
    <Section clipOverflow={false}>
      <Container>
        <div className="flex flex-col gap-p6">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
            Our services
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
            <div
              className="hidden min-h-0 min-w-0 md:block md:flex-1"
              aria-hidden
            />
            <p className="text-black-80 text-sm lg:text-md max-w-md shrink-0">
              Our services cover every stage of your digital project, from
              initial ideas to final delivery. We focus on clarity, performance,
              and long-term scalability.
            </p>
          </div>
        </div>
      </Container>

      {/* Desktop: scroll runway + sticky plein écran uniquement pour le carrousel */}
      <div
        ref={trackRef}
        className="w-full"
        style={
          desktopScroll
            ? { minHeight: `${SERVICES.length * 100}svh` }
            : undefined
        }
      >
        <div className="md:sticky md:top-p8 md:box-border md:flex md:h-svh md:flex-col md:py-p12">
          <Container className="flex w-full min-h-0 flex-col pb-p6 md:h-full md:flex-1 md:justify-center md:pb-0">
            {carousel}
          </Container>
        </div>
      </div>
    </Section>
  );
}
