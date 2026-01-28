"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import { WHATSAPP_URL } from "@/lib/constants"
import { FloatingParticle, StarParticle, WhatsAppIcon } from "@/components/mystical-elements"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / 50,
          y: (e.clientY - rect.top - rect.height / 2) / 50,
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-[90vh] overflow-hidden flex items-center">
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.1)` }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
      </div>

      {/* Floating Particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <FloatingParticle delay={0} duration={4} size={6} left="10%" top="20%" />
        <FloatingParticle delay={1} duration={5} size={4} left="20%" top="60%" />
        <FloatingParticle delay={2} duration={6} size={8} left="80%" top="30%" />
        <FloatingParticle delay={0.5} duration={4.5} size={5} left="70%" top="70%" />
        <FloatingParticle delay={1.5} duration={5.5} size={3} left="30%" top="80%" />
        <FloatingParticle delay={2.5} duration={4} size={7} left="90%" top="50%" />
        <FloatingParticle delay={3} duration={5} size={4} left="5%" top="40%" />

        <StarParticle delay={0} left="15%" top="25%" size={12} />
        <StarParticle delay={1.5} left="85%" top="20%" size={16} />
        <StarParticle delay={0.8} left="75%" top="75%" size={10} />
        <StarParticle delay={2} left="25%" top="70%" size={14} />
        <StarParticle delay={2.5} left="50%" top="15%" size={8} />
        <StarParticle delay={1} left="60%" top="85%" size={12} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col items-center text-center">
          {/* Badge */}
          <div
            className={`mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm px-5 py-2.5 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium text-foreground">
              Tarot y Numerologia
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`max-w-4xl text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Descubre un mundo de{" "}
            <span className="text-primary relative">
              posibilidades
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 200 12" preserveAspectRatio="none">
                <path d="M0,6 Q50,0 100,6 T200,6" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p
            className={`mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            Las cartas del tarot nos traen mensajes, nos muestran caminos y nos invitan a
            reflexionar. La numerologia revela tus talentos personales a traves de tu nombre
            y fecha de nacimiento.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-10 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <Button asChild size="lg" className="min-w-48 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-5 w-5" />
                Agendar Consulta
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-w-48 text-base bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary transition-all hover:scale-105">
              <Link href="/propuesta">Conocer mas</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div
            className={`mt-16 flex flex-wrap items-center justify-center gap-8 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="h-12 w-px bg-border" />
            <div className="flex flex-col items-center group">
              <span className="text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">1 hora</span>
              <span className="text-sm text-muted-foreground">Por sesion</span>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="flex flex-col items-center group">
              <span className="text-3xl font-semibold text-foreground group-hover:text-primary transition-colors">Online</span>
              <span className="text-sm text-muted-foreground">Consultas virtuales</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
