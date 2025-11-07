"use client";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Sobre Nexus
          </a>
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </a>
          <a href="#integrations" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Integraciones
          </a>
          <a href="#demo" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contacto
          </a>
        </div>

        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Nexus CRM. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
