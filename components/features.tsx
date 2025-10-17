"use client"

import { ShoppingCart, Globe, MessageSquare, BarChart3, Lock, Zap } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const features = [
  {
    icon: ShoppingCart,
    title: "POS Inteligente",
    description: "Sistema de punto de venta rápido y eficiente para gestionar tus ventas físicas con facilidad.",
  },
  {
    icon: Globe,
    title: "Tienda Online",
    description: "Crea tu tienda en línea y vende 24/7. Sincronización automática con tu inventario.",
  },
  {
    icon: MessageSquare,
    title: "Integración Multicanal",
    description: "Conecta WhatsApp, Instagram y más canales de mensajería para vender donde están tus clientes.",
  },
  {
    icon: BarChart3,
    title: "Reportes en Tiempo Real",
    description: "Analiza tus ventas, inventario y rendimiento con dashboards intuitivos y actualizados.",
  },
  {
    icon: Lock,
    title: "Seguridad Garantizada",
    description: "Tus datos protegidos con encriptación de nivel empresarial y backups automáticos.",
  },
  {
    icon: Zap,
    title: "Actualizaciones Automáticas",
    description: "Siempre tendrás las últimas funcionalidades sin complicaciones ni costos adicionales.",
  },
]

export function Features() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-secondary/30 py-20 lg:py-32 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-1/3 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse" />
        <div className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-accent/5 blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Todo lo que necesitas para crecer
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Nexus integra todas las herramientas esenciales para gestionar tu negocio de manera eficiente y profesional.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm p-8 transition-all duration-700 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-6">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-pretty text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
