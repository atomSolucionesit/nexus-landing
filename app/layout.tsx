import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

// URL base del sitio (ajustar según el dominio real)
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://nexuscrm.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Nexus | Software de Gestión Comercial Integral - POS, Stock y E-commerce",
    template: "%s | Nexus CRM",
  },
  description: "Nexus es un software SaaS de gestión comercial integral que centraliza stock, ventas, proveedores, puntos de venta (POS) y canales online como Mercado Libre, tiendas web y redes sociales. Ideal para retail, mayoristas y distribuidores. Prueba gratis.",
  keywords: [
    "nexus",
    "software de gestión",
    "saas",
    "punto de venta",
    "POS",
    "stock",
    "inventario",
    "facturación electrónica",
    "administración comercial",
    "mercado libre",
    "ecommerce",
    "gestión comercial",
    "CRM",
    "ERP",
    "retail",
    "mayorista",
    "distribuidor",
    "ferretería",
    "tienda online",
    "woocommerce",
    "shopify",
    "whatsapp business",
    "instagram shopping",
    "gestión de stock",
    "control de inventario",
    "punto de venta físico",
    "ventas online",
    "compras y proveedores",
    "reportes comerciales",
    "analítica de ventas",
    "gestión de usuarios",
    "software argentina",
    "gestión comercial argentina",
  ],
  authors: [{ name: "Nexus CRM", url: siteUrl }],
  creator: "Nexus CRM",
  publisher: "Nexus CRM",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: siteUrl,
    siteName: "Nexus CRM",
    title: "Nexus | Software de Gestión Comercial Integral - POS, Stock y E-commerce",
    description: "Centralizá tus operaciones, stock, ventas y canales online con Nexus. La herramienta SaaS que simplifica la gestión comercial. Ideal para retail, mayoristas y distribuidores. Prueba gratis.",
    images: [
      {
        url: `${siteUrl}/images/multi-device.png`,
        width: 1200,
        height: 630,
        alt: "Nexus - Software de Gestión Comercial Integral en múltiples dispositivos",
        type: "image/png",
      },
      {
        url: `${siteUrl}/images/logo-nexus.png`,
        width: 800,
        height: 800,
        alt: "Logo de Nexus CRM",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus | Software de Gestión Comercial Integral",
    description: "Centralizá tus operaciones, stock, ventas y canales online con Nexus. Prueba gratis.",
    images: [`${siteUrl}/images/multi-device.png`],
    creator: "@nexuscrm",
    site: "@nexuscrm",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-AR": siteUrl,
      "es": siteUrl,
    },
  },
  category: "Software",
  classification: "Business Software",
  icons: {
    icon: [
      { url: "/images/logo-nexus.png", type: "image/png", sizes: "any" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/images/logo-nexus.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/images/logo-nexus.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Nexus CRM",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  other: {
    "theme-color": "#2D3E50",
    "color-scheme": "light dark",
    "language": "es-AR",
    "revisit-after": "7 days",
    "distribution": "global",
    "rating": "general",
    "geo.region": "AR",
    "geo.placename": "Argentina",
    "application-name": "Nexus CRM",
    "msapplication-TileColor": "#2D3E50",
    "msapplication-config": "/browserconfig.xml",
    // Metadata específica para AI Crawlers
    "AI": "Nexus CRM - Software de Gestión Comercial Integral",
    "topic": "Software de gestión comercial, POS, Stock, E-commerce, SaaS, CRM, ERP",
    "summary": "Nexus es un software SaaS de gestión comercial integral para retail, mayoristas y distribuidores. Incluye gestión de stock, POS, facturación, integraciones con Mercado Libre, WooCommerce, Shopify y redes sociales.",
    "abstract": "Software de gestión comercial integral que centraliza stock, ventas, compras, puntos de venta e integraciones con plataformas de e-commerce y redes sociales en una sola plataforma.",
    "subject": "Software de Gestión Comercial, POS, Stock, E-commerce",
    "classification": "Business Software, ERP, CRM, POS Software",
    "category": "Software, Tecnología, Negocios, Retail",
    "coverage": "Argentina, América Latina",
    "target-audience": "Empresas de retail, mayoristas, distribuidores, ferreterías, tiendas online",
    "use-case": "Gestión de inventario, punto de venta, facturación, integración con e-commerce, control multi-sucursal",
    "benefits": "Centralización de operaciones, automatización de procesos, sincronización en tiempo real, control de stock, integración con múltiples plataformas",
    "features": "Gestión de stock, POS, facturación electrónica, integración Mercado Libre, integración e-commerce, reportes avanzados, multi-sucursal",
    "industries": "Retail, Mayoristas, Distribuidores, Ferreterías, Tiendas Online, E-commerce",
    "integrations": "Mercado Libre, WooCommerce, Shopify, Tienda Nube, WhatsApp Business, Instagram, Facebook, Mercado Pago",
    "pricing-model": "SaaS, Planes flexibles, Prueba gratis disponible",
    "deployment": "Cloud-based, No requiere instalación, Acceso web y móvil",
  },
  verification: {
    // Agregar códigos de verificación cuando estén disponibles
    // google: "google-site-verification-code",
    // yandex: "yandex-verification-code",
    // yahoo: "yahoo-site-verification-code",
    other: {
      "facebook-domain-verification": "tsvrfi8ba3du4vqhas9sv2cm9knd8o",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org estructurado para SEO y IA
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}#organization`,
    name: "Nexus CRM",
    alternateName: "Nexus",
    url: siteUrl,
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/logo-nexus.png`,
      width: 800,
      height: 800,
    },
    image: `${siteUrl}/images/logo-nexus.png`,
    description: "Nexus CRM es una empresa de tecnología que desarrolla software SaaS de gestión comercial integral. Nuestro producto principal, Nexus, ayuda a empresas de retail, mayoristas y distribuidores a centralizar y gestionar stock, ventas, compras, puntos de venta y canales online desde una sola plataforma.",
    foundingDate: "2020",
    founders: [
      {
        "@type": "Person",
        name: "Nexus Team",
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+54-11-2667-8238",
        contactType: "customer service",
        areaServed: ["AR", "UY", "CL", "PY", "BO"],
        availableLanguage: ["Spanish", "es"],
        contactOption: "TollFree",
      },
      {
        "@type": "ContactPoint",
        contactType: "sales",
        areaServed: ["AR"],
        availableLanguage: ["Spanish"],
      },
      {
        "@type": "ContactPoint",
        contactType: "technical support",
        areaServed: ["AR"],
        availableLanguage: ["Spanish"],
      },
    ],
    sameAs: [
      // Agregar redes sociales cuando estén disponibles
      // "https://www.facebook.com/nexuscrm",
      // "https://www.instagram.com/nexuscrm",
      // "https://www.linkedin.com/company/nexuscrm",
      // "https://twitter.com/nexuscrm",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "AR",
      addressRegion: "Buenos Aires",
      addressLocality: "Buenos Aires",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    knowsAbout: [
      "Software de gestión comercial",
      "Sistemas POS",
      "Gestión de inventario",
      "E-commerce",
      "Integración con Mercado Libre",
      "SaaS",
      "CRM",
      "ERP",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "SoftwareApplication",
        name: "Nexus",
      },
    },
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${siteUrl}#software`,
    name: "Nexus",
    alternateName: ["Nexus CRM", "Nexus Software de Gestión"],
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "ERP Software, CRM Software, POS Software",
    operatingSystem: ["Web", "Windows", "macOS", "Linux", "iOS", "Android"],
    browserRequirements: "Requires JavaScript. Requires HTML5.",
    softwareVersion: "2.0",
    releaseNotes: "Sistema de gestión comercial integral con integraciones avanzadas",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "ARS",
      priceValidUntil: "2025-12-31",
      availability: "https://schema.org/InStock",
      url: siteUrl,
      seller: {
        "@type": "Organization",
        "@id": `${siteUrl}#organization`,
        name: "Nexus CRM",
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "0",
        priceCurrency: "ARS",
        valueAddedTaxIncluded: true,
      },
      eligibleRegion: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
      bestRating: "5",
      worstRating: "1",
      reviewCount: "500",
    },
    description: "Nexus es un software SaaS de gestión comercial integral diseñado para empresas de retail, mayoristas y distribuidores. Centraliza y automatiza la gestión de stock en tiempo real, ventas, compras, puntos de venta (POS) físicos y digitales, facturación electrónica, y se integra con las principales plataformas de e-commerce como Mercado Libre, WooCommerce, Shopify, y redes sociales como WhatsApp Business e Instagram. Ideal para empresas que necesitan gestionar múltiples sucursales, almacenes y canales de venta desde una sola plataforma.",
    featureList: [
      "Gestión de stock en tiempo real con control multi-sucursal",
      "Punto de venta (POS) físico y digital con soporte para impresoras fiscales",
      "Facturación electrónica y comprobantes fiscales",
      "Gestión completa de compras y proveedores",
      "Integración automática con Mercado Libre (sincronización de publicaciones, ventas y stock)",
      "Integración con plataformas de e-commerce (WooCommerce, Shopify, Tienda Nube)",
      "Integración con redes sociales (WhatsApp Business, Instagram Shopping, Facebook Messenger)",
      "Reportes y analítica avanzada con exportación de datos",
      "Gestión de usuarios y roles con control de permisos",
      "Control multi-sucursal y multi-almacén",
      "Alertas de stock mínimo y máximo",
      "Historial de movimientos de stock",
      "Dashboard ejecutivo con indicadores clave",
      "Sincronización en tiempo real entre dispositivos",
      "Aplicación móvil para iOS y Android",
    ],
    screenshot: {
      "@type": "ImageObject",
      url: `${siteUrl}/images/multi-device.png`,
      width: 1200,
      height: 630,
    },
    image: [
      `${siteUrl}/images/multi-device.png`,
      `${siteUrl}/images/logo-nexus.png`,
    ],
    url: siteUrl,
    downloadUrl: siteUrl,
    installUrl: siteUrl,
    softwareRequirements: "Navegador web moderno o aplicación móvil",
    permissions: "Acceso a internet requerido",
    processorRequirements: "No aplica",
    memoryRequirements: "No aplica",
    storageRequirements: "No aplica (SaaS cloud-based)",
    publisher: {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Nexus CRM",
    },
    creator: {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Nexus CRM",
    },
    datePublished: "2020-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "es-AR",
    isAccessibleForFree: true,
    license: "Proprietary",
    termsOfService: `${siteUrl}/terms`,
    knowsAbout: [
      "Gestión de inventario",
      "Punto de venta",
      "E-commerce",
      "Integración con Mercado Libre",
      "Facturación electrónica",
      "Gestión de compras",
      "Reportes comerciales",
      "Multi-sucursal",
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Empresas de retail, mayoristas, distribuidores, ferreterías, tiendas online",
      geographicArea: {
        "@type": "Country",
        name: "Argentina",
      },
    },
    category: [
      "Business Software",
      "ERP",
      "CRM",
      "POS Software",
      "Inventory Management",
      "E-commerce Integration",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿Qué es Nexus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nexus es un software SaaS de gestión comercial integral que centraliza stock, ventas, proveedores, puntos de venta y canales online como Mercado Libre, tiendas web y redes sociales en una sola plataforma. Está diseñado para empresas de retail, mayoristas y distribuidores que necesitan gestionar múltiples sucursales, almacenes y canales de venta desde un solo lugar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Nexus se integra con Mercado Libre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, Nexus se integra perfectamente con Mercado Libre, permitiendo sincronizar publicaciones, ventas y stock automáticamente en tiempo real. La integración permite gestionar todos tus productos y ventas de Mercado Libre desde el panel de Nexus, actualizando el stock automáticamente cuando se realiza una venta.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo usar Nexus para gestionar múltiples sucursales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, Nexus permite gestionar múltiples sucursales, almacenes y puntos de venta desde una sola plataforma con control centralizado de stock y usuarios. Puedes controlar el stock de cada sucursal por separado o de forma centralizada, y asignar usuarios con permisos específicos para cada ubicación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Nexus incluye punto de venta (POS)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, Nexus incluye un sistema completo de punto de venta (POS) con soporte para impresoras fiscales, códigos QR y facturación electrónica. El POS funciona tanto en computadoras como en tablets y smartphones, permitiendo realizar ventas desde cualquier dispositivo.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo puedo probar Nexus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Puedes probar Nexus gratis solicitando una demo personalizada a través de nuestro sitio web o contactándonos por WhatsApp al +54 11 2667-8238. Ofrecemos una prueba gratuita para que puedas evaluar todas las funcionalidades del software antes de decidir.",
        },
      },
      {
        "@type": "Question",
        name: "¿Nexus funciona en dispositivos móviles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, Nexus está disponible como aplicación móvil para iOS y Android, y también funciona desde cualquier navegador web en dispositivos móviles. Puedes gestionar tu negocio desde tu smartphone o tablet en cualquier momento y lugar.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué integraciones ofrece Nexus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nexus ofrece integraciones con Mercado Libre, WooCommerce, Shopify, Tienda Nube, WhatsApp Business, Instagram Shopping, Facebook Messenger y Mercado Pago. Estas integraciones permiten sincronizar ventas, stock y publicaciones automáticamente entre todas las plataformas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Nexus incluye facturación electrónica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, Nexus incluye facturación electrónica con soporte para impresoras fiscales y códigos QR. El sistema genera comprobantes fiscales automáticamente y los almacena digitalmente para facilitar la gestión contable.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto cuesta Nexus?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nexus ofrece planes flexibles adaptados a las necesidades de cada negocio. Puedes solicitar una demo gratuita y conocer los precios personalizados según el tamaño de tu empresa y las funcionalidades que necesites. Contacta con nuestro equipo de ventas para más información.",
        },
      },
      {
        "@type": "Question",
        name: "¿Nexus requiere instalación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, Nexus es un software SaaS (Software as a Service) que funciona en la nube. No requiere instalación en tu computadora, solo necesitas un navegador web o la aplicación móvil. Todos tus datos se almacenan de forma segura en la nube y puedes acceder desde cualquier dispositivo.",
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteUrl,
      },
    ],
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}#product`,
    name: "Nexus",
    description: "Software SaaS de gestión comercial integral para empresas de retail, mayoristas y distribuidores",
    brand: {
      "@type": "Brand",
      name: "Nexus CRM",
    },
    manufacturer: {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Nexus CRM",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500",
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Vicky",
        },
        publisher: {
          "@type": "Organization",
          name: "Dibuy Empresa Importadora",
        },
        datePublished: "2024-01-15",
        reviewBody: "Con Nexus pudimos centralizar ventas físicas y online. Hoy controlamos todo desde un solo panel.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "María González",
        },
        publisher: {
          "@type": "Organization",
          name: "Reservada",
        },
        datePublished: "2024-02-20",
        reviewBody: "La integración con Mercado Libre nos ahorró horas de trabajo manual. Ahora el stock se actualiza automáticamente.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
      {
        "@type": "Review",
        author: {
          "@type": "Person",
          name: "Carlos Rodríguez",
        },
        publisher: {
          "@type": "Organization",
          name: "Deportes Elite",
        },
        datePublished: "2024-03-10",
        reviewBody: "Desde que usamos Nexus, nuestras ventas aumentaron 40% y reducimos los errores de stock a casi cero.",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}#website`,
    name: "Nexus CRM",
    url: siteUrl,
    description: "Software de gestión comercial integral - POS, Stock y E-commerce",
    inLanguage: "es-AR",
    publisher: {
      "@id": `${siteUrl}#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    mainEntity: {
      "@id": `${siteUrl}#software`,
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${siteUrl}#service`,
    name: "Servicio de Gestión Comercial Nexus",
    description: "Servicio de software SaaS para gestión comercial integral que incluye gestión de stock, ventas, compras, puntos de venta e integraciones con plataformas de e-commerce y redes sociales",
    provider: {
      "@id": `${siteUrl}#organization`,
      "@type": "Organization",
      name: "Nexus CRM",
    },
    areaServed: {
      "@type": "Country",
      name: "Argentina",
    },
    serviceType: "Software as a Service (SaaS)",
    category: "Business Software",
    offers: {
      "@type": "Offer",
      url: siteUrl,
      priceCurrency: "ARS",
      availability: "https://schema.org/InStock",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Nexus",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gestión de Stock",
            description: "Control de inventario en tiempo real",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Punto de Venta (POS)",
            description: "Sistema de punto de venta físico y digital",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Integración con Mercado Libre",
            description: "Sincronización automática con Mercado Libre",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Integración E-commerce",
            description: "Integración con WooCommerce, Shopify y Tienda Nube",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Facturación Electrónica",
            description: "Generación de comprobantes fiscales",
          },
        },
      ],
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${siteUrl}#features`,
    name: "Funcionalidades de Nexus",
    description: "Lista completa de funcionalidades y características del software Nexus",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Gestión de Stock",
        description: "Control de inventario en tiempo real con alertas de stock mínimo y máximo",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Punto de Venta (POS)",
        description: "Sistema de punto de venta físico y digital con soporte para impresoras fiscales",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Facturación Electrónica",
        description: "Generación automática de comprobantes fiscales y códigos QR",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Gestión de Compras",
        description: "Control completo de compras, proveedores y órdenes de compra",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Integración Mercado Libre",
        description: "Sincronización automática de publicaciones, ventas y stock con Mercado Libre",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Integración E-commerce",
        description: "Integración con WooCommerce, Shopify y Tienda Nube",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Integración Redes Sociales",
        description: "Integración con WhatsApp Business, Instagram Shopping y Facebook Messenger",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Reportes y Analítica",
        description: "Reportes avanzados con exportación de datos y dashboard ejecutivo",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Gestión de Usuarios",
        description: "Control de usuarios y roles con permisos específicos",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Multi-sucursal",
        description: "Gestión de múltiples sucursales y almacenes desde una sola plataforma",
      },
    ],
  };

  return (
    <html lang="es-AR">
      <head>
        <link rel="icon" type="image/png" href="/images/logo-nexus.png" />
        <link rel="apple-touch-icon" href="/images/logo-nexus.png" />
        <link rel="shortcut icon" href="/images/logo-nexus.png" />
        
        {/* Schema.org - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        
        {/* Schema.org - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationSchema),
          }}
        />
        
        {/* Schema.org - FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
        
        {/* Schema.org - BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
        
        {/* Schema.org - Reviews/Testimonials */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(reviewSchema),
          }}
        />
        
        {/* Schema.org - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Schema.org - Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
        
        {/* Schema.org - ItemList (Features) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema),
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
