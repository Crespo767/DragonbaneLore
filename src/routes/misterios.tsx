import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import { magicLore } from "@/data/magicLore";
import { dangers } from "@/data/dangers";
import { creatures } from "@/data/creatures";

export const Route = createFileRoute("/misterios")({
  head: () => ({
    meta: [
      { title: "Mistérios e Perigos — Dragonbane Compendium" },
      { name: "description", content: "A magia como elemento de mundo, ameaças gerais e um bestiário narrativo." },
      { property: "og:title", content: "Mistérios e Perigos" },
      { property: "og:description", content: "Forças antigas, rumores e bestas que assombram o mundo." },
    ],
  }),
  component: Page,
});

function Page() {
  const [filter, setFilter] = useState("");
  
  const allTags = useMemo(() => Array.from(new Set(creatures.flatMap((c) => c.tags))), []);
  const visible = useMemo(() => filter ? creatures.filter((c) => c.tags.includes(filter)) : creatures, [filter]);

  return (
    <Layout>
      <PageHeader eyebrow="Capítulo IV" title="Mistérios e Perigos" lead="Magia antiga, cultos nas sombras e bestas primordiais." />

      <section className="mt-8">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">A Arte da Magia</h2>
        <div className="paper-card rounded-md p-8 max-w-3xl mx-auto space-y-4 text-lg leading-relaxed mb-10">
          {magicLore.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
          ))}
        </div>
        
        <h3 className="heading-display text-2xl text-center mt-10 mb-6">Tradições Arcanas</h3>
        <div className="grid md:grid-cols-3 gap-5">
          {magicLore.traditions.map((t) => (
            <LoreCard key={t.name} title={t.name}>{t.desc}</LoreCard>
          ))}
        </div>

        <h3 className="heading-display text-2xl text-center mt-10 mb-6">Motivos e Sinais</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {magicLore.motifs.map((m) => (
            <LoreCard key={m.title} title={m.title}>{m.body}</LoreCard>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Cultos, Sombras e Perigos</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-muted-foreground text-lg">
          Ameaças espalhadas pelo mundo, contadas como rumores de taverna ou avisos sussurrados por viajantes.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {dangers.map((d) => (
            <LoreCard key={d.title} title={d.title}>{d.body}</LoreCard>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Bestiário Narrativo</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-muted-foreground text-lg">
          Como o povo comum fala das criaturas do mundo. Sem estatísticas, apenas histórias e lendas.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button onClick={() => setFilter("")}
            className={`tag-chip ${!filter ? "bg-aged-gold/40" : ""}`}>todas</button>
          {allTags.map((t) => (
            <button key={t} onClick={() => setFilter(t)}
              className={`tag-chip ${filter === t ? "bg-aged-gold/40" : ""}`}>{t}</button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {visible.map((c) => (
            <LoreCard key={c.slug} id={c.slug} title={c.name} tagline={c.tagline} tags={c.tags}>
              <p>{c.lore}</p>
              <p className="mt-3 italic text-muted-foreground">“{c.folkTalk}”</p>
              <p className="mt-3 font-display text-xs tracking-widest uppercase text-aged-gold">Sinais de presença</p>
              <ul className="list-disc pl-5 marker:text-aged-gold">{c.signs.map((x) => <li key={x}>{x}</li>)}</ul>
              <p className="mt-3 font-display text-xs tracking-widest uppercase text-dragon-red">Rumores</p>
              <ul className="list-disc pl-5 marker:text-dragon-red italic">{c.rumors.map((x) => <li key={x}>{x}</li>)}</ul>
            </LoreCard>
          ))}
        </div>
      </section>
    </Layout>
  );
}
