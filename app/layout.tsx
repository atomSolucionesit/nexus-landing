import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus | Software de Gestión Comercial Integral",
  description: "Nexus es un software SaaS de gestión comercial integral que centraliza stock, ventas, proveedores, puntos de venta y canales online como Mercado Libre, tiendas web y redes sociales.",
  keywords: "nexus, software de gestión, saas, punto de venta, stock, facturación, administración, mercado libre, ecommerce, gestión comercial",
  authors: [{ name: "Nexus CRM" }],
  robots: "index, follow",
  openGraph: {
    title: "Nexus | Gestión Comercial Integral en un solo lugar",
    description: "Centralizá tus operaciones, stock, ventas y canales online con Nexus. La herramienta SaaS que simplifica la gestión comercial.",
    url: "https://nexuscrm.com",
    siteName: "Nexus CRM",
    images: [
      {
        url: "https://nexuscrm.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Nexus - Gestión Comercial Integral",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus | Gestión Comercial Integral",
    description: "Centralizá tus operaciones, stock, ventas y canales online con Nexus.",
    images: ["https://nexuscrm.com/og-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/logo-nexus.png",
  },
  other: {
    "theme-color": "#2D3E50",
    "language": "es",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Nexus",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "49.00",
                "priceCurrency": "USD"
              },
              "description": "Software SaaS de gestión comercial integral con control de stock, ventas, compras e integraciones online.",
              "url": "https://nexuscrm.com"
            })
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
