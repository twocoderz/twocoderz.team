import type { AccordionItemData } from "../../../shared/components/ui/AccordionItem";
import { desktopAppsItems } from "./desktopAppsItems";
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
    title: "Web Development Process",
    defaultOpenId: "web-intro",
    items: webDevelopmentItems,
  },
  {
    id: "mobile",
    title: "Mobile Development Process",
    defaultOpenId: "mobile-intro",
    items: mobileDevelopmentItems,
  },
  {
    id: "uxui",
    title: "UX/UI Design Process",
    defaultOpenId: "uxui-intro",
    items: uxUiDesignItems,
  },
  {
    id: "desktop",
    title: "Desktop Apps Process",
    defaultOpenId: "desktop-intro",
    items: desktopAppsItems,
  },
];
