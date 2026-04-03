import { Card } from "./Card";

export interface PortfolioCardProps {
  name: string;
  description: string;
  image: string;
  href: string;
  metrics?: Array<{ label: string; value: string }>;
}

export function PortfolioCard({
  name,
  description,
  image,
  href,
  metrics,
}: PortfolioCardProps) {
  return (
    <Card href={href} className="group">
      <div className="relative overflow-hidden h-64 md:h-80 bg-black-5">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-p6">
        <h3 className="text-lg font-bold text-black-80 mb-p2">{name}</h3>
        <p className="text-sm text-black-60 mb-p4">{description}</p>
        {metrics && (
          <div className="flex gap-p4 text-xs">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <span className="font-bold text-black-80">{metric.value}</span>
                <span className="text-black-60"> {metric.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
