import {
  Scissors,
  Palette,
  Sparkles,
  HandHeart,
  Flower2,
  Eye,
  ArrowRight,
} from "lucide-react";

const SERVICES = [
  {
    icon: Scissors,
    name: "Corte y peinado",
    description:
      "Cortes a medida y peinados de evento que resaltan tu rostro y tu estilo.",
  },
  {
    icon: Palette,
    name: "Color y mechas",
    description:
      "Tendencias en balayage, baby lights y color fantasía con productos premium.",
  },
  {
    icon: HandHeart,
    name: "Manicure y pedicure",
    description:
      "Spa de manos y pies con esmaltado tradicional, semipermanente o acrílico.",
  },
  {
    icon: Flower2,
    name: "Faciales relajantes",
    description:
      "Limpieza profunda, hidratación y tratamientos que devuelven luz a tu piel.",
  },
  {
    icon: Eye,
    name: "Pestañas y cejas",
    description:
      "Lifting de pestañas, extensiones y diseño de cejas perfectamente armónico.",
  },
  {
    icon: Sparkles,
    name: "Maquillaje profesional",
    description:
      "Maquillaje social, novias y eventos especiales con larga duración.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="section relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-primary/15 to-transparent"
      />
      <div className="container-tight">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="eyebrow">Nuestros servicios</span>
          <h2 className="heading-section mt-5">
            Todo lo que necesitas para sentirte
            <span className="italic text-brand-primary"> radiante</span>.
          </h2>
          <p className="text-lede mt-5">
            Un menú completo de servicios de belleza pensado para acompañarte en
            cada momento importante.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, i) => {
            const Icon = service.icon;
            return (
              <article
                key={service.name}
                className="card-soft group relative flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-primary/12 to-brand-accent/25 text-brand-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-brand-ink">
                  {service.name}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
                  {service.description}
                </p>
                <a
                  href="#contacto"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand-primary transition-all group-hover:gap-2.5"
                  aria-label={`Reservar ${service.name}`}
                >
                  Reservar
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </a>
              </article>
            );
          })}
        </div>

        <p className="mx-auto mt-12 max-w-md text-center text-sm text-brand-muted">
          ¿Buscas un servicio especial?{" "}
          <a
            href="#contacto"
            className="font-medium text-brand-primary underline-offset-4 hover:underline"
          >
            Cuéntanos qué necesitas
          </a>{" "}
          y lo personalizamos para ti.
        </p>
      </div>
    </section>
  );
}
