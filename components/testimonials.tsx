"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const testimonials = [
  {
    quote:
      "Redujimos errores de stock en un 70% en los primeros 3 meses. Antes conciliábamos a mano entre depósitos, ahora todo es automático.",
    author: "Vicky",
    company: "Dibuy — Importadora",
    tag: "Importadora",
  },
  {
    quote:
      "El Club Amigos fue un antes y un después. Nuestros clientes vuelven más seguido y el control de mesas del bar nos simplificó todo.",
    author: "Equipo",
    company: "Vinoteca Entre Amigos",
    tag: "Vinoteca",
  },
  {
    quote:
      "Antes perdíamos ventas porque el stock de MercadoLibre no coincidía con el físico. Ahora se actualiza solo y los errores bajaron a cero.",
    author: "Equipo",
    company: "El Yunque — Ferretería",
    tag: "Ferretería",
  },
  {
    quote:
      "Pasamos de gestionar pedidos por WhatsApp a tener trazabilidad completa. Hoy sabemos exactamente qué se pidió, qué se entregó y qué se cobró.",
    author: "María González",
    company: "Distribuidora Reservada",
    tag: "Distribuidora",
  },
  {
    quote:
      "Crecimos un 40% en volumen de ventas sin sumar personal administrativo. Nexus absorbió toda la operación extra sin fricciones.",
    author: "Carlos Rodríguez",
    company: "Deportes Elite — Mayorista",
    tag: "Mayorista",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [paused, next]);

  return (
    <section
      id="testimonials"
      className="py-20 bg-secondary/10 relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Historias de crecimiento con Nexus
          </h2>
          <p className="text-xl text-muted-foreground mb-6">
            Conocé cómo otras empresas transformaron su operación con Nexus
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Viewport con overflow hidden */}
          <div className="overflow-hidden">
            {/* Track que se desliza — cada card ocupa 33.333% en desktop, 100% en mobile */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(calc(-${current} * (100% / 3)))` }}
            >
              {/* Duplicamos al final para el loop visual */}
              {[...testimonials, ...testimonials].map((t, i) => (
                <div
                  key={i}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <Card className="border border-border bg-card/60 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 h-full">
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <Quote className="h-8 w-8 text-primary" />
                        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                          {t.tag}
                        </span>
                      </div>
                      <blockquote className="text-muted-foreground mb-6 italic leading-relaxed flex-1">
                        "{t.quote}"
                      </blockquote>
                      <div className="border-t border-border pt-4">
                        <cite className="not-italic">
                          <div className="font-semibold text-foreground">{t.author}</div>
                          <div className="text-sm text-muted-foreground">{t.company}</div>
                        </cite>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === current ? "w-6 h-2 bg-primary" : "w-2 h-2 bg-border hover:bg-primary/40"
                  }`}
                  aria-label={`Ir al testimonio ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-200"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
