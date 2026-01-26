"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_NUMBER = "5491100000000"
const WHATSAPP_MESSAGE = "Hola! Me gustaria agendar una consulta de tarot/numerologia."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
const INSTAGRAM_URL = "https://instagram.com/quintaesenciayvos"

export default function ContactoPage() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/contact-bg.jpg"
          alt=""
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
          <svg 
            key={`star-${i}`}
            className="absolute text-primary/30 animate-twinkle"
            style={{ 
              left: `${8 + i * 8}%`, 
              top: `${15 + (i % 4) * 20}%`, 
              width: 6 + (i % 3) * 3, 
              height: 6 + (i % 3) * 3,
              animationDelay: `${i * 0.3}s`,
            }}
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
          </svg>
        ))}

        {/* Decorative circles */}
        <div className="absolute top-20 right-20 w-32 h-32 border border-primary/10 rounded-full" />
        <div className="absolute top-24 right-24 w-24 h-24 border border-primary/10 rounded-full" />
        <div className="absolute bottom-32 left-16 w-40 h-40 border border-accent/10 rounded-full" />
      </div>

      <div className="relative w-full mx-auto max-w-4xl px-6 py-24">
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
            Conectemos
          </h1>

          <p className="mt-6 mx-auto max-w-lg text-pretty text-lg text-muted-foreground">
            Estoy aqui para acompanarte en tu camino de autoconocimiento
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
              <div className="absolute -inset-3 bg-gradient-to-r from-teal-400/20 via-emerald-500/20 to-teal-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              {/* Decorative corner ornaments */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-teal-400/50 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-teal-400/50 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-teal-400/50 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-teal-400/50 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
              
              {/* Main button */}
              <div className="relative flex items-center gap-5 px-8 py-6 bg-gradient-to-br from-teal-900/80 via-emerald-900/80 to-teal-950/80 backdrop-blur-xl rounded-2xl border border-teal-500/30 shadow-lg shadow-teal-900/20 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-teal-500/20 group-hover:border-teal-400/50 group-hover:scale-105">
                
                {/* Icon container with glow */}
                <div className="relative">
                  <div className="absolute inset-0 bg-teal-400/30 rounded-full blur-md group-hover:bg-teal-400/50 transition-all" />
                  <div className="relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 shadow-lg shadow-teal-500/30">
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="text-left">
                  <p className="text-sm text-teal-300/80 font-medium">Escribeme por</p>
                  <p className="text-xl font-semibold text-white tracking-wide">WhatsApp</p>
                </div>

                {/* Arrow indicator */}
                <div className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-5 h-5 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
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
                    <svg viewBox="0 0 24 24" className="w-7 h-7 text-white fill-current">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>

                {/* Text */}
                <div className="text-left">
                  <p className="text-sm text-primary/80 font-medium">Sigueme en</p>
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
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-border" />
              <svg className="w-4 h-4 text-primary/50" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
              </svg>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-border" />
            </div>

            {/* Info card */}
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-md px-8 py-5">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground">Consultas <span className="text-foreground font-medium">100% Online</span></span>
              </div>
              <div className="hidden sm:block w-px h-4 bg-border" />
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
                <span className="text-sm text-muted-foreground">Duracion <span className="text-foreground font-medium">~1 hora</span></span>
              </div>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 text-base italic text-muted-foreground/80">
              "Las cartas no predicen el futuro, iluminan el presente"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
