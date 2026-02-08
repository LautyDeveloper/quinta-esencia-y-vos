"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { WHATSAPP_URL, INSTAGRAM_URL } from "@/lib/constants"
import { StarParticle, MysticalDivider, WhatsAppIcon, InstagramIcon } from "@/components/mystical-elements"

export function ContactoContent() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg"
          alt="Fondo místico con elementos celestiales para la página de contacto"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95" />
      </div>

      {/* Floating mystical elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

        {/* Stars */}
        {[...Array(12)].map((_, i) => (
          <StarParticle
            key={`star-${i}`}
            className="text-primary/30"
            left={`${8 + i * 8}%`}
            top={`${15 + (i % 4) * 20}%`}
            size={6 + (i % 3) * 3}
            delay={i * 0.3}
          />
        ))}

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute top-24 right-24 w-24 h-24 border border-primary/10 rounded-full" />
        <div className="absolute bottom-32 left-16 w-40 h-40 border border-accent/10 rounded-full" />
      </div>

      <div className="relative w-full mx-auto max-w-4xl px-6 py-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

          {/* Decorative top element */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg className="w-16 h-16 text-primary/60" viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="0.5" />
                <path d="M50 5 L50 95 M5 50 L95 50" stroke="currentColor" strokeWidth="0.5" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Iniciá la Conversación
          </h1>

          <p className="mt-6 mx-auto max-w-lg text-pretty text-lg text-muted-foreground">
            Estoy aquí para acompañarte a descifrar los mensajes que el universo tiene para vos.
          </p>

          {/* Contact Buttons - REDESIGNED */}
          <div className={`mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>

            {/* WhatsApp Button - Premium Mystical Design */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Decorative corner ornaments */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Main button */}
              <div className="relative flex items-center gap-5 px-8 py-6 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-950/80 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-lg shadow-primary/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/50 group-hover:scale-105">

                {/* Icon container with glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:bg-primary/50 transition-all" />
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
                    <WhatsAppIcon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="text-left">
                  <p className="text-sm text-primary/80 font-medium">Conectá vía</p>
                  <p className="text-xl font-semibold text-white tracking-wide">WhatsApp</p>
                </div>

                {/* Arrow indicator */}
                <div className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            {/* Decorative divider for mobile */}
            <div className="hidden sm:flex items-center">
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-border to-transparent" />
            </div>

            {/* Instagram Button - Premium Mystical Design */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              {/* Outer glow ring */}
              <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

              {/* Decorative corner ornaments */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-primary/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-primary/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-primary/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-primary/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Main button */}
              <div className="relative flex items-center gap-5 px-8 py-6 bg-gradient-to-br from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-lg shadow-primary/10 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 group-hover:border-primary/50 group-hover:scale-105">

                {/* Icon container with glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/30 rounded-full blur-md group-hover:bg-primary/50 transition-all" />
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
                    <InstagramIcon className="w-7 h-7 text-white" />
                  </div>
                </div>

                {/* Text */}
                <div className="text-left">
                  <p className="text-sm text-primary/80 font-medium">Inspirate en</p>
                  <p className="text-xl font-semibold text-foreground tracking-wide">Instagram</p>
                </div>

                {/* Arrow indicator */}
                <div className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Decorative bottom element */}
          <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Ornamental line */}
            <MysticalDivider className="mb-8" />

            {/* Info card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Sesiones <span className="text-foreground font-medium">Virtuales</span></span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-sm text-muted-foreground">Duración <span className="text-foreground font-medium">~1 hora</span></span>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 text-base italic text-muted-foreground/80">
              "El futuro no está escrito en piedra; se esculpe con la consciencia del presente."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
