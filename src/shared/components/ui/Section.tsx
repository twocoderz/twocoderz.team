import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  /** Désactive le décalage pour ancre (header sticky) — ex. pied de page contenant plusieurs ids internes. */
  noScrollMargin?: boolean;
  /**
   * `overflow-hidden` empêche les débordements horizontaux (défaut).
   * Mettre `false` pour les sections avec `position: sticky` par rapport au scroll de la fenêtre.
   */
  clipOverflow?: boolean;
}

export default function Section(props: SectionProps) {
  const {
    children,
    className,
    id,
    noScrollMargin,
    clipOverflow = true,
  } = props;
  return (
    <section
      id={id}
      className={twMerge(
        "bg-transparent py-p8 sm:py-p12 md:py-p16 lg:py-p20",
        clipOverflow && "overflow-hidden",
        id && !noScrollMargin && "scroll-mt-24 md:scroll-mt-28",
        className,
      )}
    >
      {children}
    </section>
  );
}
