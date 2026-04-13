import { useEffect, useRef, useState } from "react";
import type { Project } from "../../data/portfolio";

interface ProjectCardProps {
  project: Project;
  variant?: "default" | "services";
}

export function ProjectCard({
  project,
  variant = "default",
}: ProjectCardProps) {
  const isServicesVariant = variant === "services";
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHovered) {
      timerRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % project.slides.length);
      }, 1000);
    } else {
      if (timerRef.current) clearInterval(timerRef.current);
      setCurrent(0);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, project.slides.length]);

  return (
    <a
      href={project.href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group block"
    >
      <div
        className={`relative w-full rounded-sm overflow-hidden mb-6 transition-all duration-300 ${
          isServicesVariant ? "h-50 md:h-50" : project.tall ? "h-130" : "h-80"
        }`}
      >
        {project.slides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt={`${project.name} slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      <div className="space-y-2">
        <h3
          className={
            isServicesVariant
              ? "text-md md:text-lg lg:text-xl font-bold text-black-80 leading-tight"
              : "text-3xl font-bold text-black-70 group-hover:text-black-90 transition-colors duration-500"
          }
        >
          {project.name}
        </h3>

        <p
          className={`text-black-80 font-normal leading-relaxed transition-all duration-500 ease-out ${
            isServicesVariant ? "max-w-xs text-sm" : "max-w-sm text-md"
          } ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          {project.description}
        </p>
      </div>
    </a>
  );
}
