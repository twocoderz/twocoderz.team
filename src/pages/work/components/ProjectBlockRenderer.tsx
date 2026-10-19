import type { ProjectBlock } from "../../../shared/data/projectDetails";

const INLINE_RE = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g;

function InlineText({ text }: { text: string }) {
  const parts = text.split(INLINE_RE);
  return (
    <>
      {parts.map((part, index) => {
        if (!part) return null;

        const bold = /^\*\*([^*]+)\*\*$/.exec(part);
        if (bold) {
          return (
            <strong key={index} className="font-semibold text-black-90">
              {bold[1]}
            </strong>
          );
        }

        const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
        if (link) {
          return (
            <a
              key={index}
              href={link[2]}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4"
            >
              {link[1]}
            </a>
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function MediaGrid({
  columns,
  items,
}: {
  columns: 2 | 3;
  items: { src: string; alt: string }[];
}) {
  const colsClass = columns === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div className={`my-4 grid gap-4 ${colsClass}`}>
      {items.map((item) => (
        <img
          key={item.src}
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="aspect-video w-full rounded-lg bg-black-5 object-cover"
        />
      ))}
    </div>
  );
}

export default function ProjectBlockRenderer({
  blocks,
}: {
  blocks: ProjectBlock[];
}) {
  return (
    <>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={index}
                className="text-xl font-normal leading-relaxed text-black-80"
              >
                <InlineText text={block.text} />
              </p>
            );

          case "list":
            return (
              <ul key={index} className="flex list-disc flex-col gap-4 pl-6">
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-xl font-normal leading-relaxed text-black-80"
                  >
                    <InlineText text={item} />
                  </li>
                ))}
              </ul>
            );

          case "media":
            return (
              <MediaGrid
                key={index}
                columns={block.columns}
                items={block.items}
              />
            );

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-primary pl-5 text-xl italic text-black-80"
              >
                <InlineText text={block.text} />
                {block.author && (
                  <footer className="mt-2 text-base not-italic text-black-60">
                    {block.author}
                  </footer>
                )}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </>
  );
}
