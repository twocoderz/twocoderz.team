import type { ProjectSection as ProjectSectionData } from "../../../shared/data/projectDetails";
import ProjectBlockRenderer from "./ProjectBlockRenderer";

export interface ProjectSectionProps {
  section: ProjectSectionData;
}

export default function ProjectSection({ section }: ProjectSectionProps) {
  return (
    <section
      id={section.id}
      className="flex scroll-mt-28 flex-col gap-4"
    >
      <h3 className="mx-auto w-full max-w-3xl text-4xl font-bold text-black-90 lg:text-6xl">
        {section.title}
      </h3>
      {section.lead && (
        <p className="mx-auto w-full max-w-3xl text-xl font-medium text-black-80">
          {section.lead}
        </p>
      )}
      <div className="flex flex-col gap-4">
        <ProjectBlockRenderer blocks={section.blocks} />
      </div>
    </section>
  );
}
