import Link from "next/link"
import { Sparkles, Instagram } from "lucide-react"
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_USER } from "@/lib/constants"
import { WhatsAppIcon } from "@/components/mystical-elements"

const footerLinks = {
  navegacion: [
    { href: "/", label: "Inicio" },
    { href: "/propuesta", label: "Propuesta" },
    { href: "/contacto", label: "Contacto" },
  ],
  legal: [
    { href: "/politicas", label: "Politicas" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/50">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 group">
              <Sparkles className="h-6 w-6 text-primary transition-transform group-hover:rotate-12" />
              <span className="text-xl font-semibold tracking-wide text-foreground">
                Quintaesencia y Vos
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted-foreground">
              Descubre un mundo de posibilidades a traves del tarot y la numerologia.
              Herramientas para tu crecimiento personal y toma de decisiones.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-green-600 hover:text-white hover:scale-110"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Navegacion
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.navegacion.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Contacto
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground transition-colors hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-muted-foreground transition-colors hover:text-primary"
                >
                  {INSTAGRAM_USER}
                </a>
              </li>
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {new Date().getFullYear()} Quintaesencia y Vos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
