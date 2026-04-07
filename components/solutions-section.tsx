"use client";

import Link from "next/link";
import { ArrowRight, Wrench, Package, ShoppingCart, Wine } from "lucide-react";

const solutions = [
  {
    href: "/ferreteria",
    label: "Ferreterías",
    description:
      "Sincronizá tu stock físico con MercadoLibre y tu tienda online. Evitá vender lo que ya no tenés.",
    icon: Wrench,
    color: "from-orange-500/10 to-amber-500/10",
    iconColor: "bg-orange-500/10 text-orange-600 group-hover:bg-orange-500 group-hover:text-white",
    tag: "Retail físico + online",
  },
  {
    href: "/importadora",
    label: "Importadoras",
    description:
      "Gestioná stock mayorista (B2B) y minorista (B2C) desde una sola plataforma. Maximizá la rotación.",
    icon: Package,
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "bg-blue-500/10 text-blue-600 group-hover:bg-blue-500 group-hover:text-white",
    tag: "Distribución B2B / B2C",
  },
  {
    href: "/mercadolibre",
    label: "Vendedores MercadoLibre",
    description:
      "Cada venta en tu local descuenta automáticamente tu stock en ML. Terminá con la doble carga.",
    icon: ShoppingCart,
    color: "from-yellow-500/10 to-orange-400/10",
    iconColor: "bg-yellow-500/10 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white",
    tag: "Marketplace",
  },
  {
    href: "/vinoteca",
    label: "Vinotecas",
    description:
      "Controlá tu bodega, tienda y ventas online en tiempo real. Nunca más pierdas una venta por stock desactualizado.",
    icon: Wine,
    color: "from-purple-500/10 to-pink-500/10",
    iconColor: "bg-purple-500/10 text-purple-600 group-hover:bg-purple-500 group-hover:text-white",
    tag: "Catálogo premium",
  },
];

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-secondary/30 py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            Soluciones por industria
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Soluciones para tu tipo de negocio
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Nexus se adapta a las necesidades específicas de cada industria. Elegí tu rubro y descubrí cómo podemos ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2`}
              >
                {/* Gradient bg on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Tag */}
                  <span className="mb-4 self-start rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {s.tag}
                  </span>

                  {/* Icon */}
                  <div
                    className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 ${s.iconColor}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-2 text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {s.label}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {s.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary">
                    Ver solución
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
