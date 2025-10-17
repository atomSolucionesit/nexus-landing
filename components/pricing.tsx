import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

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
      "1 usuario",
    ],
    highlighted: false,
  },
  {
    name: "Avanzado",
    price: "$55.300",
    description: "Expande tu negocio al mundo online",
    features: [
      "Todo lo del plan Básico",
      "Tienda online completa",
      "Sincronización automática",
      "Reportes avanzados",
      "Hasta 3 usuarios",
      "Soporte prioritario",
    ],
    highlighted: true,
  },
  {
    name: "Pro",
    price: "Contactar",
    description: "Solución completa para negocios en crecimiento",
    features: [
      "Todo lo del plan Avanzado",
      "Integración con WhatsApp",
      "Integración con Instagram",
      "Múltiples canales de venta",
      "Usuarios ilimitados",
      "Soporte 24/7",
      "Capacitación personalizada",
    ],
    highlighted: false,
  },
]

export function Pricing() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Planes diseñados para tu negocio
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Elige el plan que mejor se adapte a tus necesidades. Todos incluyen actualizaciones gratuitas.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-primary bg-primary/5 shadow-xl ring-2 ring-primary/20"
                  : "border-border bg-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                  Más popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  {plan.price !== "Contactar" && <span className="ml-2 text-muted-foreground">/mes</span>}
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full" variant={plan.highlighted ? "default" : "outline"} size="lg">
                {plan.price === "Contactar" ? "Contactar ventas" : "Comenzar ahora"}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Todos los precios en pesos chilenos. Sin costos ocultos ni tarifas de instalación.
          </p>
        </div>
      </div>
    </section>
  )
}
