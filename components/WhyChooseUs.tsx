import Image from "next/image";
import { Award, HeartHandshake, ShieldCheck, Clock4, Star } from "lucide-react";

const REASONS = [
  {
    icon: Award,
    title: "Altamente valoradas",
    description:
      "4.7★ en Google con más de 136 clientas que recomiendan nuestro trabajo.",
  },
  {
    icon: HeartHandshake,
    title: "Trato cálido y cercano",
    description:
      "Te asesoramos con honestidad para encontrar el look ideal para ti.",
  },
  {
    icon: ShieldCheck,
    title: "Productos premium",
    description:
      "Trabajamos con marcas profesionales que cuidan tu cabello y tu piel.",
  },
  {
    icon: Clock4,
    title: "Puntualidad y rapidez",
    description:
      "Respetamos tu tiempo: agendas claras y servicios en el horario acordado.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="nosotros" className="section bg-brand-cream/60 relative">
      <div className="container-tight">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2.5rem] shadow-card-hover">
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85&auto=format&fit=crop"
                alt="Equipo profesional de Golden Style Salon trabajando"
                fill
                sizes="(max-width: 1024px) 100vw, 460px"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-6 right-2 hidden w-56 rounded-3xl border border-brand-primary/10 bg-white/95 p-4 shadow-soft sm:block sm:-bottom-8 sm:-right-6 lg:-right-10">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-2 font-display text-2xl font-semibold text-brand-ink">
                4.7 / 5
              </p>
              <p className="text-xs text-brand-muted">
                en 136 reseñas de Google
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow">¿Por qué elegirnos?</span>
            <h2 className="heading-section mt-5">
              Más que un salón,{" "}
              <span className="italic text-brand-primary">tu lugar seguro</span>
              .
            </h2>
            <p className="text-lede mt-5 max-w-xl">
              Cada detalle —desde la asesoría inicial hasta el último toque— está
              pensado para que vivas una experiencia de belleza honesta,
              relajante y a la altura de lo que mereces.
            </p>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {REASONS.map((reason) => {
                const Icon = reason.icon;
                return (
                  <li
                    key={reason.title}
                    className="flex gap-4 rounded-2xl border border-brand-primary/10 bg-white/70 p-5 backdrop-blur transition hover:border-brand-primary/20 hover:bg-white"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-primary/10 text-brand-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-brand-ink">
                        {reason.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-muted">
                        {reason.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-10 grid grid-cols-3 gap-4 rounded-3xl border border-brand-primary/10 bg-white/70 p-6 text-center backdrop-blur sm:gap-6">
              <div>
                <p className="font-display text-3xl font-semibold text-brand-primary sm:text-4xl">
                  4.7★
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-muted">
                  Google
                </p>
              </div>
              <div className="border-x border-brand-primary/10">
                <p className="font-display text-3xl font-semibold text-brand-primary sm:text-4xl">
                  136+
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-muted">
                  Reseñas
                </p>
              </div>
              <div>
                <p className="font-display text-3xl font-semibold text-brand-primary sm:text-4xl">
                  100%
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-brand-muted">
                  Dedicación
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
