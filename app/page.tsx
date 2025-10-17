import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ProductShowcase } from "@/components/product-showcase"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ProductShowcase />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
