import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";

export const desktopAppsItems: AccordionItemData[] = [
  {
    id: "desktop-intro",
    title: "Intro",
    content: (
      <div className="space-y-p6">
        <p className="text-black-80 text-lg font-normal">
          For those who want faster tangible results...
        </p>
        <p className="text-black-80 text-lg font-normal">
          We know that startups are always restricted to two things...
        </p>
        <ul className="list-disc pl-p6 text-lg space-y-p2">
          <li>
            <strong>Flexibility.</strong> The project scope and exercises depend
            on needs.
          </li>
          <li>
            <strong>Clarity.</strong> Each stage has a clear expected output.
          </li>
          <li>
            <strong>Collaboration.</strong> You can involve your internal team
            anytime.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "desktop-stage-1",
    title: "Stage 1: Information gathering and requirements",
    content: (
      <p className="text-black-80 text-lg font-normal">
        Before starting the project, we need to understand...
      </p>
    ),
  },
  {
    id: "desktop-stage-2",
    title: "Stage 2: Analysis and planning",
    content: (
      <p className="text-black-80 text-lg font-normal">
        Before starting the project, we need to understand...
      </p>
    ),
  },
  {
    id: "desktop-stage-3",
    title: "Stage 3: Execution and delivery",
    content: (
      <p className="text-black-80 text-lg font-normal">
        Before starting the project, we need to understand...
      </p>
    ),
  },
];
