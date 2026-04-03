export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  image?: string;
  projectName?: string;
}

// Export testimonials from existing data if needed, or create new ones here
export const testimonialsData: Testimonial[] = [
  {
    id: "testimonial-1",
    name: "Brian Beaver",
    role: "VP of Design",
    company: "Turo",
    quote:
      "The team's exceptional design thinking and execution transformed our vision into reality. Couldn't be happier with the results.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=BrianBeaver",
    projectName: "Turo",
  },
  {
    id: "testimonial-2",
    name: "Malini Leveque",
    role: "VP Product Design",
    company: "Citrix",
    quote:
      "Outstanding collaboration and attention to detail. They truly understand what makes great design work.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MaliniLeveque",
    projectName: "Citrix",
  },
  {
    id: "testimonial-3",
    name: "Dan Brown",
    role: "Senior Marketing Manager",
    company: "Mozilla",
    quote:
      "Their approach to problem-solving is refreshing. We've seen tangible improvements in user engagement.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=DanBrown",
    projectName: "Mozilla",
  },
];
