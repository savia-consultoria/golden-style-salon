import { Sparkles, Instagram, Phone, MapPin, MessageCircle } from "lucide-react";

const QUICK_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Agendar cita" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-ink text-brand-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-brand-primary/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl"
      />

      <div className="container-tight relative py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-glow">
                <Sparkles className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-lg font-semibold tracking-wide">
                  Golden Style
                </span>
                <span className="text-[0.65rem] font-medium uppercase tracking-[0.22em] text-brand-accent-light">
                  Salon
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-brand-background/70">
              Estética profesional en Querétaro. Cuidamos cada detalle para que
              salgas radiante en cada visita.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/golden_style_salon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de Golden Style Salon"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-brand-background transition hover:border-brand-accent/60 hover:bg-brand-accent/15 hover:text-brand-accent-light"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="https://wa.me/524423841341"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-brand-background transition hover:border-brand-accent/60 hover:bg-brand-accent/15 hover:text-brand-accent-light"
              >
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              </a>
              <a
                href="tel:+524423841341"
                aria-label="Llamar"
                className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-brand-background transition hover:border-brand-accent/60 hover:bg-brand-accent/15 hover:text-brand-accent-light"
              >
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          <div>
            <p className="font-display text-lg font-semibold">Navegación</p>
            <ul className="mt-5 space-y-3">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-brand-background/70 transition hover:text-brand-accent-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-lg font-semibold">Contacto</p>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3 text-sm text-brand-background/75">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-light"
                  strokeWidth={1.75}
                />
                <a
                  href="tel:+524423841341"
                  className="hover:text-brand-accent-light"
                >
                  +52 442 384 1341
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-background/75">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-light"
                  strokeWidth={1.75}
                />
                <span>Querétaro, México</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-brand-background/75">
                <Instagram
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent-light"
                  strokeWidth={1.75}
                />
                <a
                  href="https://www.instagram.com/golden_style_salon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-accent-light"
                >
                  @golden_style_salon
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 border-t border-white/10 pt-8 text-center text-xs text-brand-background/55 sm:flex-row sm:justify-between sm:text-left">
          <p>© 28/4/2026 Golden Style Salon. Todos los derechos reservados.</p>
          <p>
            Sitio diseñado con dedicación · Hecho en{" "}
            <span className="text-brand-accent-light">Querétaro</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
