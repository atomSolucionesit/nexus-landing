export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-xl font-bold text-foreground">Nexus</h3>
            <p className="text-sm text-muted-foreground">
              Sistema completo de gestión y control de stock para tu negocio.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Producto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Características
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Precios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Integraciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Actualizaciones
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Empresa</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Casos de éxito
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-4 font-semibold text-foreground">Soporte</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Centro de ayuda
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Estado del sistema
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nexus. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
