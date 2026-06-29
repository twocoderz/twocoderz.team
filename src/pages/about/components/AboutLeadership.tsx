import Leader from "./Leader";
import { teamData } from "./team";

export default function AboutLeadership() {
  return (
    <div>
      <h2 className="text-5xl tracking-wide font-bold text-black-80 mb-p10">
        Direction
      </h2>
      <div className="flex items-center gap-p12">
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
