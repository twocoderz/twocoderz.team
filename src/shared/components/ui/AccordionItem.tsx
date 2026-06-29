import { useMemo, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
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
  openId?: string;
  onOpenChange?: (id: string) => void;
  preventCloseOnSameClick?: boolean;
  className?: string;
  itemClassName?: string;
}

export default function AccodionList(props: AccordionListProps) {
  const {
    items,
    defaultOpenId,
    allowMultiple = false,
    openId,
    onOpenChange,
    preventCloseOnSameClick = false,
    className,
    itemClassName,
  } = props;

  const initialOpenIds = useMemo(() => {
    if (!defaultOpenId) return new Set<string>();
    return new Set<string>([defaultOpenId]);
  }, [defaultOpenId]);

  const [openIds, setOpenIds] = useState<Set<string>>(initialOpenIds);

  const isControlledSingle = !allowMultiple && openId !== undefined;
  const activeOpenIds = isControlledSingle
    ? new Set<string>(openId ? [openId] : [])
    : openIds;

  const toggleItem = (id: string) => {
    if (isControlledSingle) {
      const isOpen = openId === id;

      if (isOpen) {
        if (!preventCloseOnSameClick) {
          onOpenChange?.("");
        } else {
          onOpenChange?.(id);
        }
        return;
      }

      onOpenChange?.(id);
      return;
    }

    setOpenIds((prev) => {
      const next = new Set(prev);
      const isOpen = next.has(id);

      if (allowMultiple) {
        if (isOpen) next.delete(id);
        else next.add(id);
        return next;
      }

      if (isOpen) {
        if (preventCloseOnSameClick) {
          return prev;
        }
        return new Set<string>();
      }

      return new Set<string>([id]);
    });
  };

  return (
    <div className={twMerge("space-y-p2 w-full", className)}>
      {items.map((item) => {
        const isOpen = activeOpenIds.has(item.id);
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
                <span className="text-lg md:text-xl font-bold text-black-80">
                  {item.title}
                </span>
                {isOpen ? (
                  <MinusIcon className="h-6 w-6 shrink-0 text-black-80" />
                ) : (
                  <AddPlusIcon className="h-6 w-6 shrink-0 text-black-80" />
                )}
              </span>
            </button>

            <motion.div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              initial={false}
              animate={{
                height: isOpen ? "auto" : 0,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ duration: 0.32, ease: "easeInOut" }}
              className={twMerge(
                "overflow-hidden will-change-[height,opacity]",
                !isOpen && "pointer-events-none",
              )}
            >
              <div className="px-p6 pb-p6 text-lg leading-relaxed text-black-80">
                {item.content}
              </div>
            </motion.div>
          </article>
        );
      })}
    </div>
  );
}
