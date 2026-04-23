"use client";

import { useEffect, useRef, useState } from "react";
import { FileSpreadsheet, Calculator, MessageCircleOff } from "lucide-react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Stock desincronizado entre depósitos",
    body: "Vendés desde varios canales y depósitos, pero el stock no coincide. Terminás vendiendo productos que no tenés o frenando ventas por miedo a errores.",
    stat: "3h/día",
    statLabel: "perdidas en conciliación manual de stock",
  },
  {
    icon: Calculator,
    title: "Pedidos desordenados y sin trazabilidad",
    body: "Los pedidos llegan por WhatsApp, teléfono y email. Sin un sistema centralizado, se pierden, se duplican o se entregan mal. Cada error cuesta plata y clientes.",
    stat: "1 de cada 3",
    statLabel: "pedidos con algún error operativo",
  },
  {
    icon: MessageCircleOff,
    title: "Falta de control en cobros y cuentas corrientes",
    body: "Clientes mayoristas con saldo pendiente, cobros sin registrar y cuentas corrientes que no cuadran. Sin visibilidad en tiempo real, el flujo de caja se vuelve impredecible.",
    stat: "67%",
    statLabel: "de empresas sin control real de cuentas corrientes",
  },
];

export function Problem() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-20 lg:py-32 overflow-hidden bg-background">
      {/* Orbs de fondo */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute left-1/4 top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-primary/5 blur-3xl animate-orb-drift" />
        <div className="absolute right-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl animate-orb-drift delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary/70">
            ¿Te suena familiar?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            El caos que frena tu operación
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Cuando tu operación crece, el desorden también.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-8 card-glow transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Línea de escaneo al hover */}
                <div className="pointer-events-none absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:animate-scan-line" />

                {/* Icono */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-secondary/50 text-primary transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </div>

                {/* Stat */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-gradient">{p.stat}</span>
                  <p className="mt-0.5 text-xs text-muted-foreground">{p.statLabel}</p>
                </div>

                {/* Texto */}
                <h3 className="mb-3 text-lg font-semibold text-foreground">{p.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            );
          })}
        </div>

        {/* Cierre */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="text-xl font-semibold text-foreground sm:text-2xl">
            Nexus organiza toda tu operación en un solo sistema.{" "}
            <span className="text-gradient">Sin fricción.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
