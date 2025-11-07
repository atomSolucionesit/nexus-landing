"use client"

import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Qué es Nexus?
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Nexus es una plataforma SaaS de gestión comercial integral. Centraliza todas tus unidades de negocio en un solo panel: almacenes, catálogos, proveedores, ventas y canales online.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Conectá tus canales
              </h3>
              <p className="text-gray-600">
                Integra tu tienda física, tu ecommerce y tus redes sociales.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Controlá tu stock
              </h3>
              <p className="text-gray-600">
                Actualización en tiempo real entre todos tus puntos de venta.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Vendé sin límites
              </h3>
              <p className="text-gray-600">
                Gestioná pedidos, facturación y clientes desde una interfaz moderna y simple.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}