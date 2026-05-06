import { OrnamentalDivider } from "./OrnamentalDivider";

export function PageHeader({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) {
  return (
    <header className="text-center max-w-3xl mx-auto pt-10 pb-6">
      {eyebrow && <p className="font-display tracking-[0.3em] text-xs uppercase text-aged-gold mb-2">{eyebrow}</p>}
      <h1 className="heading-display text-4xl md:text-6xl">{title}</h1>
      <OrnamentalDivider />
      {lead && <p className="text-lg text-muted-foreground italic">{lead}</p>}
    </header>
  );
}
