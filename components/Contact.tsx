"use client";

import { useState, FormEvent } from "react";
import {
  MessageCircle,
  Phone,
  Send,
  CheckCircle2,
  Clock,
  Mail,
} from "lucide-react";

const SERVICES = [
  "Corte y peinado",
  "Color y mechas",
  "Manicure y pedicure",
  "Faciales",
  "Pestañas y cejas",
  "Maquillaje profesional",
  "Otro",
];

const WHATSAPP_URL =
  "https://wa.me/524423841341?text=" +
  encodeURIComponent(
    "Hola Golden Style Salon, me gustaría agendar una cita."
  );

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const params = new URLSearchParams({
      name: String(data.get("name") || ""),
      service: String(data.get("service") || ""),
      message: String(data.get("message") || ""),
    });

    const text = `Hola Golden Style Salon, soy ${params.get(
      "name"
    )}. Me interesa: ${params.get("service")}. ${params.get("message")}`;

    setTimeout(() => {
      window.open(
        `https://wa.me/524423841341?text=${encodeURIComponent(text)}`,
        "_blank"
      );
      setSubmitted(true);
      setSubmitting(false);
      form.reset();
    }, 600);
  };

  return (
    <section id="contacto" className="section relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-cream/40 via-brand-background to-brand-background"
      />

      <div className="container-tight">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <span className="eyebrow">Agenda tu cita</span>
            <h2 className="heading-section mt-5">
              Reserva tu lugar y déjanos hacer{" "}
              <span className="italic text-brand-primary">la magia</span>.
            </h2>
            <p className="text-lede mt-5 max-w-lg">
              Cuéntanos qué te gustaría y te confirmamos disponibilidad. Solemos
              responder en menos de 30 minutos en horario de atención.
            </p>

            <div className="mt-9 space-y-4">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-2xl border border-brand-primary/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#25D366]/15 text-[#25D366]">
                  <MessageCircle className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold text-brand-ink">
                    Escríbenos por WhatsApp
                  </p>
                  <p className="text-sm text-brand-muted">
                    Respuesta inmediata en horario de atención
                  </p>
                </div>
              </a>

              <a
                href="tel:+524423841341"
                className="flex items-center gap-4 rounded-2xl border border-brand-primary/10 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:shadow-card-hover"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-primary/15 text-brand-primary">
                  <Phone className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold text-brand-ink">
                    +52 442 384 1341
                  </p>
                  <p className="text-sm text-brand-muted">
                    Llámanos directamente
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4 rounded-2xl border border-brand-primary/10 bg-white/60 p-5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-accent/20 text-brand-accent-dark">
                  <Clock className="h-6 w-6" strokeWidth={1.75} />
                </span>
                <div className="flex-1">
                  <p className="font-display text-base font-semibold text-brand-ink">
                    Tiempo de respuesta
                  </p>
                  <p className="text-sm text-brand-muted">
                    Confirmamos tu cita en menos de 30 min
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-brand-primary/10 bg-white p-7 shadow-card-hover sm:p-9">
            {submitted ? (
              <div className="flex h-full min-h-[420px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 className="h-8 w-8" strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 font-display text-2xl font-semibold text-brand-ink">
                  ¡Mensaje listo!
                </h3>
                <p className="mt-3 max-w-sm text-brand-muted">
                  Te abrimos WhatsApp con tu solicitud lista para enviar. Te
                  responderemos en breve.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-7"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Nombre" name="name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Tu nombre"
                      className="input-base"
                    />
                  </Field>

                  <Field label="Teléfono" name="phone" required>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="442 123 4567"
                      className="input-base"
                    />
                  </Field>
                </div>

                <Field label="Servicio que te interesa" name="service" required>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="input-base appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 20 20%22 fill=%22%238B5E8C%22><path fill-rule=%22evenodd%22 d=%22M5.23 7.21a.75.75 0 011.06.02L10 11.06l3.71-3.83a.75.75 0 111.08 1.04l-4.25 4.39a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z%22 clip-rule=%22evenodd%22/></svg>')] bg-[length:1.25rem_1.25rem] bg-[right_1rem_center] bg-no-repeat pr-12"
                  >
                    <option value="" disabled>
                      Elige un servicio
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Mensaje (opcional)" name="message">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Cuéntanos día/horario preferido o detalles adicionales"
                    className="input-base resize-none"
                  />
                </Field>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary w-full disabled:opacity-70"
                >
                  {submitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      <Send className="h-4 w-4" strokeWidth={2} />
                      Enviar y abrir WhatsApp
                    </>
                  )}
                </button>

                <p className="flex items-center justify-center gap-1.5 text-center text-xs text-brand-muted">
                  <Mail className="h-3.5 w-3.5" strokeWidth={2} />
                  Tus datos solo se usan para coordinar tu cita.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .input-base {
          width: 100%;
          border-radius: 0.875rem;
          border: 1px solid rgba(139, 94, 140, 0.18);
          background-color: #fff;
          padding: 0.875rem 1rem;
          font-size: 0.95rem;
          color: #2a1f2a;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .input-base::placeholder { color: #b8a8b8; }
        .input-base:focus {
          outline: none;
          border-color: #8b5e8c;
          box-shadow: 0 0 0 3px rgba(139, 94, 140, 0.15);
        }
      `}</style>
    </section>
  );
}

function Field({
  label,
  name,
  required,
  children,
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="mb-2 block text-sm font-medium text-brand-ink">
        {label}
        {required && <span className="ml-1 text-brand-accent-dark">*</span>}
      </span>
      {children}
    </label>
  );
}
