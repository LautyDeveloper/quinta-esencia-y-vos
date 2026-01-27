"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Video, Shield, Check, Star, Sparkles, Moon } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_NUMBER = "5491100000000"
const WHATSAPP_MESSAGE = "Hola! Me gustaria agendar una consulta de tarot/numerologia."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const services = [
  {
    icon: Clock,
    title: "1 hora de sesión",
    description: "Tiempo dedicado exclusivamente a ti, para profundizar en cada mensaje de las cartas.",
    delay: 0
  },
  {
    icon: Video,
    title: "Consulta Online",
    description: "Conéctate desde tu espacio sagrado. La energía fluye sin importar la distancia.",
    delay: 150,
    featured: true // Middle card
  },
  {
    icon: Shield,
    title: "Espacio Seguro",
    description: "Confidencialidad absoluta. Un refugio para explorar tus luces y sombras sin juicio.",
    delay: 300
  }
]

const included = [
  "Lectura de Tarot / Numerología",
  "Análisis de patrones y bloqueos",
  "Consejos prácticos y rituales",
  "Grabación de la sesión (opcional)",
  "Seguimiento post-consulta"
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  return (
    <div className="relative group h-full">
      {/* Card Container - Solid Physical Look */}
      <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-xl bg-card/95 backdrop-blur-sm shadow-2xl transition-all duration-500 border border-primary/10 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]">

        {/* Subtle Texture Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        {/* Shine Effect */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -inset-full h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:animate-shine" />
        </div>

        {/* Content Container - Centered within the frame */}
        <div className="relative z-30 h-full flex flex-col items-center justify-center p-8 text-center pt-10 pb-12">

          {/* Icon Container - Glowing Indicator */}
          <div className="mb-8 relative group-hover:scale-110 transition-transform duration-500">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-background rounded-full p-4 border border-primary/20 shadow-lg">
              <service.icon className="h-8 w-8 text-primary" />
            </div>
          </div>

          {/* Title with ornamental dividers */}
          <div className="mb-4 flex flex-col items-center gap-3">
            <span className="text-2xl font-serif text-foreground tracking-wide font-medium">{service.title}</span>
            <div className="w-8 h-0.5 bg-primary/30 rounded-full" />
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            {service.description}
          </p>

          {/* Bottom detail */}
          <div className="mt-auto opacity-60 group-hover:opacity-100 transition-all duration-500">
            <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Detalles</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="flex justify-center items-center py-12 opacity-60">
      <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="relative w-12 h-12 mx-4">
        <Image src="/images/esoteric-divider.png" alt="" fill className="object-contain" />
      </div>
      <div className="h-px w-24 bg-gradient-to-l from-transparent via-primary/50 to-transparent" />
    </div>
  )
}

export default function PropuestaPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: includedRef, isVisible: includedVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/propuesta-hero.jpg"
            alt="Hero Background"
            fill
            className="object-cover opacity-60"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />

          {/* Grain Overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />
        </div>

        <div ref={heroRef} className={`relative z-10 max-w-4xl px-6 text-center transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6 animate-pulse">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-xs uppercase tracking-[0.2em] text-primary/80">Propuesta Exclusiva</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-8">
            <span className="block text-primary/90 drop-shadow-sm">El Espejo</span>
            <span className="block font-light italic">del Alma</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un espacio atemporal donde el tarot y la numerología dialogan para revelar tu verdad interior.
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1 text-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Agendar ahora
              </a>
            </Button>
            <span className="text-sm text-muted-foreground/60 uppercase tracking-widest">o descubre más abajo</span>
          </div>
        </div>

        {/* Decorative Floating Elements */}
        <div className="absolute top-1/4 left-10 animate-float opacity-20">
          <Moon className="w-12 h-12 text-primary" />
        </div>
        <div className="absolute bottom-1/4 right-10 animate-float-delayed opacity-20">
          <Star className="w-8 h-8 text-primary" />
        </div>
      </section>

      <SectionDivider />

      {/* Services Section - Clean Layout with Standalone Background */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden">

        {/* Mystical Background Image - Standalone Decorative Element */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="relative w-full h-full max-w-[1400px] max-h-[900px] opacity-20">
            <Image
              src="/images/mystical-card-border.png"
              alt=""
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Ambient Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -z-10" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">La Experiencia</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada sesión es diseñada meticulosamente para brindarte claridad y empoderamiento.
            </p>
          </div>

          <div
            ref={servicesRef}
            className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="w-full transition-all duration-500 ease-out hover:scale-105 hover:-translate-y-2"
                style={{
                  animationDelay: `${service.delay}ms`,
                  opacity: servicesVisible ? 1 : 0,
                  transform: servicesVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `all 0.6s ease-out ${service.delay}ms`
                }}
              >
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Included Section */}
      <section className="py-12 md:py-16 relative">
        <div ref={includedRef} className="max-w-6xl mx-auto px-6">
          <div className={`flex flex-col lg:flex-row gap-16 items-center transition-all duration-1000 ${includedVisible ? 'opacity-100' : 'opacity-0'}`}>

            {/* Left Content */}
            <div className="flex-1 space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                <span className="text-primary italic">Incluido</span> en tu<br />
                camino de descubrimiento
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nuestra propuesta va más allá de una simple lectura. Es un proceso integral diseñado para que te lleves herramientas tangibles.
              </p>

              <ul className="space-y-6">
                {included.map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center bg-secondary/30 group-hover:bg-primary/10 transition-colors">
                      <Check className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-lg font-light">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Visual */}
            <div className="flex-1 relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative circles */}
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 border border-dashed border-primary/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-secondary/80 backdrop-blur-xl rounded-full flex flex-col items-center justify-center text-center p-6 border border-primary/10 shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="text-5xl font-serif text-primary mb-2">1h</span>
                    <span className="text-sm uppercase tracking-widest text-muted-foreground">Sesión<br />Completa</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Important Info & CTA */}
      <section className="py-12 md:py-16 pb-24 md:pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-secondary/20 border border-primary/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h3 className="text-2xl font-serif mb-6 flex items-center justify-center gap-3">
              <Shield className="w-6 h-6 text-primary" />
              Nota Importante
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Las lecturas son herramientas de orientación. No reemplazan diagnósticos médicos, asesoría legal ni psicológica profesional.
            </p>

            <Button
              asChild
              size="lg"
              className="rounded-full bg-foreground text-background hover:bg-foreground/90 px-8 text-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Comenzar mi Viaje
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
