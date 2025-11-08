"use client";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12" role="contentinfo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Footer navigation">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a 
              href="#about" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Ir a la sección Sobre Nexus"
            >
              Sobre Nexus
            </a>
            <a 
              href="#features" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Ir a la sección Funcionalidades"
            >
              Funcionalidades
            </a>
            <a 
              href="#integrations" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Ir a la sección Integraciones"
            >
              Integraciones
            </a>
            <a 
              href="#demo" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Ir a la sección de Contacto"
            >
              Contacto
            </a>
          </div>
        </nav>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Nexus CRM. Todos los derechos
            reservados.
          </p>
          <p className="mt-2 text-xs">
            Software de Gestión Comercial Integral - POS, Stock y E-commerce
          </p>
        </div>
      </div>
    </footer>
  );
}
