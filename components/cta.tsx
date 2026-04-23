"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"
import { useState } from "react"

export function CTA() {
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      const message = `Hola, soy ${formData.name} (${formData.email}). Me gustaría solicitar una demo de Nexus.`
      window.open(`https://wa.me/543772430213?text=${encodeURIComponent(message)}`, '_blank')
      setIsSubmitting(false)
      setFormData({ name: '', email: '' })
    }, 1000)
  }

  return (
    <section id="demo" className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-primary/8 blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-primary/20 bg-card/60 backdrop-blur-sm p-10 sm:p-14 text-center shadow-xl shadow-primary/5">
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Empezá a simplificar tu operación con Nexus
            </h2>
            <p className="mb-10 text-pretty text-lg text-muted-foreground sm:text-xl">
              Probálo gratis o agendá una demo personalizada.
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <Input
                type="text"
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground"
              />
              <Input
                type="email"
                placeholder="Tu email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="bg-secondary/50 border-border text-foreground placeholder:text-muted-foreground"
              />
              <Button
                type="submit"
                size="lg"
                className="group w-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Enviando...' : 'Solicitar demo'}
                {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                Te contactamos en menos de 24hs.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
