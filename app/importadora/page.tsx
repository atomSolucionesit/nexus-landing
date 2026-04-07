import type { Metadata } from "next";
import { HeroImportadora } from "@/components/hero-importadora";
import Features from "@/components/features";
import { ProductShowcase } from "@/components/product-showcase";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { CrossNav } from "@/components/cross-nav";
import { nichoData } from "@/lib/nicho-data";

export const metadata: Metadata = {
  title: "Nexus para Importadoras | Gestión Stock Importadora - Separar Stock Mayorista y Minorista",
  description:
    "Tu hub de distribución inteligente. Separa y sincroniza stock para venta mayorista (a tus clientes retailers) y venta minorista (tu ecommerce/ML) desde la misma plataforma. Maximiza la rotación sin conflictos.",
  keywords: [
    "gestión stock importadora",
    "separar stock mayorista y minorista",
    "vender tecnología multicanal",
    "plataforma para distribuidores",
    "software importadora",
    "distribución B2B B2C",
    "rotación stock tecnología",
  ],
  alternates: {
    canonical: "https://nexuscrm.com/importadora",
  },
  openGraph: {
    title: "Nexus para Importadoras | Distribución B2B y B2C desde una plataforma",
    description:
      "Separás y sincronizás stock mayorista y minorista desde la misma plataforma. Maximizá la rotación sin conflictos entre canales.",
    url: "https://nexuscrm.com/importadora",
  },
};

const data = nichoData.importadora;

export default function ImportadoraPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroImportadora />
      <Features title={data.features.title} features={data.features.items} />
      <ProductShowcase />
      <Testimonials />
      <Pricing />
      <CTA />
      <CrossNav currentPath="/importadora" />
      <Footer />
    </div>
  );
}
