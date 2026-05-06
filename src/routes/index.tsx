import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Embers } from "@/components/Embers";
import { site } from "@/data/site";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dragonbane Compendium" },
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
    <main className="h-screen w-screen bg-background p-3 md:p-6 flex flex-col">
      <div className="relative flex-1 gold-frame rounded-md overflow-hidden flex flex-col items-center justify-end">
        <img src={heroImg} alt="Aventureiro encara um dragão sobre ruínas enevoadas" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/60 to-charcoal/95" />
        <Embers count={40} />
        <div className="relative z-10 w-full flex flex-col items-center justify-end text-center px-6 pb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="flex items-center gap-4 mb-2 md:mb-4">
            <span className="hidden sm:block w-12 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-aged-gold/80" />
            <p className="font-display tracking-[0.2em] md:tracking-[0.3em] uppercase text-aged-gold text-[10px] md:text-xs drop-shadow-md font-medium">
              Bem-vindo ao Dragonbane Compendium • Um Projeto de Fã
            </p>
            <span className="hidden sm:block w-12 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-aged-gold/80" />
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
            className="font-display text-6xl md:text-8xl lg:text-9xl text-parchment drop-shadow-[0_4px_18px_rgba(0,0,0,0.8)]">
            Dragonbane
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
            className="mt-6 max-w-2xl text-parchment/90 italic text-lg md:text-xl leading-relaxed">
            {site.hook}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
            className="mt-10 flex flex-wrap justify-center gap-3">
            <Link to="/inicio" className="px-10 py-4 bg-dragon-red text-parchment font-display tracking-widest uppercase text-base rounded shadow-lg hover:bg-aged-gold hover:text-charcoal hover:scale-105 transition-all duration-300">
              Começar a Explorar
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
