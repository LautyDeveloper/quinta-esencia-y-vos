"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WHATSAPP_URL } from "@/lib/constants"
import { WhatsAppIcon } from "@/components/mystical-elements"

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/propuesta", label: "Propuesta" },
  { href: "/contacto", label: "Contacto" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
          <svg viewBox="0 0 40 40" className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1">
            <rect x="6" y="2" width="28" height="36" rx="2" />
            <text x="20" y="25" fontSize="11" fontWeight="700" fill="currentColor" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic">5E</text>
          </svg>
          <span className="text-xl font-semibold tracking-wide text-foreground">
            QuintaEsencia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="ml-4 gap-2">
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-4 w-4" />
              Agendá tu consulta
            </a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground md:hidden"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full gap-2">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                <WhatsAppIcon className="h-4 w-4" />
                Agendá tu consulta
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
