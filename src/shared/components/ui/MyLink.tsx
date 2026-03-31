import { twMerge } from "tailwind-merge";
import { ArrowRightIcon } from "../../icons/ArrowRightIcon";

export type MyLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export default function MyLink(props: MyLinkProps) {
  const { href = "#", label, className } = props;
  return (
    <div
      className={twMerge(
        "group flex items-center gap-1 hover:gap-3 transition-all duration-500 hover:border-b hover:border-text-primary",
        className,
      )}
    >
      <a
        href={href}
        className="text-md font-normal text-black-60 hover:text-black-90"
      >
        {label}
      </a>
      <div className="flex items-center justify-center">
        <ArrowRightIcon className="w-4 h-4 text-black-60 group-hover:text-black-90" />
      </div>
    </div>
  );
}
