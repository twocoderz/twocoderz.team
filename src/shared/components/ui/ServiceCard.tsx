import { Card } from "./Card";

export interface ServiceCardProps {
  title: string;
  description: string;
  image?: string;
  details?: string[];
  icon?: React.ReactNode;
}

export function ServiceCard({
  title,
  description,
  image,
  details,
  icon,
}: ServiceCardProps) {
  return (
    <Card className="flex flex-col">
      {image && (
        <div className="h-48 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {icon && <div className="p-p6 text-3xl">{icon}</div>}
      <div className="flex-1 p-p6">
        <h3 className="text-lg font-bold text-black-80 mb-p2">{title}</h3>
        <p className="text-sm text-black-60 mb-p4">{description}</p>
        {details && (
          <ul className="text-xs space-y-p2">
            {details.map((detail) => (
              <li key={detail} className="text-black-70">
                • {detail}
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
