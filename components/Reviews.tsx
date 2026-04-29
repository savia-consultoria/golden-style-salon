import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "María Fernanda L.",
    role: "Clienta frecuente",
    text: "El mejor salón al que he ido en Querétaro. Me encanta cómo cuidan cada detalle y siempre salgo encantada con mi color. ¡Mil gracias chicas!",
    rating: 5,
    initials: "MF",
  },
  {
    name: "Daniela R.",
    role: "Reseña verificada",
    text: "Súper profesionales y muy amables. Me hicieron mi maquillaje y peinado para una boda y me llovieron los cumplidos. 100% recomendado.",
    rating: 5,
    initials: "DR",
  },
  {
    name: "Andrea G.",
    role: "Clienta nueva",
    text: "Llegué con el cabello dañado y salí con un brillo y un corte espectaculares. Me asesoraron con honestidad. Sin duda regreso.",
    rating: 5,
    initials: "AG",
  },
];

function GoogleBadge() {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 text-xs font-medium text-brand-ink shadow-soft"
      aria-label="Reseña de Google"
    >
      <svg
        className="h-3.5 w-3.5"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.99 10.99 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      Google
    </span>
  );
}

export default function Reviews() {
  return (
    <section id="resenas" className="section">
      <div className="container-tight">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="eyebrow">Lo que dicen nuestras clientas</span>
          <h2 className="heading-section mt-5">
            Historias reales,{" "}
            <span className="italic text-brand-primary">resultados reales</span>
            .
          </h2>
          <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-brand-primary/10 bg-white/80 px-5 py-2 shadow-soft">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </span>
            <span className="text-sm font-medium text-brand-ink">
              4.7 / 5 · 136 reseñas
            </span>
            <GoogleBadge />
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 lg:gap-6">
          {REVIEWS.map((review) => (
            <article
              key={review.name}
              className="relative flex flex-col rounded-3xl border border-brand-primary/10 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <Quote
                className="h-9 w-9 text-brand-accent/60"
                strokeWidth={1.5}
                aria-hidden="true"
              />

              <div className="mt-4 flex items-center gap-1 text-amber-400">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mt-4 text-[0.95rem] leading-relaxed text-brand-ink/80">
                "{review.text}"
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-brand-primary/10 pt-5">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-primary/15 to-brand-accent/30 font-display text-sm font-semibold text-brand-primary">
                  {review.initials}
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold text-brand-ink">
                    {review.name}
                  </p>
                  <p className="text-xs text-brand-muted">{review.role}</p>
                </div>
                <GoogleBadge />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="https://www.google.com/maps/search/?api=1&query=Golden+Style+Salon+Quer%C3%A9taro"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Ver todas las reseñas en Google
          </a>
          <a href="#contacto" className="btn-primary">
            Vivir la experiencia
          </a>
        </div>
      </div>
    </section>
  );
}
