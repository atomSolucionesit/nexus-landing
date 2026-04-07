"use client";

import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Qué es Nexus?
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Nexus es una plataforma SaaS de gestión comercial integral. Centraliza todas tus
            unidades de negocio en un solo panel: almacenes, catálogos, proveedores, ventas y
            canales online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              step: "1",
              color: "bg-primary/10 text-primary",
              title: "Conectá tus canales",
              description: "Integra tu tienda física, tu ecommerce y tus redes sociales.",
            },
            {
              step: "2",
              color: "bg-accent/10 text-accent",
              title: "Controlá tu stock",
              description: "Actualización en tiempo real entre todos tus puntos de venta.",
            },
            {
              step: "3",
              color: "bg-primary/10 text-primary",
              title: "Vendé sin límites",
              description:
                "Gestioná pedidos, facturación y clientes desde una interfaz moderna y simple.",
            },
          ].map((item) => (
            <Card
              key={item.step}
              className="text-center border border-border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="pt-8 pb-6 px-6">
                <div
                  className={`w-14 h-14 ${item.color} rounded-full flex items-center justify-center mx-auto mb-5`}
                >
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
