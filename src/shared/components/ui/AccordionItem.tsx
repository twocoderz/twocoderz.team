import { useMemo, useState, type ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { MinusIcon } from "../../icons/MinusIcon";
import { AddPlusIcon } from "../../icons/AddPlusIcon";

export type AccordionItemData = {
  id: string;
  title: string;
  content: ReactNode;
};

export interface AccordionListProps {
  items: AccordionItemData[];
  defaultOpenId?: string;
  allowMultiple?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function AccodionList(props: AccordionListProps) {
  const {
    items,
    defaultOpenId,
    allowMultiple = false,
    className,
    itemClassName,
  } = props;

  const initialOpenIds = useMemo(() => {
    if (!defaultOpenId) return new Set<string>();
    return new Set<string>([defaultOpenId]);
  }, [defaultOpenId]);

  const [openIds, setOpenIds] = useState<Set<string>>(initialOpenIds);
  const toggleItem = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(id);

      if (allowMultiple) {
        if (isOpen) next.delete(id);
        else next.add(id);
        return next;
      }
      if (isOpen) return new Set<string>();
      return new Set<string>([id]);
    });
  };

  return (
    <div className={twMerge("space-y-p2 w-full", className)}>
      {items.map((item) => {
        const isOpen = openIds.has(item.id);
        const panelId = "accordion-panel-" + item.id;
        const buttonId = "accordion-button-" + item.id;

        return (
          <article
            key={item.id}
            className={twMerge("rounded-r2 bg-black-5 p-p1", itemClassName)}
          >
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggleItem(item.id)}
              className="w-full cursor-pointer px-p6 py-p5 text-left"
            >
              <span className="flex items-center justify-between gap-p4">
                <span className="text-md md:text-lg font-bold text-black-80">
                  {item.title}
                </span>
                {isOpen ? (
                  <MinusIcon className="h-6 w-6 shrink-0 text-black-80" />
                ) : (
                  <AddPlusIcon className="h-6 w-6 shrink-0 text-black-80" />
                )}
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={twMerge(
                "grid transition-all duration-300 ease-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <div className="px-p6 pb-p6 text-r16 leading-relaxed text-black-70">
                  {item.content}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
