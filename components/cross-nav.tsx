"use client";

import Link from "next/link";
import { ArrowRight, Wrench, Package, ShoppingCart, Wine } from "lucide-react";

interface CrossNavProps {
  currentPath: "/ferreteria" | "/importadora" | "/mercadolibre" | "/vinoteca";
}

const solutions = [
  { href: "/ferreteria", label: "Ferreterías", icon: Wrench },
  { href: "/importadora", label: "Importadoras", icon: Package },
  { href: "/mercadolibre", label: "MercadoLibre", icon: ShoppingCart },
  { href: "/vinoteca", label: "Vinotecas", icon: Wine },
];

export function CrossNav({ currentPath }: CrossNavProps) {
  const others = solutions.filter((s) => s.href !== currentPath);

  return (
    <section className="bg-secondary/30 py-14 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center mb-8">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">
            ¿Tenés otro tipo de negocio?
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Ver otras soluciones de Nexus
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {others.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.href}
                href={s.href}
                className="group flex items-center gap-2.5 rounded-xl border border-border bg-card/50 px-5 py-3 text-sm font-medium text-foreground hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-200"
              >
                <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                {s.label}
                <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            );
          })}

          <Link
            href="/"
            className="group flex items-center gap-2 rounded-xl border border-primary/30 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            Ver plataforma completa
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
