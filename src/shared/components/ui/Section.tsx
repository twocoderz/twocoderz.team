import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  /**
   * `overflow-hidden` empêche les débordements horizontaux (défaut).
   * Mettre `false` pour les sections avec `position: sticky` par rapport au scroll de la fenêtre.
   */
  clipOverflow?: boolean;
}

export default function Section(props: SectionProps) {
  const { children, className, clipOverflow = true } = props;
  return (
    <section
      className={twMerge(
        "bg-transparent py-p8 sm:py-p12 md:py-p16 lg:py-p20",
        clipOverflow && "overflow-hidden",
        className,
      )}
    >
      {children}
    </section>
  );
}
