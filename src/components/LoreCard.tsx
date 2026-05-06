import type { ReactNode } from "react";

export function LoreCard({
  title,
  tagline,
  children,
  tags,
  id,
}: {
  title: string;
  tagline?: string;
  children?: ReactNode;
  tags?: string[];
  id?: string;
}) {
  return (
    <article id={id} className="paper-card rounded-md p-6 transition-transform hover:-translate-y-1 will-change-transform scroll-mt-24">
      <h3 className="heading-display text-2xl">{title}</h3>
      {tagline && <p className="italic text-muted-foreground mt-1">{tagline}</p>}
      {children && <div className="mt-3 text-[0.97rem] leading-relaxed">{children}</div>}
      {tags && tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <span key={t} className="tag-chip">{t}</span>
          ))}
        </div>
      )}
    </article>
  );
}
