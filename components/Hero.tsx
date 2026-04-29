import Image from "next/image";
import { Star, Phone, Calendar, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-16 pt-28 sm:pb-24 sm:pt-32 lg:pb-32 lg:pt-36"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[120%] bg-hero-glow"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-brand-primary/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-72 h-80 w-80 rounded-full bg-brand-accent/25 blur-3xl"
      />

      <div className="container-tight relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="animate-slide-up">
            <div className="eyebrow">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={2} />
              Estética premium en Querétaro
            </div>

            <h1 className="heading-display mt-6">
              Tu mejor versión,{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-brand-primary">
                  cuidada al detalle
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-brand-accent/40"
                />
              </span>
              .
            </h1>

            <p className="text-lede mt-6 max-w-xl">
              En Golden Style Salon transformamos cada visita en un ritual de
              belleza pensado para ti. Cortes, color, manicure, faciales y más,
              con la calidez y técnica que ya enamoró a más de 136 clientas.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3 sm:gap-4">
              <a href="#contacto" className="btn-primary">
                <Calendar className="h-4 w-4" strokeWidth={2} />
                Agendar mi cita
              </a>
              <a href="tel:+524423841341" className="btn-outline">
                <Phone className="h-4 w-4" strokeWidth={2} />
                +52 442 384 1341
              </a>
            </div>

            <div className="mt-10 inline-flex items-center gap-4 rounded-2xl border border-brand-primary/10 bg-white/70 px-5 py-3.5 shadow-soft backdrop-blur">
              <div className="flex -space-x-1.5">
                {[
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=faces&q=80",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&h=80&fit=crop&crop=faces&q=80",
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=faces&q=80",
                ].map((src, i) => (
                  <span
                    key={src}
                    className="relative inline-block h-9 w-9 overflow-hidden rounded-full ring-2 ring-brand-background"
                  >
                    <Image
                      src={src}
                      alt={`Clienta satisfecha ${i + 1}`}
                      fill
                      sizes="36px"
                      className="object-cover"
                    />
                  </span>
                ))}
              </div>
              <div className="flex flex-col leading-tight">
                <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-ink">
                  <span className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </span>
                  4.7 / 5
                </span>
                <span className="text-xs text-brand-muted">
                  136 reseñas verificadas en Google
                </span>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-up-delay">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-card-hover sm:max-w-lg">
              <Image
                src="https://images.unsplash.com/photo-1606251706444-d069cd266189?w=900&q=85&auto=format&fit=crop"
                alt="Peinado elegante de novia con recogido refinado por Golden Style Salon"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand-primary/35 via-transparent to-transparent"
              />
            </div>

            <div className="absolute -bottom-6 -left-2 hidden w-60 rounded-3xl border border-brand-primary/10 bg-white/95 p-4 shadow-soft backdrop-blur sm:block sm:-bottom-8 sm:-left-6 lg:-left-10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-accent/20 text-brand-accent-dark">
                  <Sparkles className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                    Resultado garantizado
                  </p>
                  <p className="font-display text-base font-semibold text-brand-ink">
                    Look impecable
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-8 hidden rounded-3xl border border-brand-primary/10 bg-white/95 p-4 shadow-soft backdrop-blur sm:block sm:-right-6 lg:-right-10">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                  <Star className="h-5 w-5 fill-current" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                    Top rated
                  </p>
                  <p className="font-display text-base font-semibold text-brand-ink">
                    4.7★ Google
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
