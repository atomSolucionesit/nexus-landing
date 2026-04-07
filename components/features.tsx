"use client";

import { ShoppingCart, BarChart3, MessageSquare, Heart } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Feature {
  title: string;
  description: string;
  icon?: any;
}

interface FeaturesProps {
  title?: string;
  description?: string;
  features?: Feature[];
}

const pillars = [
  {
    icon: ShoppingCart,
    label: "Vendé",
    headline: "Vendé en todos los canales desde una sola pantalla",
    color: "from-blue-500/10 to-cyan-500/10",
    borderHover: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
    items: [
      "POS con escáner de código de barras",
      "Integración con MercadoLibre",
      "Catálogo público compartible",
      "Gestión de mesas para gastronomía",
    ],
  },
  {
    icon: BarChart3,
    label: "Gestioná",
    headline: "Siempre sabés cuánto tenés y cuánto ganás",
    color: "from-violet-500/10 to-purple-500/10",
    borderHover: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500 group-hover:text-white",
    items: [
      "Stock multi-sucursal en tiempo real",
      "Órdenes de compra a proveedores",
      "Caja con apertura, cierre y reportes",
      "Control de gastos por categoría",
    ],
  },
  {
    icon: MessageSquare,
    label: "Conectá",
    headline: "Respondé más rápido y convertí mensajes en ventas",
    color: "from-emerald-500/10 to-teal-500/10",
    borderHover: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white",
    items: [
      "WhatsApp, Instagram y Facebook unificados",
      "Templates y respuestas rápidas",
      "Asignación de conversaciones a agentes",
    ],
  },
  {
    icon: Heart,
    label: "Fidelizá",
    headline: "Tus clientes vuelven solos",
    color: "from-rose-500/10 to-pink-500/10",
    borderHover: "hover:border-rose-500/40",
    iconBg: "bg-rose-500/10 text-rose-400 group-hover:bg-rose-500 group-hover:text-white",
    items: [
      "Club de puntos con niveles automáticos",
      "QR de cliente para identificación en caja",
      "Crédito y cuenta corriente",
      "Historial completo por cliente",
    ],
  },
];

function Features({ title, description, features: customFeatures }: FeaturesProps = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Si se pasan features custom (landings verticales), renderizar versión simple
  if (customFeatures) {
    return (
      <section className="bg-secondary/20 py-20 lg:py-32 relative overflow-hidden" ref={sectionRef}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title ?? "Todo lo que tu negocio necesita"}
            </h2>
            {description && (
              <p className="text-lg text-muted-foreground">{description}</p>
            )}
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {customFeatures.map((feature, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-xl border border-border bg-card/40 backdrop-blur-sm p-8 card-glow transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                  <ShoppingCart className="h-5 w-5" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Versión principal con 4 pilares
  return (
    <section id="features" className="relative py-20 lg:py-32 overflow-hidden bg-secondary/20" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-orb-drift" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl animate-orb-drift delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/70">
            Plataforma completa
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {title ?? "Todo lo que tu negocio necesita"}
          </h2>
          <p className="text-lg text-muted-foreground">
            {description ?? "Cuatro pilares que cubren cada aspecto de tu operación comercial, desde una sola plataforma."}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-7 card-glow transition-all duration-700 ${pillar.borderHover} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Gradient bg on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative z-10">
                  {/* Icono + label */}
                  <div className="mb-5 flex items-center gap-3">
                    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 ${pillar.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {pillar.label}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="mb-5 text-base font-semibold leading-snug text-foreground">
                    {pillar.headline}
                  </h3>

                  {/* Features list */}
                  <ul className="space-y-2.5">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
