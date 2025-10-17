import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary to-transparent opacity-50" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Comienza a transformar tu negocio hoy
          </h2>
          <p className="mb-10 text-pretty text-lg text-primary-foreground/90 sm:text-xl">
            Únete a cientos de negocios que ya confían en Nexus para gestionar sus operaciones. Prueba gratis por 14
            días, sin tarjeta de crédito.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" variant="secondary" className="group w-full sm:w-auto">
              Prueba gratis 14 días
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              Agendar demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
