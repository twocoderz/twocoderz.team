import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../../shared/components/ui/Container";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";

type ShapeType = "square" | "circle" | "heart" | "triangle";

const brandServices = [
  {
    name: "Brand Strategy",
    href: "#",
    shape: "heart" as ShapeType,
    color: "#FF1493",
  },
  {
    name: "Startup Branding",
    href: "#",
    shape: "heart" as ShapeType,
    color: "#FF1493",
  },
  {
    name: "Branding",
    href: "#",
    shape: "circle" as ShapeType,
    color: "#3B82F6",
  },
  {
    name: "Web Design",
    href: "#",
    shape: "square" as ShapeType,
    color: "#10B981",
  },
];

const productServices = [
  {
    name: "App Design",
    href: "#",
    shape: "triangle" as ShapeType,
    color: "#EC4899",
  },
  {
    name: "UX Design",
    href: "#",
    shape: "triangle" as ShapeType,
    color: "#10B981",
  },
  {
    name: "Design Systems",
    href: "#",
    shape: "square" as ShapeType,
    color: "#FBBF24",
  },
  {
    name: "Web App Development",
    href: "#",
    shape: "square" as ShapeType,
    color: "#EC4899",
  },
];

function Shape({ type, color }: { type: ShapeType; color: string }) {
  switch (type) {
    case "square":
      return (
        <div
          className="w-4 h-4 rounded-sm mr-p3 shrink-0"
          style={{ backgroundColor: color }}
        />
      );
    case "circle":
      return (
        <div
          className="w-4 h-4 rounded-full mr-p3 shrink-0"
          style={{ backgroundColor: color }}
        />
      );
    case "heart":
      return (
        <svg
          className="w-4 h-4 mr-p3 shrink-0"
          viewBox="0 0 24 24"
          fill={color}
        >
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );
    case "triangle":
      return (
        <svg
          className="w-4 h-4 mr-p3 shrink-0"
          viewBox="0 0 24 24"
          fill={color}
        >
          <polygon points="12,2 22,22 2,22" />
        </svg>
      );
  }
}

interface ServiceRowProps {
  name: string;
  href: string;
  shape: ShapeType;
  color: string;
}

function ServiceRow({ name, href, shape, color }: ServiceRowProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href}
      className="group relative flex items-center justify-between px-p4 py-p4 bg-black-80 rounded-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-p3 flex-1">
        <motion.div
          animate={{
            opacity: isHovered ? 0 : 1,
            pointerEvents: isHovered ? "none" : "auto",
          }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 25,
          }}
        >
          <Shape type={shape} color={color} />
        </motion.div>
        <span className="text-lg font-bold text-white">{name}</span>
      </div>

      <motion.div
        animate={{
          opacity: isHovered ? 1 : 0,
          pointerEvents: isHovered ? "auto" : "none",
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 25,
        }}
        className="absolute right-p4 top-1/2 -translate-y-1/2"
      >
        <Shape type={shape} color={color} />
      </motion.div>

      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-p3">
        <div></div>
      </span>
    </a>
  );
}

export default function Services() {
  return (
    <section className="bg-transparent min-h-screen">
      <Container>
        <div className="flex flex-col py-p6 ">
          <h2 className="text-2xl max-w-lg md:text-3xl lg:text-5xl font-bold text-black-80">
            Our Services
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
            <div></div>
            <p className="text-black-80 text-sm lg:text-md max-w-md">
              Our services cover every stage of your digital project, from
              initial ideas to final delivery. We focus on clarity, performance,
              and long-term scalability.
            </p>
          </div>
          {/* Deux colonnes */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start mt-p12">
            {/* Colonne brand */}
            <div>
              <p className="text-sm uppercase tracking-widest mb-p6 opacity-50">
                Brand
              </p>
              <div className="flex flex-col justify-center items-start gap-p4">
                {brandServices.map((service) => (
                  <ServiceRow key={service.name} {...service} />
                ))}
              </div>
            </div>
            {/* Colonne product */}
            <div>
              <p className="text-sm uppercase tracking-widest mb-p6 opacity-50">
                Product
              </p>
              <div className="flex flex-col justify-center items-start gap-p4 ">
                {productServices.map((service) => (
                  <ServiceRow key={service.name} {...service} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
