"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Footer navigation">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 mb-10">

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Producto
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Sobre Nexus
                  </Link>
                </li>
                <li>
                  <Link href="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Funcionalidades
                  </Link>
                </li>
                <li>
                  <Link href="/#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Integraciones
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Precios
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Soluciones
              </p>
              <ul className="space-y-2">
                <li>
                  <Link href="/ferreteria" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Ferreterías
                  </Link>
                </li>
                <li>
                  <Link href="/importadora" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Importadoras
                  </Link>
                </li>
                <li>
                  <Link href="/mercadolibre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    MercadoLibre
                  </Link>
                </li>
                <li>
                  <Link href="/vinoteca" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Vinotecas
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Contacto
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://wa.me/543772430213?text=Hola,%20me%20interesa%20probar%20Nexus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    WhatsApp
                  </a>
                </li>
                <li>
                  <Link href="/#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Solicitar demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Acceso
              </p>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://nexus.atomsolucionesit.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Iniciar sesión
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </nav>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexus CRM. Todos los derechos reservados.</p>
          <p className="mt-2 text-xs">
            Software de Gestión Comercial Integral — POS, Stock y E-commerce
          </p>
        </div>
      </div>
    </footer>
  );
}
