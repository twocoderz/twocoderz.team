import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export type NavItemProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function NavItem(props: NavItemProps) {
  const { href = "#", children, className } = props;

  return (
    <a
      href={href}
      className={twMerge(
        "text-black-80 text-sm hover:text-black transition-all duration-300",
        className,
      )}
    >
      {children}
    </a>
  );
}
