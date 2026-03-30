import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type SectionProps = {
  children: ReactNode;
  className?: string;
};

export default function Section(props: SectionProps) {
  const { children, className } = props;
  return (
    <section
      className={twMerge(
        "py-p8 sm:py-p12 md:py-p16 lg:py-p20 overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}
