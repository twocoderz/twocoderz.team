import { useEffect, useRef, useState } from "react";
import Container from "../../../shared/components/ui/Container";
import { portfolioData } from "../../../shared/data/portfolio";

// Composant carte individuelle
function ProjectCard({ project }: { project: (typeof portfolioData)[0] }) {
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
      {/* Bloc image - hauteur fixe */}
      <div
        className={`relative w-full rounded-lg overflow-hidden mb-6 transition-all duration-300 ${
          project.tall ? "h-130" : "h-80"
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

      {/* Contenu texte */}
      <div className="space-y-2">
        <h3 className="text-3xl font-bold text-black-70 group-hover:text-black-90 transition-colors duration-500">
          {project.name}
        </h3>

        {/* Description avec animation slide-up depuis le bas */}
        <p
          className={`text-black-80 text-md font-normal max-w-sm transition-all duration-500 ease-out ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          {project.description}
        </p>
      </div>
    </a>
  );
}

export default function Projects() {
  const displayedProjects = portfolioData.slice(0, 8);
  const leftColumnProjects = displayedProjects.filter(
    (_, index) => index % 2 === 0,
  );
  const rightColumnProjects = displayedProjects.filter(
    (_, index) => index % 2 !== 0,
  );

  return (
    <section>
      <Container>
        {/* Mobile: une seule colonne */}
        <div className="space-y-24 md:hidden">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* Desktop: deux colonnes flex sans CSS columns */}
        <div className="hidden md:flex md:items-start md:gap-8 mt-p24">
          <div className="flex-1 space-y-24">
            {leftColumnProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="flex-1 space-y-24">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
