"use client"

import { Button } from "@/components/ui/button";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Básico",
    price: "$33.300",
    description: "Perfecto para comenzar con ventas físicas",
    features: [
      "POS para ventas físicas",
      "Gestión de inventario básica",
      "Reportes de ventas",
      "Soporte por email",
    ],
    highlighted: false,
  },
  {
    name: "Avanzado",
    price: "$55.300",
    description: "Expande tu negocio al mundo online",
    features: [
      "Todo lo del plan Básico",
      "Sincronización con Tienda Online",
      "Facturación Electrónica",
      "Reportes avanzados",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "Consultar",
    description: "Solución completa para negocios en crecimiento",
    features: [
      "Todo lo del plan Avanzado",
      "Integración con WhatsApp",
      "Integración con Instagram",
      "Múltiples canales de venta",
      "Soporte 24/7",
      "Capacitación personalizada",
    ],
    highlighted: false,
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
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary via-primary/95 to-primary border-2 border-primary/30 shadow-2xl hover:shadow-primary/20 transition-shadow duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent animate-gradient bg-[length:200%_auto]" />
            <div className="relative px-6 py-8 md:px-10 md:py-12 text-center">
              <div className="inline-flex items-center gap-2 mb-4 rounded-full bg-primary-foreground/20 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-primary-foreground border border-primary-foreground/30">
                <Sparkles className="h-4 w-4 animate-pulse" />
                Oferta Especial
              </div>
              <h3 className="mb-3 text-2xl font-bold text-primary-foreground sm:text-3xl md:text-4xl">
                30 Días de Prueba GRATIS
              </h3>
              <p className="text-lg text-primary-foreground/90 sm:text-xl max-w-2xl mx-auto">
                Prueba todos nuestros planes sin costo. Sin tarjeta de crédito requerida. 
                Cancela cuando quieras.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Planes diseñados para tu negocio
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen
            actualizaciones gratuitas y usuario ilimitados.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-xl ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-xl ring-2 ring-primary/20 scale-105"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground shadow-lg">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  {plan.price !== "Consultar" && (
                    <span className="ml-2 text-muted-foreground">/mes</span>
                  )}
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full"
                variant={plan.highlighted ? "default" : "outline"}
                size="lg"
                onClick={() => {
                  if (plan.price === "Consultar") {
                    window.open('https://wa.me/5491126678238?text=Hola,%20me%20interesa%20el%20plan%20Pro%20de%20Nexus.%20Me%20gustaría%20recibir%20más%20información', '_blank')
                  } else {
                    window.open('https://wa.me/5491126678238?text=Hola,%20me%20interesa%20comenzar%20con%20el%20plan%20' + plan.name + '%20de%20Nexus.%20Me%20gustaría%20iniciar%20la%20prueba%20gratis%20de%2030%20días', '_blank')
                  }
                }}
              >
                {plan.price === "Consultar"
                  ? "Contactar ventas"
                  : "Iniciar prueba gratis"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Todos los precios en pesos argentinos. Sin costos ocultos ni tarifas
            de instalación.
          </p>
        </div>
      </div>
    </section>
  );
}
