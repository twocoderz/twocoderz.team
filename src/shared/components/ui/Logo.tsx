import { twMerge } from "tailwind-merge";
import { ROUTES } from "../../../routes";

export type LogoProps = {
  className?: string;
};

export default function Logo(props: LogoProps) {
  const { className } = props;
  return (
    <a
      href={ROUTES.HOME}
      className={twMerge(
        "flex cursor-pointer items-center gap-p2",
        "text-black-80 hover:text-black-90 transition-all duration-300",
        className,
      )}
    >
      <img src="/images/logo.png" alt="logo image" />
      <span className="text-md font-normal">twocoderz</span>
    </a>
  );
}
