import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import { ancestries } from "@/data/ancestries";
import { archetypes } from "@/data/archetypes";

export const Route = createFileRoute("/habitantes")({
  head: () => ({
    meta: [
      { title: "Povos e Aventureiros — Dragonbane Compendium" },
      { name: "description", content: "Humanos, anões, elfos, halflings, lupinos e marrecos, e as profissões narrativas dos aventureiros." },
      { property: "og:title", content: "Povos e Aventureiros" },
      { property: "og:description", content: "Quem habita as fronteiras de Dragonbane e os heróis que as exploram." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHeader eyebrow="Capítulo III" title="Habitantes das Fronteiras" lead="Povos, culturas e heróis do mundo de Dragonbane." />
      
      <section className="mt-8">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Povos e Ancestralidades</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {ancestries.map((a) => (
            <LoreCard key={a.slug} id={a.slug} title={a.name} tagline={a.tagline} tags={a.tags}>
              <p>{a.description}</p>
              <p className="mt-3 font-display text-xs tracking-widest uppercase text-aged-gold">Arquétipos Comuns</p>
              <ul className="list-disc pl-5 marker:text-aged-gold">
                {a.archetypes.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="mt-3 font-display text-xs tracking-widest uppercase text-aged-gold">Ideias de Interpretação</p>
              <ul className="list-disc pl-5 marker:text-aged-gold">
                {a.roleplay.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </LoreCard>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Vidas de Aventureiro</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-muted-foreground text-lg">
          Profissões como arquétipos narrativos: o que cada tipo de aventureiro representa na ficção e as histórias que costumam atrair.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {archetypes.map((a) => (
            <LoreCard key={a.slug} id={a.slug} title={a.name} tagline={a.tagline} tags={a.tags}>
              <p>{a.description}</p>
              <p className="mt-3 font-display text-xs tracking-widest uppercase text-aged-gold">Histórias que Puxa</p>
              <ul className="list-disc pl-5 marker:text-aged-gold">
                {a.stories.map((x) => <li key={x}>{x}</li>)}
              </ul>
              <p className="mt-3 font-display text-xs tracking-widest uppercase text-aged-gold">Ganchos Pessoais</p>
              <ul className="list-disc pl-5 marker:text-aged-gold">
                {a.hooks.map((x) => <li key={x}>{x}</li>)}
              </ul>
            </LoreCard>
          ))}
        </div>
      </section>
    </Layout>
  );
}
