import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container(props: ContainerProps) {
  const { children, className } = props;
  return (
    <div
      className={twMerge("mx-auto max-w-5xl px-4 sm:px-6 lg:px-2", className)}
    >
      {children}
    </div>
  );
}
