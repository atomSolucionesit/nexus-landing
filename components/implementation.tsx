"use client";

import { useEffect, useRef, useState } from "react";
import { Settings, GitMerge, Users, Headphones, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Settings,
    title: "Configuración inicial personalizada",
    description: "Analizamos tu operación actual y configuramos el sistema adaptado a tu flujo de trabajo, depósitos y estructura comercial.",
  },
  {
    icon: GitMerge,
    title: "Adaptación a tu operación",
    description: "Migramos tus datos, integramos tus canales de venta y ajustamos cada módulo a las necesidades específicas de tu empresa.",
  },
  {
    icon: Users,
    title: "Capacitación a tu equipo",
    description: "Entrenamos a tu equipo operativo, administrativo y comercial para que adopten el sistema desde el primer día.",
  },
  {
    icon: Headphones,
    title: "Soporte continuo",
    description: "Acompañamiento post-implementación con soporte dedicado. No te dejamos solo después del lanzamiento.",
  },
];

export function Implementation() {
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

  return (
    <section ref={sectionRef} className="py-20 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute left-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Settings className="h-4 w-4" />
            Implementación enterprise
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Implementación pensada para empresas
          </h2>
          <p className="text-lg text-muted-foreground">
            No es solo un software. Es una solución empresarial con acompañamiento real desde el día uno.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-7 card-glow transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mb-2 text-xs font-bold uppercase tracking-widest text-primary/60">
                    Paso {index + 1}
                  </div>
                  <h3 className="mb-3 text-base font-semibold text-foreground leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://wa.me/543772430213?text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20la%20implementaci%C3%B3n%20de%20Nexus%20para%20mi%20empresa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Hablar con un especialista
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
