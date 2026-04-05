import { twMerge } from "tailwind-merge";
import { CopyIcon } from "../../../shared/icons/CopyIcon";

export type EmailLinkProps = {
  label: string;
  href: string;
  className?: string;
};

export default function EmailLink(props: EmailLinkProps) {
  const { label, href, className } = props;
  return (
    <a
      href={href}
      className={twMerge(
        "cursor-pointer hover:underline flex items-center gap-p2",
        className,
      )}
    >
      <span className="text-2xl font-bold text-black-80">{label}</span>
      <CopyIcon className="text-black-80" />
    </a>
  );
}
