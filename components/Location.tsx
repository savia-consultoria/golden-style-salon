import { MapPin, Clock, Phone, Navigation } from "lucide-react";

const HOURS = [
  { day: "Lunes a Viernes", time: "10:00 — 20:00" },
  { day: "Sábado", time: "9:00 — 19:00" },
  { day: "Domingo", time: "Cerrado" },
];

export default function Location() {
  return (
    <section id="ubicacion" className="section">
      <div className="container-tight">
        <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className="eyebrow">Visítanos</span>
          <h2 className="heading-section mt-5">
            Te esperamos en{" "}
            <span className="italic text-brand-primary">Querétaro</span>.
          </h2>
          <p className="text-lede mt-5">
            Encuéntranos fácilmente y vive una experiencia diseñada para
            consentirte.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-brand-primary/10 bg-white shadow-soft">
          <div className="grid lg:grid-cols-[1fr_1.3fr]">
            <div className="flex flex-col justify-between gap-8 p-8 sm:p-10">
              <div>
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-primary/12 text-brand-primary">
                    <MapPin className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                      Dirección
                    </p>
                    <p className="mt-1 font-display text-lg font-semibold text-brand-ink">
                      Querétaro, México
                    </p>
                    <p className="mt-1 text-sm text-brand-muted">
                      Llámanos para indicaciones precisas y estacionamiento
                      cercano.
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-accent/20 text-brand-accent-dark">
                    <Clock className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                      Horarios
                    </p>
                    <ul className="mt-2 divide-y divide-brand-primary/10">
                      {HOURS.map((h) => (
                        <li
                          key={h.day}
                          className="flex items-center justify-between py-2 text-sm"
                        >
                          <span className="font-medium text-brand-ink">
                            {h.day}
                          </span>
                          <span className="text-brand-muted">{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-7 flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-primary/12 text-brand-primary">
                    <Phone className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-brand-muted">
                      Teléfono
                    </p>
                    <a
                      href="tel:+524423841341"
                      className="mt-1 block font-display text-lg font-semibold text-brand-ink hover:text-brand-primary"
                    >
                      +52 442 384 1341
                    </a>
                  </div>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Golden+Style+Salon+Quer%C3%A9taro"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary self-start"
              >
                <Navigation className="h-4 w-4" strokeWidth={2} />
                Cómo llegar
              </a>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full">
              <iframe
                title="Mapa de Golden Style Salon en Querétaro"
                src="https://www.google.com/maps?q=Golden+Style+Salon+Quer%C3%A9taro&output=embed"
                className="absolute inset-0 h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
