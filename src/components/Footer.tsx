import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { OrnamentalDivider } from "./OrnamentalDivider";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-charcoal/5 dark:bg-charcoal/40">
      <div className="max-w-5xl mx-auto px-4 py-10 text-center">
        <OrnamentalDivider />
        
        <div className="mt-8 space-y-4 text-sm text-muted-foreground/90 max-w-3xl mx-auto">
          <p>
            O <strong>Dragonbane Compendium</strong> é um guia digital não oficial feito por fãs, focado em apresentar a história, os povos e os mistérios do jogo sem fornecer regras ou estatísticas de uso. Todo o universo de <em>Dragonbane / Drakar och Demoner</em> e seus respectivos direitos intelectuais e de imagem pertencem exclusivamente à <strong>Fria Ligan AB / Free League Publishing</strong>. A tradução e publicação oficial no Brasil é de exclusividade da <strong>Tria Editora</strong>.
          </p>
          <p>
            Para usufruir da experiência completa de jogo, recomendamos fortemente apoiar as editoras adquirindo os livros oficiais.
            <br />
            <a href="https://triaeditora.com.br/" target="_blank" rel="noreferrer" className="inline-block mt-2 font-display uppercase tracking-wider text-xs font-semibold text-aged-gold hover:text-dragon-red transition-colors underline underline-offset-4">
              Visite a Loja da Tria Editora
            </a>
          </p>
          <div className="pt-2 text-xs opacity-80">
            <p><strong>Design Original:</strong> Tomas Härenstam | <strong>Escritores:</strong> Andreas Marklund, Krister Sundelin, Mattias Johnsson Haake, Nils Karlén, Kosta Kostulas</p>
            <p><strong>Arte:</strong> Johan Egerkrans, Niklas Brandt | <strong>Design Gráfico:</strong> Niklas Brandt, Christian Granath, Dan Algstrand</p>
            <p><strong>Edição Brasileira (Tria Editora):</strong> Bruno Mares, Rafael Tschope, Calvin Semião</p>
          </div>
        </div>

        <p className="mt-6 text-[0.7rem] text-muted-foreground/70 uppercase tracking-widest font-display">
          © Fria Ligan AB · Free League Publishing · Tria Editora
        </p>
      </div>
    </footer>
  );
}
