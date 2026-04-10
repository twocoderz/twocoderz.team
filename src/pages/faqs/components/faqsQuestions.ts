import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";
import { questionsResponses } from "./questionsResponses";

export type FaqsQuestionData = {
  id: string;
  title: string;
  defaultOpenId: string;
  items: AccordionItemData[];
};

export const faqsQuestions: FaqsQuestionData[] = [
  {
    id: "faqs",
    title: "FAQ",
    defaultOpenId: "faqs",
    items: questionsResponses,
  },
];
