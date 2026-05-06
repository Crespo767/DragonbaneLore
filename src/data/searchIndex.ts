import { ancestries } from "./ancestries";
import { archetypes } from "./archetypes";
import { places } from "./places";
import { creatures } from "./creatures";
import { glossary } from "./glossary";
import { dangers } from "./dangers";

export type SearchResult = {
  title: string;
  excerpt: string;
  to: string;
  category: string;
  tags: string[];
};

export const searchIndex: SearchResult[] = [
  ...ancestries.map((a) => ({ title: a.name, excerpt: a.tagline + " " + a.description, to: `/povos#${a.slug}`, category: "Povos", tags: a.tags })),
  ...archetypes.map((a) => ({ title: a.name, excerpt: a.tagline + " " + a.description, to: `/arquetipos#${a.slug}`, category: "Aventureiros", tags: a.tags })),
  ...places.map((p) => ({ title: p.name, excerpt: p.shortDesc + " " + p.atmosphere, to: `/lugares#${p.slug}`, category: "Lugares", tags: p.tags })),
  ...creatures.map((c) => ({ title: c.name, excerpt: c.tagline + " " + c.lore, to: `/bestas#${c.slug}`, category: "Bestas", tags: c.tags })),
  ...glossary.map((g) => ({ title: g.term, excerpt: g.def, to: `/glossario`, category: "Glossário", tags: [] })),
  ...dangers.map((d) => ({ title: d.title, excerpt: d.body, to: `/perigos`, category: "Perigos", tags: [] })),
];

export function search(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return searchIndex.filter(
    (r) =>
      r.title.toLowerCase().includes(q) ||
      r.excerpt.toLowerCase().includes(q) ||
      r.tags.some((t) => t.toLowerCase().includes(q))
  );
}
