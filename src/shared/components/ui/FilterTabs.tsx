import { motion } from "framer-motion";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: Parameters<typeof clsx>) {
  return twMerge(clsx(...inputs));
}

interface FilterTabsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
  className?: string;
}

export function FilterTabs({
  categories,
  selected,
  onSelect,
  className,
}: FilterTabsProps) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center justify-center gap-3",
        className,
      )}
    >
      {categories.map((category) => {
        const isSelected = selected === category;
        return (
          <motion.button
            key={category}
            onClick={() => onSelect(category)}
            whileTap={{ scale: 0.97 }}
            className={cn(
              "relative px-p8 py-p4 text-sm font-bold cursor-pointer rounded-full",
              "transition-colors duration-200",
              isSelected
                ? "bg-black-80 text-white"
                : "bg-black-5 text-black-60 hover:text-black-80",
            )}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
