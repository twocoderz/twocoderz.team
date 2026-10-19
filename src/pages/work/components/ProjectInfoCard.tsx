import type { ProjectDetailMeta } from "../../../shared/data/projectDetails";

export interface ProjectInfoCardProps {
  about: string;
  meta: ProjectDetailMeta;
}

function InfoItem({
  label,
  value,
  href,
}: {
  label: string;
  value?: string;
  href?: string;
}) {
  if (!value) return null;
  return (
    <div>
      <h5 className="mb-2 text-lg font-bold text-black-90">{label}</h5>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-normal text-black-80 underline underline-offset-4"
        >
          {value}
        </a>
      ) : (
        <p className="text-xl font-normal text-black-80">{value}</p>
      )}
    </div>
  );
}

export default function ProjectInfoCard({ about, meta }: ProjectInfoCardProps) {
  return (
    <div className="mt-12 flex flex-col items-start justify-between gap-12 rounded-lg bg-black-5 p-8 lg:flex-row lg:p-12">
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl font-bold text-black-80 lg:text-6xl">About</h3>
        <p className="max-w-xl text-lg font-normal text-black-80 lg:text-xl">
          {about}
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:w-auto">
        {(meta.exitLabel || meta.exitValue) && (
          <div>
            <span className="mb-2 text-lg font-bold text-black-90">
              {meta.exitLabel}
            </span>
            <h4 className="text-4xl font-bold text-black-90">
              {meta.exitValue}
            </h4>
            {meta.exitNote && (
              <p className="mt-2 text-xl font-normal text-black-80">
                {meta.exitNote}
              </p>
            )}
          </div>
        )}

        {(meta.metricLabel || meta.metricValue) && (
          <div>
            <span className="mb-2 text-lg font-bold text-black-90">
              {meta.metricLabel}
            </span>
            <h4 className="text-4xl font-bold text-black-90">
              {meta.metricValue}
            </h4>
            {meta.metricNote && (
              <p className="mt-2 text-xl font-normal text-black-80">
                {meta.metricNote}
              </p>
            )}
          </div>
        )}

        <InfoItem label="Services" value={meta.services?.join(", ")} />
        <InfoItem label="Tech stack" value={meta.techStack} />
        <InfoItem label="Industry" value={meta.industry} />
        {meta.website && (
          <InfoItem
            label="Website"
            value={meta.website}
            href={`https://${meta.website.replace(/^https?:\/\//, "")}`}
          />
        )}
      </div>
    </div>
  );
}
