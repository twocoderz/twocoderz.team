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
      className="group block py-12"
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
          className={`text-black-80 text-md font-normal transition-all duration-500 ease-out ${
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
  return (
    <section>
      <Container>
        {/* Grille de projets */}
        <div className="columns-1 md:columns-2 gap-y-24 gap-x-8">
          {portfolioData.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
