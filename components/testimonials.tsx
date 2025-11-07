"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "Con Nexus pudimos centralizar ventas físicas y online. Hoy controlamos todo desde un solo panel.",
      author: "Vicky",
      company: "Dibuy Empresa Importadora",
    },
    {
      quote:
        "La integración con Mercado Libre nos ahorró horas de trabajo manual. Ahora el stock se actualiza automáticamente.",
      author: "María González",
      company: "Reservada",
    },
    {
      quote:
        "Desde que usamos Nexus, nuestras ventas aumentaron 40% y reducimos los errores de stock a casi cero.",
      author: "Carlos Rodríguez",
      company: "Deportes Elite",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Historias de crecimiento con Nexus
          </h2>
          <p className="text-xl text-gray-600">
            Conocé cómo otros negocios transformaron su gestión con nuestra
            plataforma
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <cite className="not-italic">
                    <div className="font-semibold text-gray-900">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.company}
                    </div>
                  </cite>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
