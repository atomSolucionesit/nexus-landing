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
    
    // Simulate form submission
    setTimeout(() => {
      const message = `Hola, soy ${formData.name} (${formData.email}). Me gustaría solicitar una demo de Nexus.`
      window.open(`https://wa.me/543772430213?text=${encodeURIComponent(message)}`, '_blank')
      setIsSubmitting(false)
      setFormData({ name: '', email: '' })
    }, 1000)
  }

  return (
    <section id="demo" className="relative overflow-hidden bg-primary py-20 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-primary to-transparent opacity-50" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-accent to-transparent opacity-30" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Empezá a simplificar tu gestión con Nexus
          </h2>
          <p className="mb-10 text-pretty text-lg text-primary-foreground/90 sm:text-xl">
            Probalo gratis o agendá una demo personalizada.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <Input
              type="text"
              placeholder="Tu nombre"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Input
              type="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70"
            />
            <Button 
              type="submit"
              size="lg" 
              variant="secondary" 
              className="group w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Solicitar demo'}
              {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
