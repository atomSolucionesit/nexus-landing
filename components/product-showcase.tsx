"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

export function ProductShowcase() {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({})
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    Object.keys(sectionRefs.current).forEach((key) => {
      const element = sectionRefs.current[key]
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setIsVisible((prev) => ({ ...prev, [key]: true }))
            }
          },
          { threshold: 0.1 },
        )
        observer.observe(element)
        observers.push(observer)
      }
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section className="bg-background py-20 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-32" ref={(el) => { sectionRefs.current["pos"] = el }}>
          <div
            className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${isVisible["pos"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Terminal POS profesional
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Diseñado para la velocidad y eficiencia de tu negocio. Procesa ventas en segundos con nuestra
              interfaz intuitiva.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:gap-12 items-center">
            <div
              className={`relative aspect-square w-full group transition-all duration-700 delay-100 ${isVisible["pos"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-95 group-hover:scale-100" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/pos-terminal-1.png"
                  alt="Terminal POS Nexus - Sistema de punto de venta mostrando múltiples formas de pago y gestión de ventas"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
            </div>
            <div
              className={`relative aspect-square w-full group transition-all duration-700 delay-300 ${isVisible["pos"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/10 to-primary/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500 scale-95 group-hover:scale-100" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/pos-terminal-3.png"
                  alt="Terminal POS Nexus - Interfaz de punto de venta con diseño moderno y funcionalidades de gestión comercial"
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-32" ref={(el) => { sectionRefs.current["mobile"] = el }}>
          <div
            className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${isVisible["mobile"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Gestiona desde cualquier lugar
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Controla tu inventario, ventas y reportes desde tu
              cualquier dispositivo.
            </p>
          </div>

          <div
            className={`relative mx-auto max-w-5xl group transition-all duration-1000 delay-200 ${isVisible["mobile"] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all duration-700 animate-gradient bg-[length:200%_auto]" />
            <div className="relative rounded-3xl overflow-hidden backdrop-blur-sm group-hover:scale-105 transition-all duration-500">
              <Image
                src="/images/mobile-screens.png"
                alt="Aplicación móvil Nexus CRM - Gestión comercial desde smartphone con vistas de stock, ventas y reportes"
                width={1200}
                height={800}
                className="w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        <div ref={(el) => { sectionRefs.current["sync"] = el }}>
          <div
            className={`mx-auto max-w-2xl text-center mb-16 transition-all duration-1000 ${isVisible["sync"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Sincronización en tiempo real
            </h2>
            <p className="text-pretty text-lg text-muted-foreground">
              Todos tus dispositivos conectados y sincronizados. Los cambios se reflejan instantáneamente en todas las
              plataformas.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2 items-center max-w-6xl mx-auto">
            <div
              className={`relative aspect-[4/3] w-full group transition-all duration-700 delay-100 ${isVisible["sync"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/15 to-accent/15 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative h-full w-full rounded-2xl overflow-hidden group-hover:scale-105 transition-all duration-500">
                <Image
                  src="/images/pos-terminal-2.png"
                  alt="Terminales POS Nexus sincronizadas - Sistema multi-dispositivo con sincronización en tiempo real"
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
            </div>
            <div
              className={`relative aspect-[3/4] w-full max-w-sm mx-auto group transition-all duration-700 delay-300 ${isVisible["sync"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="absolute inset-0 bg-gradient-to-bl from-accent/20 to-primary/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <div className="relative h-full w-full rounded-3xl overflow-hidden group-hover:scale-105 group-hover:rotate-2 transition-all duration-500">
                <Image
                  src="/images/mobile-login.png"
                  alt="Login móvil de Nexus CRM - Acceso seguro a la plataforma de gestión comercial desde dispositivos móviles"
                  fill
                  className="object-contain p-2 group-hover:scale-105 transition-transform duration-700 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
