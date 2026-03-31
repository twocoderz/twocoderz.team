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
        "flex items-center gap-p4 hover:border-b hover:border-text-primary",
        className,
      )}
    >
      <a
        href={href}
        className="text-md font-normal text-black-60 hover:text-black-90"
      >
        {label}
      </a>
      <ArrowRightIcon className="w-4 h-4 hover:w-8 transition-all duration-500 text-black-60 hover:text-black-90" />
    </div>
  );
}
