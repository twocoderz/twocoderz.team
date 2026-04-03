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
        "group relative inline-block pb-px text-black-80 text-sm transition-colors duration-300 ease-out hover:text-black",
        className,
      )}
    >
      {children}
      <span
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
    </a>
  );
}
