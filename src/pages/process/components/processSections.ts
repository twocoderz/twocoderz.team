import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";
import { mobileDevelopmentItems } from "./mobileDevelopmentItems";
import { uxUiDesignItems } from "./uxUiDesignItems";
import { webDevelopmentItems } from "./webDevelopmentItems";

export type ProcessSectionData = {
  id: string;
  title: string;
  defaultOpenId: string;
  items: AccordionItemData[];
};

export const processSections: ProcessSectionData[] = [
  {
    id: "web",
    title: "Processus site web",
    defaultOpenId: "web-intro",
    items: webDevelopmentItems,
  },
  {
    id: "mobile",
    title: "Processus application mobile",
    defaultOpenId: "mobile-intro",
    items: mobileDevelopmentItems,
  },
  {
    id: "uxui",
    title: "Processus design et maquette",
    defaultOpenId: "uxui-intro",
    items: uxUiDesignItems,
  },
];
