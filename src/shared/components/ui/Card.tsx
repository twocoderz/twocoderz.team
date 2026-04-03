import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}

export function Card({ children, className, href, onClick }: CardProps) {
  const baseStyles = twMerge(
    "rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg",
    className,
  );

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {children}
      </a>
    );
  }

  return (
    <div className={baseStyles} onClick={onClick}>
      {children}
    </div>
  );
}
