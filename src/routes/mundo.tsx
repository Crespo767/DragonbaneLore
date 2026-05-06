import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { LoreCard } from "@/components/LoreCard";
import { places } from "@/data/places";
import { lore } from "@/data/lore";

export const Route = createFileRoute("/mundo")({
  head: () => ({
    meta: [
      { title: "O Mundo e a História — Dragonbane Compendium" },
      { name: "description", content: "Mitos primordiais, a linha do tempo, ruínas e fronteiras esquecidas do mundo de Dragonbane." },
      { property: "og:title", content: "O Mundo e a História" },
      { property: "og:description", content: "Visão cartográfica, histórica e atmosférica do cenário." },
    ],
  }),
  component: Page,
});

function Page() {
  const regions = places.filter((p) => p.conceptual);
  const physicalPlaces = places.filter((p) => !p.conceptual);

  return (
    <Layout>
      <PageHeader eyebrow="Capítulo II" title="O Mundo e a História" lead="Aberto, antigo, cheio de mistérios." />

      <section className="mt-8">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Nos Tempos Antigos</h2>
        <div className="paper-card rounded-md p-8 md:p-12 max-w-3xl mx-auto space-y-5 text-lg leading-relaxed">
          <p className="drop-cap">
            O mundo era governado por dragões e demônios. Serpentes dracônicas e criaturas demoníacas eram os príncipes e princesas dos tempos antigos, forças primordiais através das quais o céu, as montanhas e os oceanos ardentes de magma foram formados.
          </p>
          <p>
            Eles eram princípios opostos que tornavam o mundo completo. Lei e ordem contra caos e loucura; o estável e fixo contra o selvagem e eternamente fluido. Os registros mais antigos falam de um grandioso Império Dracônico, onde a paz era mantida por cavaleiros montados em dragões, e também de um Domínio Demoníaco governado por príncipes que envolviam o mundo em fúria.
          </p>
          <p>
            A eterna hostilidade entre dragões e demônios trouxe morte e ruína sobre suas próprias civilizações, mas criou as condições perfeitas para que as outras ancestralidades — humanos, anões, elfos, halflings, lupinos e marrecos — pudessem florescer e herdar um mundo fragmentado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {lore.themes.map((t) => (
            <LoreCard key={t.title} title={t.title}>{t.body}</LoreCard>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Linha do Tempo</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-muted-foreground text-lg">
          O que se sabe sobre o passado baseia-se na Crônica Imperial dos Tempos Antigos de Godmundag. O que importa é que impérios caíram e o mundo agora é um lugar quebrado, esperando quem o remonte.
        </p>
        <div className="max-w-4xl mx-auto space-y-8">
          {lore.timeline.map((t, index) => (
            <div key={t.era} className="flex gap-4 md:gap-8 relative">
              {/* Linha vertical */}
              {index !== lore.timeline.length - 1 && (
                <div className="absolute left-4 md:left-[5.5rem] top-12 bottom-[-2rem] w-px bg-border" />
              )}
              {/* Ponto na linha temporal */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-background border-2 border-aged-gold flex-shrink-0 mt-1 md:w-auto md:h-auto md:bg-transparent md:border-0 md:mt-0">
                <span className="hidden md:inline-block font-display text-aged-gold uppercase tracking-widest text-sm w-20 text-right mt-1">Era {index + 1}</span>
              </div>
              <div className="paper-card rounded-md p-6 flex-1">
                <h3 className="heading-display text-xl mb-2 text-dragon-red">{t.era}</h3>
                <p className="text-foreground/90 leading-relaxed">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Regiões e Atmosfera</h2>
        <div className="paper-card rounded-md p-8 max-w-3xl mx-auto space-y-4 text-lg leading-relaxed mb-10">
          <p className="drop-cap">
            Este é um mundo de florestas enevoadas, ravinas profundas, penhascos íngremes e cavernas esquecidas.
            Bestas antigas dormem em altares; tesouros se perdem em fortalezas caídas; cultos sombrios cochicham nas
            margens das cidades.
          </p>
          <p>
            O <strong>Vale Enevoado</strong> aparece com frequência como ponto de partida para quem começa: um lugar
            de fronteira, vilarejos modestos e estradas que somem na neblina. Para além dele, o mapa fica menos
            confiável e a imaginação, mais necessária.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {regions.map((r) => (
            <LoreCard key={r.slug} title={r.name} tagline={r.shortDesc} tags={r.tags}>
              {r.atmosphere}
            </LoreCard>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="heading-display text-3xl text-center mb-6 text-aged-gold">Lugares e Fronteiras</h2>
        <p className="text-center max-w-2xl mx-auto mb-8 text-muted-foreground text-lg">
          O mundo não é uma página em branco. Pessoas vivem em algum lugar. Coisas estranhas espreitam nos ermos. E ruínas antigas sempre guardam algo esquecido.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {physicalPlaces.map((p) => (
            <LoreCard key={p.slug} id={p.slug} title={p.name} tagline={p.shortDesc} tags={p.tags}>
              <p>{p.atmosphere}</p>
              <p className="mt-3 font-display text-xs tracking-widest uppercase text-aged-gold">Conhecimento e Rumores</p>
              <ul className="list-disc pl-5 marker:text-aged-gold">
                {p.publicKnowledge?.map((x) => <li key={x} className="text-sm">{x}</li>)}
                {p.rumors?.map((x) => <li key={x} className="text-sm italic">{x}</li>)}
              </ul>
            </LoreCard>
          ))}
        </div>
      </section>
    </Layout>
  );
}
