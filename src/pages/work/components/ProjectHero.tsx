import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "../../../shared/icons/ArrowLeftIcon";

export interface ProjectHeroProps {
  title: string;
  description: string;
  image: string;
}

export default function ProjectHero({
  title,
  description,
  image,
}: ProjectHeroProps) {
  return (
    <div className="flex flex-col items-start gap-12">
      <Link
        to="/work"
        className="group flex items-center gap-3 text-lg text-black-70 hover:text-black-90 transition-colors duration-300"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Tous les projets
      </Link>

      <div className="flex flex-col gap-6">
        <h1 className="text-4xl lg:text-8xl text-black-80 font-medium">
          {title}
        </h1>
        <p className="max-w-2xl text-xl lg:text-2xl font-normal text-black-80">
          {description}
        </p>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full h-80 lg:h-150 rounded-lg object-cover"
      />
    </div>
  );
}
