import AccodionList from "../../../shared/components/ui/AccordionItem";
import { capabilitiesItems } from "./capabilitiesItems";

export default function AboutCapabilities() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col items-start">
        <AccodionList
          items={capabilitiesItems}
          defaultOpenId="refresh"
          allowMultiple={false}
        />
      </div>
    </div>
  );
}
