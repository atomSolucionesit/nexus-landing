"use client"

import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Avanzado",
    price: "$55.300",
    description: "Para empresas que venden en múltiples canales",
    features: [
      "POS y ventas físicas",
      "Sincronización con Tienda Online",
      "Facturación Electrónica",
      "Reportes avanzados",
      "Soporte prioritario",
    ],
    highlighted: false,
    cta: "Iniciar prueba gratis",
    badge: null,
  },
  {
    name: "Empresas",
    price: "A medida",
    description: "Solución completa para distribuidoras y mayoristas",
    features: [
      "Configuración completa del sistema",
      "Adaptación a tu flujo de trabajo",
      "Capacitación del equipo",
      "Stock multi-depósito y logística",
      "Integraciones WhatsApp, ML y más",
      "Soporte dedicado 24/7",
    ],
    highlighted: true,
    cta: "Solicitar propuesta",
    badge: "Recomendado para distribuidoras",
  },
];

export function Pricing() {
  return (
    <section className="bg-background py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner de prueba gratis */}
        <div className="mx-auto max-w-4xl mb-16">
          <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-sm shadow-xl shadow-primary/10">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/15 to-primary/10 animate-gradient bg-[length:200%_auto]" />
            <div className="absolute inset-0 bg-grid opacity-30" />
            <div className="relative px-6 py-8 md:px-10 md:py-12 text-center">
              <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-primary/10 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-primary border border-primary/20">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Oferta Especial
              </div>
              <h3 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl md:text-4xl">
                30 Días de Prueba GRATIS
              </h3>
              <p className="text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto">
                Probá todos nuestros planes sin costo. Sin tarjeta de crédito requerida.
                Cancelá cuando quieras.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Planes diseñados para tu empresa
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Elige el plan que mejor se adapte al volumen de tu operación. Todos incluyen
            actualizaciones gratuitas y usuarios ilimitados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-xl ring-2 ring-primary/20"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow-lg whitespace-nowrap">
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "A medida" && (
                    <span className="ml-2 text-muted-foreground">/mes</span>
                  )}
                </div>
                {plan.price === "A medida" && (
                  <p className="mt-1 text-xs text-muted-foreground">Implementación inicial + abono mensual</p>
                )}
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
                onClick={() => {
                  if (plan.price === "A medida") {
                    window.open('https://wa.me/543772430213?text=Hola,%20quiero%20solicitar%20una%20propuesta%20para%20mi%20empresa', '_blank')
                  } else {
                    window.open('https://wa.me/543772430213?text=Hola,%20me%20interesa%20el%20plan%20Avanzado%20de%20Nexus', '_blank')
                  }
                }}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
