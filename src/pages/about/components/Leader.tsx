import { ArrowRightIcon } from "../../../shared/icons/ArrowRightIcon";
import { LinkedinIcon } from "../../../shared/icons/linkedinIcon";

export type LeaderProps = {
  src: string;
  name: string;
  profession: string;
};

export default function Leader(props: LeaderProps) {
  const { src, name, profession } = props;

  return (
    <div className="flex items-center border border-black-10 p-p6 rounded-full gap-p4">
      <div className="p-2 bg-black-5 rounded-full">
        <img
          src={src}
          alt={`${name} image`}
          className="w-12 h-12 rounded-full"
        />
      </div>
      <div className="flex flex-col items-start">
        <h4 className="text-lg font-bold text-black-80">{name}</h4>
        <p className="text-sm font-normal text-black-80">{profession}</p>
      </div>
      <div className="flex items-center gap-p1">
        <LinkedinIcon className="w-4 h-4 text-black-80" />
        <ArrowRightIcon className="w-4 h-4 text-black-60" />
      </div>
    </div>
  );
}
