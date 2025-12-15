import type { Metadata } from "next";
import Hero from "@/components/hero";
import Features from "@/components/features";
import { ProductShowcase } from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { nichoData } from "@/lib/nicho-data";

export const metadata: Metadata = {
  title: "Nexus para Ferreterías | Gestión de Stock Ferretería - Sincroniza Tienda y MercadoLibre",
  description: "Deja de decir 'se lo vendieron ayer'. Sincroniza tu ferretería física con tu tienda online y ML. Vende cada tornillo, herramienta y pintura una sola vez, en el canal correcto.",
  keywords: [
    "gestión de stock ferretería",
    "vender en MercadoLibre y tienda",
    "inventario unificado ferretería",
    "evitar quedarse sin stock",
    "software ferretería",
    "control stock herramientas",
    "sincronizar ferretería ML"
  ],
};

const data = nichoData.ferreteria;

export default function FerreteriaPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero 
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        description={data.hero.description}
        primaryCTA={data.hero.primaryCTA}
        secondaryCTA={data.hero.secondaryCTA}
      />
      <Features 
        title={data.features.title}
        features={data.features.items}
      />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}