import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface GridProps {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

const columnMap = {
  1: "grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
};

const gapMap = {
  sm: "gap-p4",
  md: "gap-p8",
  lg: "gap-p12",
};

export function Grid({
  children,
  columns = 3,
  gap = "md",
  className,
}: GridProps) {
  return (
    <div
      className={twMerge(
        "grid grid-cols-1",
        columnMap[columns],
        gapMap[gap],
        className,
      )}
    >
      {children}
    </div>
  );
}
