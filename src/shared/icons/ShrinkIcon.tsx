import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ShrinkIcon(props: IconProps) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5 14H10V19M19 10H14V5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
