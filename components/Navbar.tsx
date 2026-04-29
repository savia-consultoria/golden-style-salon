"use client";

import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "border-b border-brand-primary/10 bg-brand-background/85 backdrop-blur-md shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container-tight flex h-16 items-center justify-between sm:h-20">
        <a
          href="#top"
          className="group flex items-center gap-2.5"
          aria-label="Golden Style Salon — Inicio"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-glow transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold tracking-wide text-brand-ink sm:text-lg">
              Golden Style
            </span>
            <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand-primary">
              Salon
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-9 lg:flex"
          aria-label="Navegación principal"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-brand-ink/75 transition-colors hover:text-brand-primary after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand-primary after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contacto" className="btn-primary hidden sm:inline-flex">
            Agendar cita
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid h-11 w-11 place-items-center rounded-full border border-brand-primary/15 bg-white/70 text-brand-primary backdrop-blur transition hover:bg-white lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
          >
            <Menu className="h-5 w-5" strokeWidth={1.75} />
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-brand-ink/40 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="absolute right-0 top-0 h-full w-full max-w-sm animate-fade-in bg-brand-background p-6 shadow-card-hover"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-brand-ink">
                Menú
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid h-11 w-11 place-items-center rounded-full border border-brand-primary/15 bg-white text-brand-primary"
                aria-label="Cerrar menú"
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </button>
            </div>
            <nav
              className="mt-10 flex flex-col gap-1"
              aria-label="Navegación móvil"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-4 font-display text-2xl font-medium text-brand-ink transition hover:bg-white hover:text-brand-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#contacto"
              onClick={() => setOpen(false)}
              className="btn-primary mt-8 w-full"
            >
              Agendar cita
            </a>
            <p className="mt-6 text-center text-xs text-brand-muted">
              +52 442 384 1341 · Querétaro, México
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
