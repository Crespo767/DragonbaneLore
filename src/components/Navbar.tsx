import { Link } from "@tanstack/react-router";
import { site } from "@/data/site";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const handleClickOutside = (event: MouseEvent) => {
      if (open && headerRef.current && !headerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  function toggleDark() {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const isDark = root.classList.contains("dark");
    setDark(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  return (
    <header ref={headerRef} className="sticky top-0 z-40 backdrop-blur-md bg-background/90 border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Left: Logo */}
        <Link to="/" className="flex items-center gap-2 group shrink-0">
          <span className="font-display text-xl font-semibold text-dragon-red group-hover:text-aged-gold transition-colors tracking-widest uppercase">
            ⚔ {site.shortTitle}
          </span>
        </Link>
        
        {/* Right: Nav & Actions */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-5">
            {site.nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-display font-medium tracking-[0.15em] uppercase text-foreground/70 hover:text-dragon-red transition-colors"
                activeProps={{ className: "text-dragon-red font-semibold" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-4 border-l border-border pl-6">
            <button onClick={toggleDark} aria-label="Alternar tema" className="text-foreground/70 hover:text-aged-gold transition-colors">
              {dark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setOpen(!open)} 
              className="md:hidden text-foreground/70 hover:text-aged-gold transition-colors" 
              aria-label="Menu"
              aria-expanded={open}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {open && (
        <nav className="md:hidden border-t border-border bg-background/95 px-6 py-4 flex flex-col gap-4 shadow-lg">
          {site.nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              onClick={() => setOpen(false)}
              className="text-sm font-display font-medium tracking-widest uppercase text-foreground/80 hover:text-dragon-red transition-colors"
              activeProps={{ className: "text-dragon-red font-semibold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
