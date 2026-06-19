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
        "group relative inline-block pb-p1 text-black-70 text-sm font-medium transition-colors duration-300 ease-out hover:text-black-90",
        className,
      )}
    >
      {children}
      <span
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-black-90 transition-transform duration-300 ease-out group-hover:scale-x-100"
        aria-hidden
      />
    </a>
  );
}
