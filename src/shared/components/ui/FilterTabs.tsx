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
        className
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
              "relative px-5 py-2.5 text-sm font-medium tracking-wider rounded-full",
              "transition-colors duration-200",
              isSelected
                ? "bg-black-80 text-white"
                : "bg-transparent text-black-60 border border-black-30 hover:border-black-60 hover:text-black-80"
            )}
          >
            {category}
          </motion.button>
        );
      })}
    </div>
  );
}
