"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export function Industries() {
  const industries = [
    "Tiendas de retail",
    "Distribuidores y mayoristas", 
    "Ferreterías y corralones",
    "Gimnasios y centros deportivos",
    "Empresas de servicios"
  ]

  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ideal para cualquier tipo de negocio
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Nexus se adapta a las necesidades específicas de tu industria
          </p>
          
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {industries.map((industry, index) => (
                  <li key={index} className="flex items-center text-left">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{industry}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}