"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Wrench, Package, ShoppingCart, Wine, Menu, X } from "lucide-react";

const solutions = [
  {
    href: "/ferreteria",
    label: "Ferreterías",
    description: "Stock unificado físico + MercadoLibre",
    icon: Wrench,
  },
  {
    href: "/importadora",
    label: "Importadoras",
    description: "Distribución B2B y B2C desde una plataforma",
    icon: Package,
  },
  {
    href: "/mercadolibre",
    label: "MercadoLibre",
    description: "Sincronización automática de stock y ventas",
    icon: ShoppingCart,
  },
  {
    href: "/vinoteca",
    label: "Vinotecas",
    description: "Catálogo premium sincronizado en tiempo real",
    icon: Wine,
  },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setSolutionsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Cierra el menú móvil al navegar
  const handleMobileNav = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link
            href="/"
            aria-label="Nexus CRM - Inicio"
            className="flex items-center gap-0.5 animate-fade-in"
          >
            <div className="relative w-32 h-14 md:w-40 md:h-16 transition-transform hover:scale-105 duration-300">
              <svg
                viewBox="0 0 350 150"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
                aria-label="Logo de Nexus CRM"
              >
                <defs>
                  <linearGradient id="logo-base" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#4f8ef7" />
                    <stop offset="50%" stopColor="#7dd3fc" />
                    <stop offset="100%" stopColor="#4f8ef7" />
                  </linearGradient>
                  <linearGradient id="logo-shine" x1="0" y1="0" x2="1" y2="0" gradientUnits="objectBoundingBox">
                    <stop offset="0%" stopColor="white" stopOpacity="0" />
                    <stop offset="40%" stopColor="white" stopOpacity="0" />
                    <stop offset="50%" stopColor="white" stopOpacity="0.6" />
                    <stop offset="60%" stopColor="white" stopOpacity="0" />
                    <stop offset="100%" stopColor="white" stopOpacity="0" />
                    <animateTransform
                      attributeName="gradientTransform"
                      type="translate"
                      from="-1.5 0"
                      to="1.5 0"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </linearGradient>
                  <filter id="logo-glow" x="-20%" y="-40%" width="140%" height="180%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="blur" in2="SourceGraphic" operator="over" />
                  </filter>
                  <mask id="logo-mask">
                    <g transform="translate(0,150) scale(0.1,-0.1)" fill="white">
                      <path d="M413 1259 c-24 -6 -60 -27 -87 -50 -67 -59 -76 -99 -76 -331 l0 -188 75 0 75 0 0 171 c0 228 15 259 125 259 35 0 52 -6 77 -29 l33 -29 3 -186 3 -186 75 0 74 0 0 193 c0 105 -5 209 -11 230 -14 50 -64 106 -117 129 -50 22 -187 32 -249 17z"/>
                      <path d="M1081 1260 c-121 -26 -201 -135 -204 -280 -4 -129 45 -215 151 -267 55 -27 63 -28 207 -28 l150 0 3 61 3 62 -138 4 c-85 2 -147 9 -161 17 -21 11 -62 66 -62 84 0 4 93 7 206 7 l206 0 -4 88 c-6 126 -40 183 -135 231 -49 24 -157 34 -222 21z m144 -134 c30 -13 65 -58 65 -86 0 -6 -46 -10 -131 -10 l-130 0 7 23 c21 71 111 105 189 73z"/>
                      <path d="M1554 1256 c-71 -31 -55 -137 23 -152 27 -5 37 -1 63 24 36 36 39 71 8 106 -30 32 -56 38 -94 22z"/>
                      <path d="M1888 1248 c-8 -7 -82 -87 -164 -178 -241 -267 -224 -245 -224 -290 0 -80 86 -120 144 -68 48 44 368 403 382 431 18 33 7 80 -23 103 -23 17 -94 18 -115 2z"/>
                      <path d="M2154 1245 c-3 -8 -4 -99 -2 -202 5 -210 11 -236 74 -297 52 -51 117 -69 223 -64 99 5 150 26 199 82 17 20 36 52 41 73 6 21 11 125 11 231 l0 192 -75 0 -75 0 0 -182 c0 -164 -2 -186 -20 -215 -39 -65 -156 -65 -204 0 -19 26 -21 44 -24 213 l-3 184 -70 0 c-52 0 -71 -4 -75 -15z"/>
                      <path d="M2895 1251 c-77 -19 -115 -73 -115 -164 0 -108 66 -159 219 -171 94 -8 121 -20 121 -55 0 -39 -27 -46 -182 -49 l-148 -4 0 -60 0 -60 183 4 c169 3 185 5 218 26 52 32 72 79 67 160 -4 59 -7 67 -40 98 -40 36 -82 51 -178 60 -93 10 -110 18 -110 52 0 43 31 52 185 52 l135 0 0 60 0 60 -162 -1 c-90 -1 -177 -4 -193 -8z"/>
                      <path d="M1901 833 c-20 -17 -26 -40 -22 -85 2 -25 41 -58 67 -58 37 0 72 21 82 49 11 32 -2 82 -25 98 -24 18 -77 16 -102 -4z"/>
                      <path d="M260 356 c0 -62 20 -79 21 -18 l1 37 14 -32 c18 -42 29 -42 45 0 l13 32 6 -45 c7 -44 7 -44 8 18 2 71 -10 80 -34 25 l-16 -38 -16 34 c-27 56 -42 51 -42 -13z"/>
                      <path d="M475 377 c-7 -18 -17 -46 -20 -63 -6 -26 -5 -27 8 -11 8 9 22 17 32 17 10 0 24 -8 31 -17 12 -16 13 -16 14 -1 0 19 -37 108 -45 108 -3 0 -12 -15 -20 -33z m35 -34 c0 -7 -7 -13 -15 -13 -16 0 -19 9 -9 35 5 13 8 14 15 3 5 -7 9 -19 9 -25z"/>
                      <path d="M627 404 c-10 -11 -9 -104 2 -104 6 0 11 17 13 38 l3 37 22 -37 c12 -21 27 -38 33 -38 6 0 10 24 10 55 0 30 -4 55 -10 55 -5 0 -10 -17 -11 -37 0 -36 -1 -37 -14 -18 -35 49 -41 56 -48 49z"/>
                      <path d="M815 378 c-7 -19 -17 -47 -20 -64 -6 -26 -5 -27 8 -11 18 22 53 22 61 1 4 -9 9 -14 12 -11 8 7 -25 105 -37 113 -5 3 -16 -10 -24 -28z m35 -35 c0 -7 -7 -13 -15 -13 -16 0 -19 9 -9 35 5 13 8 14 15 3 5 -7 9 -19 9 -25z"/>
                      <path d="M970 390 c-11 -11 -20 -29 -20 -40 0 -21 33 -60 51 -60 23 0 49 22 49 40 0 14 -7 20 -22 20 -18 0 -20 -2 -8 -10 12 -7 12 -12 2 -22 -9 -9 -17 -10 -30 -2 -37 24 -21 74 25 74 14 0 21 4 18 10 -10 16 -44 11 -65 -10z"/>
                      <path d="M1130 355 l0 -55 33 1 c23 1 26 3 10 6 -28 5 -30 33 -3 33 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 5 20 10 0 6 -13 10 -30 10 -30 0 -30 -1 -30 -55z"/>
                      <path d="M1277 403 c-11 -10 -8 -101 2 -108 6 -3 11 14 13 37 l4 43 13 -32 c7 -18 17 -33 22 -33 5 0 15 15 23 33 l14 32 1 -37 c1 -21 6 -38 12 -38 14 0 7 102 -8 107 -6 2 -16 -12 -23 -31 -15 -45 -23 -45 -39 -1 -12 34 -21 42 -34 28z"/>
                      <path d="M1479 408 c0 -2 -2 -27 -2 -55 l-2 -53 35 1 c30 2 31 3 8 6 -32 5 -38 33 -8 33 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0 -20 7 -20 15 0 9 9 15 25 15 14 0 25 5 25 10 0 8 -58 15 -61 8z"/>
                      <path d="M1620 355 c0 -30 5 -55 10 -55 6 0 10 17 10 37 l0 38 25 -38 c14 -20 30 -37 35 -37 6 0 10 25 10 55 0 62 -17 75 -22 18 l-3 -38 -23 38 c-13 20 -28 37 -33 37 -5 0 -9 -25 -9 -55z"/>
                      <path d="M1790 400 c0 -5 7 -10 15 -10 11 0 15 -13 17 -52 l2 -53 3 49 c3 37 8 49 24 53 33 9 21 23 -21 23 -22 0 -40 -4 -40 -10z"/>
                      <path d="M2042 398 c-20 -20 -14 -37 18 -53 17 -9 30 -20 30 -27 0 -6 -11 -8 -30 -4 -33 6 -42 -9 -10 -19 26 -8 62 12 58 33 -2 9 -16 23 -31 30 -34 16 -35 32 -1 32 14 0 23 4 19 10 -8 14 -38 13 -53 -2z"/>
                      <path d="M2196 391 c-25 -27 -17 -72 15 -90 24 -13 29 -13 53 2 34 22 36 69 4 91 -30 21 -51 20 -72 -3z m64 -16 c26 -31 -13 -82 -44 -56 -19 16 -21 57 -3 64 22 9 34 7 47 -8z"/>
                      <path d="M2370 355 c0 -30 5 -55 10 -55 6 0 10 9 10 20 0 13 7 20 20 20 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 5 20 10 0 6 -13 10 -30 10 -30 0 -30 -1 -30 -55z"/>
                      <path d="M2500 400 c0 -5 7 -10 15 -10 11 0 15 -12 15 -45 0 -25 5 -45 10 -45 6 0 10 20 10 45 0 33 4 45 15 45 8 0 15 5 15 10 0 6 -18 10 -40 10 -22 0 -40 -4 -40 -10z"/>
                      <path d="M2656 383 c17 -67 21 -77 32 -81 7 -2 15 9 18 27 8 39 19 39 30 0 5 -17 13 -31 18 -32 8 -2 35 79 36 106 0 20 -19 -6 -25 -33 -8 -36 -20 -32 -28 10 -9 40 -25 38 -33 -5 -3 -19 -10 -35 -14 -35 -4 0 -11 16 -14 35 -4 19 -11 35 -17 35 -5 0 -6 -12 -3 -27z"/>
                      <path d="M2876 364 c-20 -60 -21 -87 -2 -61 15 20 52 23 59 5 2 -7 7 -10 11 -7 9 9 -26 101 -40 106 -7 2 -19 -17 -28 -43z m43 -26 c1 -5 -6 -8 -14 -8 -15 0 -21 31 -8 44 7 6 20 -17 22 -36z"/>
                      <path d="M3030 355 c0 -30 5 -55 10 -55 6 0 10 7 10 15 0 22 15 18 33 -7 l16 -23 -1 30 c-1 17 2 37 6 46 9 22 -18 49 -50 49 -22 0 -24 -3 -24 -55z m55 15 c0 -8 -8 -16 -17 -18 -13 -2 -18 3 -18 18 0 15 5 20 18 18 9 -2 17 -10 17 -18z"/>
                      <path d="M3190 355 l0 -55 33 1 c23 1 26 3 10 6 -28 5 -30 33 -3 33 11 0 20 5 20 10 0 6 -9 10 -20 10 -11 0 -20 7 -20 15 0 8 9 15 20 15 11 0 20 5 20 10 0 6 -13 10 -30 10 -30 0 -30 -1 -30 -55z"/>
                    </g>
                  </mask>
                </defs>
                {/* Glow difuso pulsante detrás */}
                <rect width="350" height="150" fill="url(#logo-base)" mask="url(#logo-mask)" filter="url(#logo-glow)" opacity="0.6">
                  <animate attributeName="opacity" values="0.4;0.75;0.4" dur="3s" repeatCount="indefinite" />
                </rect>
                {/* Capa base sólida azul-cian */}
                <rect width="350" height="150" fill="url(#logo-base)" mask="url(#logo-mask)" />
                {/* Shine blanco que recorre las letras */}
                <rect width="350" height="150" fill="url(#logo-shine)" mask="url(#logo-mask)" />
              </svg>
            </div>
          </Link>

          {/* Nav links — desktop */}
          <div className="hidden md:flex items-center gap-1 animate-fade-in-delay">

            {/* Soluciones dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setSolutionsOpen((v) => !v)}
                className="flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-200"
                aria-expanded={solutionsOpen}
                aria-haspopup="true"
              >
                Soluciones
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${solutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-xl border border-border bg-card/95 backdrop-blur-lg shadow-xl shadow-primary/10 overflow-hidden">
                  <div className="p-2">
                    {solutions.map((s) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={s.href}
                          href={s.href}
                          onClick={() => setSolutionsOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors duration-150 group"
                        >
                          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-150">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-150">
                              {s.label}
                            </div>
                            <div className="text-xs text-muted-foreground leading-snug">
                              {s.description}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                  <div className="border-t border-border px-4 py-3 bg-secondary/30">
                    <Link
                      href="/#integrations"
                      onClick={() => setSolutionsOpen(false)}
                      className="text-xs text-muted-foreground hover:text-primary transition-colors"
                    >
                      Ver todas las integraciones →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#integrations"
              scroll={true}
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-200"
              onClick={(e) => {
                // Si ya estamos en la home, hacemos scroll directo sin recargar
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("integrations")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Integraciones
            </Link>

            <Link
              href="/pricing"
              className="px-3 py-2 rounded-md text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-200"
            >
              Precios
            </Link>
          </div>

          {/* CTA buttons — desktop */}
          <div className="hidden md:flex items-center gap-3 animate-fade-in-delay">
            <Button
              variant="ghost"
              className="text-sm hover:bg-primary/10 hover:text-primary transition-all duration-300"
              onClick={() => window.open("https://nexus.atomsolucionesit.com.ar", "_blank")}
            >
              Iniciar sesión
            </Button>
            <Button
              className="text-sm bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              onClick={() =>
                window.open(
                  "https://wa.me/543772430213?text=Hola,%20me%20interesa%20probar%20Nexus",
                  "_blank"
                )
              }
            >
              Probar Nexus
            </Button>
          </div>

          {/* Hamburger — mobile */}
          <button
            className="md:hidden p-2 rounded-md text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Abrir menú"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          <div className="container mx-auto px-4 py-4 space-y-1">
            <p className="px-3 py-1 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Soluciones
            </p>
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={handleMobileNav}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <Icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{s.label}</span>
                </Link>
              );
            })}
            <div className="border-t border-border pt-2 mt-2 space-y-1">
              <Link
                href="/#integrations"
                onClick={(e) => {
                  handleMobileNav();
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    document.getElementById("integrations")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-foreground transition-colors"
              >
                Integraciones
              </Link>
              <Link
                href="/pricing"
                onClick={handleMobileNav}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-foreground/80 hover:bg-primary/10 hover:text-foreground transition-colors"
              >
                Precios
              </Link>
            </div>
            <div className="border-t border-border pt-3 mt-2 flex flex-col gap-2">
              <Button
                variant="ghost"
                className="w-full justify-center"
                onClick={() => {
                  window.open("https://nexus.atomsolucionesit.com.ar", "_blank");
                  handleMobileNav();
                }}
              >
                Iniciar sesión
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-primary to-accent"
                onClick={() => {
                  window.open(
                    "https://wa.me/543772430213?text=Hola,%20me%20interesa%20probar%20Nexus",
                    "_blank"
                  );
                  handleMobileNav();
                }}
              >
                Probar Nexus
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
