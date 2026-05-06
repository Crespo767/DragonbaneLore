import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { LoreCard } from "@/components/LoreCard";
import { OrnamentalDivider } from "@/components/OrnamentalDivider";
import { Embers } from "@/components/Embers";
import { site } from "@/data/site";
import { lore } from "@/data/lore";
import heroImg from "@/assets/hero.jpg";
import { Map, Users, Skull } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dragonbane Compendium — Início" },
      { name: "description", content: site.description },
      { property: "og:title", content: "Dragonbane Compendium" },
      { property: "og:description", content: site.tagline },
      { property: "og:image", content: heroImg },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      <section className="relative -mx-4 mb-12 overflow-hidden">
        <div className="relative h-[78vh] min-h-[520px] gold-frame mx-4 rounded-md overflow-hidden">
          <img src={heroImg} alt="Aventureiro encara um dragão sobre ruínas enevoadas" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="async" />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/60 to-charcoal/95" />
          <Embers count={30} />
          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-16">
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="font-display tracking-[0.4em] uppercase text-aged-gold text-xs md:text-sm">
              Compêndio de Lore · Edição de Fã
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl text-parchment mt-3 drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)]">
              Dragonbane
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
              className="mt-6 max-w-2xl text-parchment/90 italic text-lg leading-relaxed">
              {site.hook}
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/mundo" className="px-8 py-3 bg-dragon-red text-parchment font-display tracking-wider uppercase text-sm rounded shadow-lg hover:bg-aged-gold hover:text-charcoal transition-colors">
                Começar a Explorar
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="text-center max-w-3xl mx-auto">
        <p className="font-display tracking-[0.3em] text-xs uppercase text-aged-gold">O que esperar deste mundo</p>
        <h2 className="heading-display text-3xl md:text-4xl mt-2">Florestas, ruínas e ecos primordiais</h2>
        <OrnamentalDivider />
        <div className="space-y-4 text-lg leading-relaxed">
          {lore.intro.map((p, i) => (
            <p key={i} className={i === 0 ? "drop-cap" : ""}>{p}</p>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h3 className="heading-display text-2xl text-center mb-6">Atmosfera em poucos traços</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {lore.expectations.map((e) => (
            <LoreCard key={e.title} title={e.title}>{e.body}</LoreCard>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h3 className="heading-display text-2xl text-center mb-6">Acesso rápido ao compêndio</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {site.quickAccess.map((q) => {
            const Icon = q.icon === "map" ? Map : q.icon === "users" ? Users : Skull;
            return (
              <Link key={q.to} to={q.to}
                className="paper-card rounded-md p-5 group hover:-translate-y-1 transition-transform">
                <div className="font-display text-aged-gold text-xs tracking-[0.2em] uppercase mb-2">
                  <Icon size={24} className="opacity-80" />
                </div>
                <h4 className="heading-display text-xl mt-1 group-hover:text-dragon-red transition-colors">{q.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{q.desc}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}
