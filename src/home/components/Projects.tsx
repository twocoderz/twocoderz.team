import { useEffect, useRef, useState } from "react";
import Container from "../../shared/components/ui/Container";

const projects = [
  {
    name: "Upstream",
    description:
      "Turning a complex carbon platform into a clear, intuitive product",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800",
    ],
    tall: true,
  },
  {
    name: "Rizzle",
    description:
      "Comprehensive redesign propelled the platform to 34M monthly active users",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=800",
    ],
    tall: false,
  },
  {
    name: "Firefox",
    description:
      "Identity system that enhanced brand recognition and user engagement",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800",
    ],
    tall: false,
  },
  {
    name: "Clearbit",
    description:
      "Website redesign contributing to their $150M acquisition by Hubspot",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    ],
    tall: true,
  },
];

// Composant carte individuelle
function ProjectCard({ project }: { project: (typeof projects)[0] }) {
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
        <div className="columns-1 md:columns-2 gap-24">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
