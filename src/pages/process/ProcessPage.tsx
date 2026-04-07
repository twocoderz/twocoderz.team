import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";

const processItems = [
  {
    id: "intro",
    title: "Intro",
    content: (
      <div className="space-y-p6">
        <p>For those who want faster tangible results...</p>
        <p>We know that startups are always restricted to two things...</p>
        <ul className="list-disc pl-p6 space-y-p2">
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
    id: "stage-1",
    title: "Stage 1: Information gathering and requirements",
    content: <p>Before starting the project, we need to understand...</p>,
  },
];

// <Container>
//   <section className="mt-p23 pb-p20">
//     <h2 className="mb-p10 text-4xl md:text-6xl font-bold text-black-80">
//       Branding Funnel Process
//     </h2>

//     <AccordionList
//       items={processItems}
//       defaultOpenId="intro"
//       allowMultiple={false}
//     />
//   </section>
// </Container>

export default function ProcessPage() {
  return (
    <Layout>
      <HeroSection
        title="Process"
        subtitle={`For those who want to be involved in every step of the creative process's nitty-gritty details.
        With this Funnel, we research dozens of options on each step until we find
        the perfect one. This approach fits teams who want to make things right
        and are not constrained by time and budget.`}
        alignment="center"
        className="bg-black text-white"
        spClassName="py-p8"
      />
      <Container>
        <div className="mt-p23"></div>
      </Container>
    </Layout>
  );
}
