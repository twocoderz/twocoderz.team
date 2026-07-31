import Leader from "./Leader";
import { teamData } from "./team";

export default function AboutLeadership() {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h2 className="text-5xl lg:text-6xl font-medium lg:font-bold text-black-80 mb-p12">
        Direction
      </h2>
      <div className="flex flex-col items-center lg:flex-row gap-p12">
        {teamData.map((team) => (
          <Leader
            src={team.src}
            href={team.href}
            name={team.name}
            profession={team.profession}
          />
        ))}
      </div>
    </div>
  );
}
