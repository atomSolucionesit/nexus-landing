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
  title: "Conectar MercadoLibre con Tienda Física | Sincronizar Stock ML Automáticamente",
  description: "Conecta tu depósito con MercadoLibre automáticamente. Deja de subir y bajar stock a mano. Cada venta en tu local descuenta automáticamente tu stock en ML, y viceversa.",
  keywords: [
    "conectar MercadoLibre con mi tienda",
    "sincronizar stock ML",
    "vender en ML y local físico",
    "automatizar MercadoLibre",
    "integración ML tienda",
    "stock automático ML",
    "revendedor MercadoLibre"
  ],
};

const data = nichoData.mercadolibre;

export default function MercadoLibrePage() {
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