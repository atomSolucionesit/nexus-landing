"use client";

import { useEffect, useRef, useState } from "react";
import { ClipboardList, Package, Truck, CheckCircle, DollarSign, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  { icon: ClipboardList, label: "Pedido",       description: "El cliente mayorista hace su pedido por WhatsApp, web o POS." },
  { icon: Package,       label: "Stock",         description: "El sistema descuenta el stock del depósito correspondiente en tiempo real." },
  { icon: Truck,         label: "Preparación",   description: "Se genera la orden de preparación y despacho automáticamente." },
  { icon: CheckCircle,   label: "Entrega",        description: "El repartidor confirma la entrega desde la app móvil." },
  { icon: DollarSign,    label: "Cobro",          description: "Se registra el pago y se actualiza la cuenta corriente del cliente." },
  { icon: BarChart3,     label: "Reporte",        description: "Todo queda registrado: ventas, márgenes y rendimiento del negocio." },
];

export function HowItWorks() {
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
    <section ref={sectionRef} id="how-it-works" className="py-20 lg:py-32 bg-secondary/10 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`mx-auto max-w-3xl text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
            <Truck className="h-4 w-4" />
            Flujo operativo
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Cómo funciona Nexus en una distribuidora
          </h2>
          <p className="text-lg text-muted-foreground">
            Así funciona una operación real con Nexus — desde el pedido hasta el reporte.
          </p>
        </div>

        {/* Flujo de pasos */}
        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Línea conectora */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-gradient-to-r from-primary/40 to-primary/10" />
                  )}

                  {/* Ícono */}
                  <div className="relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-foreground mb-1">{step.label}</span>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA inferior */}
        <div className={`mt-16 text-center transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://wa.me/543772430213?text=Hola,%20quiero%20ver%20c%C3%B3mo%20funciona%20Nexus%20para%20mi%20distribuidora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
          >
            Ver demo en vivo
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
