import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { LoreCard } from "@/components/LoreCard";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { lore } from "@/data/lore";
import { site } from "@/data/site";

export const Route = createFileRoute("/inicio")({
  head: () => ({
    meta: [
      { title: `Início — ${site.title}` },
      { name: "description", content: site.description },
    ],
  }),
  component: Inicio,
});

function Inicio() {
  return (
    <Layout>
      <section className="text-center max-w-3xl mx-auto pt-8">
        <p className="font-display tracking-[0.3em] text-xs uppercase text-aged-gold">O que esperar deste mundo</p>
        <h2 className="heading-display text-3xl md:text-4xl mt-2">Florestas, ruínas e ecos primordiais</h2>
        <OrnamentalDivider />
        <div className="space-y-4 text-lg leading-relaxed">
          {lore.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-14 mb-8">
        <h3 className="heading-display text-2xl text-center mb-6">Atmosfera em poucos traços</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {lore.expectations.map((e) => (
            <LoreCard key={e.title} title={e.title}>{e.body}</LoreCard>
          ))}
        </div>
      </section>
    </Layout>
  );
}
