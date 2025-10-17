"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

export function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/15 blur-3xl animate-pulse delay-1000" />
        <div className="absolute left-1/4 bottom-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left column - Text content */}
          <div className="mx-auto max-w-2xl lg:mx-0 animate-fade-in-up">
            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm hover:bg-primary/10 transition-all duration-300 hover:scale-105">
              <Zap className="h-4 w-4 animate-pulse" />
              Sistema de gestión inteligente
            </div>

            {/* Main heading */}
            <h1 className="mb-6 text-balance font-sans text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Controla tu negocio con{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Nexus
              </span>
            </h1>

            {/* Subheading */}
            <p className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl">
              Sistema completo de gestión y control de stock. Desde ventas físicas hasta integración multicanal, todo en
              una sola plataforma.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group w-full sm:w-auto hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/5491126678238?text=Hola,%20me%20interesa%20comenzar%20con%20Nexus', '_blank')}
              >
                Comenzar ahora
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent hover:bg-primary/5 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://wa.me/5491126678238?text=Hola,%20me%20gustaría%20ver%20una%20demo%20de%20Nexus', '_blank')}
              >
                Ver demo
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  99.9%
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Uptime</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  24/7
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Soporte</div>
              </div>
              <div className="group cursor-default">
                <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  +500
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Clientes</div>
              </div>
            </div>
          </div>

          <div className="relative lg:order-last animate-fade-in-right">
            <div
              className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none transition-transform duration-300 hover:scale-105"
              style={{ transform: `translateY(${scrollY * 0.1}px)` }}
            >
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl rounded-full scale-110 animate-pulse" />
              <Image
                src="/images/multi-device.png"
                alt="Nexus en múltiples dispositivos - laptop y móvil"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
