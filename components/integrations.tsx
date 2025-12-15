"use client";

import { Link2, Zap, CheckCircle2 } from "lucide-react";
import { availableMemory } from "process";
import { useEffect, useRef, useState } from "react";

const integrations = [
  {
    name: "Mercado Pago",
    description: "Procesa pagos online y offline de forma segura y rápida.",
    category: "Pagos",
    color: "from-blue-400/20 to-blue-600/20",
    icon: "💳",
    available: true,
  },
  {
    name: "Mercado Libre",
    description:
      "Gestiona tus publicaciones y ventas directamente desde Nexus.",
    category: "Marketplace",
    color: "from-yellow-400/20 to-orange-500/20",
    icon: "📦",
    available: true,
  },
  {
    name: "WhatsApp Business",
    description: "Vende directamente por WhatsApp y sincroniza conversaciones.",
    category: "Mensajería",
    color: "from-green-500/20 to-emerald-500/20",
    icon: "💬",
    available: true,
  },
  {
    name: "Tienda Nube",
    description:
      "Sincroniza tu inventario y ventas con tu tienda online automáticamente.",
    category: "E-commerce",
    color: "from-blue-500/20 to-cyan-500/20",
    icon: "🛒",
    available: false,
  },
  {
    name: "Instagram",
    description:
      "Conecta tu tienda de Instagram y vende desde las redes sociales recibiendo los mensajes de tus clientes.",
    category: "Redes Sociales",
    color: "from-pink-500/20 to-purple-500/20",
    icon: "📸",
    available: true,
  },
  {
    name: "Facebook",
    description:
      "Integra tu mensajería con Facebook Messenger recibiendo los mensajes de tus clientes.",
    category: "Redes Sociales",
    color: "from-blue-500/20 to-indigo-600/20",
    icon: "👥",
    available: true,
  },
];

export function Integrations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="bg-background py-12 sm:py-20 lg:py-32 relative overflow-hidden"
      ref={sectionRef}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[300px] w-[300px] sm:h-[600px] sm:w-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[250px] w-[250px] sm:h-[500px] sm:w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto max-w-3xl text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <Link2 className="h-4 w-4" />
            Integraciones potentes
          </div>
          <h2 className="mb-4 text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Conecta con todas tus plataformas
          </h2>
          <p className="text-pretty text-base sm:text-lg text-muted-foreground">
            Nexus se integra perfectamente con las principales plataformas de
            e-commerce, pagos y redes sociales. Todo sincronizado en tiempo
            real, sin complicaciones.
          </p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-4 sm:p-6 transition-all duration-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${integration.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Category */}
                <div className="mb-3 sm:mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 text-xl sm:text-2xl transition-all duration-500 group-hover:bg-primary group-hover:scale-110 group-hover:rotate-6">
                    {integration.icon}
                  </div>
                  <span className="rounded-full bg-secondary px-2 sm:px-3 py-1 text-xs font-medium text-secondary-foreground">
                    {integration.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-2 text-lg sm:text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {integration.name}
                </h3>

                {/* Description */}
                <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                  {integration.description}
                </p>

                {/* Check icon */}
                <div className="mt-4 flex items-center gap-2 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {integration.available ? (
                    <CheckCircle2 className="h-4 w-4" />
                  ) : (
                    <Zap className="h-4 w-4" />
                  )}
                  <span className="font-medium">
                    {integration.available
                      ? "Integración disponible"
                      : "Integración en curso"}
                  </span>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${integration.color} blur-xl`}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className={`mt-8 sm:mt-12 lg:mt-16 text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-gradient-to-br from-primary/5 to-accent/5 p-6 sm:p-8 backdrop-blur-sm">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mb-2 text-xl sm:text-2xl font-bold text-foreground">
              ¿Necesitas otra integración?
            </h3>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-muted-foreground">
              Estamos constantemente agregando nuevas integraciones. Si tu
              plataforma no está en la lista, contáctanos y te ayudamos a
              conectarla.
            </p>
            <a
              href="https://wa.me/5491126678238?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20las%20integraciones%20de%20Nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              Consultar integraciones
              <Zap className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
