"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { WHATSAPP_URL } from "@/lib/constants"
import { MysticalDivider } from "@/components/mystical-elements"
import { Check, Moon, Shield, Sparkles, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: "/images/reloj.png",
    title: "60 Minutos de Presencia Plena",
    description: "Tiempo sagrado dedicado exclusivamente a tu proceso, sin prisas, para profundizar en cada revelación.",
    delay: 0
  },
  {
    icon: "/images/camara.png",
    title: "Conexión Sin Fronteras",
    description: "Desde la intimidad de tu santuario. La energía trasciende la distancia física para encontrarnos en el plano sutil.",
    delay: 150,
    featured: true // Middle card
  },
  {
    icon: Shield,
    title: "Refugio de Confianza",
    description: "Un contenedor energético seguro y confidencial, libre de juicios, para que puedas explorar tus luces y sombras.",
    delay: 300
  }
]

const included = [
  "Lectura profunda de Tarot y Numerología",
  "Descodificación de patrones limitantes",
  "Rituales y guías prácticas de acción",
  "Grabación de la sesión (opcional)",
  "Acompañamiento post-sesión"
]

function ServiceCard({ service }: { service: typeof services[0] }) {
  const altTexts: Record<string, string> = {
    "/images/reloj.png": "Icono de reloj representando tiempo sagrado",
    "/images/camara.png": "Icono de cámara representando conexión virtual"
  };

  return (
    <div className="relative group h-full">
      {/* Card Container - Solid Physical Look */}
      <div className="relative h-full min-h-[260px] w-full overflow-hidden rounded-xl bg-card/95 backdrop-blur-sm shadow-2xl transition-all duration-500 border border-primary/10 group-hover:border-primary/40 group-hover:shadow-[0_0_40px_-10px_hsl(var(--primary)/0.2)]">

        {/* Subtle Texture Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />

        {/* Shine Effect */}
        <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
          <div className="absolute top-0 -inset-full h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:animate-shine" />
        </div>

        {/* Content Container - Centered within the frame */}
        <div className="relative z-30 h-full flex flex-col items-center justify-center p-6 text-center">

          {/* Icon Container - Glowing Indicator */}
          <div className="mb-8 relative group-hover:scale-110 transition-transform duration-500">
            <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-background rounded-full p-4 border border-primary/20 shadow-lg">
              {typeof service.icon === 'string' ? <Image src={service.icon} alt={altTexts[service.icon] || service.title} width={60} height={60} className="text-primary rounded-full" /> : <service.icon className="h-8 w-8 text-primary" />}
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

        </div>
      </div>
    </div>
  )
}

function SectionDivider() {
  return (
    <div className="py-12 opacity-60">
      <MysticalDivider />
    </div>
  )
}

export function PropuestaContent() {
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
            alt="Sesión de tarot y numerología en un ambiente místico y relajado"
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
            <span className="text-xs uppercase tracking-[0.2em] text-primary/80">Tu Experiencia Sagrada</span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground mb-8">
            <span className="block text-primary/90 drop-shadow-sm">El Reflejo</span>
            <span className="block font-light italic">de tu Esencia</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Un umbral hacia tu interior, donde el lenguaje simbólico del Tarot y los Números te revelan tu propia sabiduría.
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(234,179,8,0.2)] hover:shadow-[0_0_30px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1 text-lg"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Comenzar mi Transformación
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

      {/* Services Section - Balanced Layout: Large Image + Stacked Cards */}
      <section className="relative py-16 md:py-20 px-6 overflow-hidden">

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">El Viaje Compartido</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Cada encuentro es un ritual de claridad, diseñado para devolverte el poder sobre tu propia narrativa.
            </p>
          </div>

          <div
            ref={servicesRef}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 transition-all duration-1000 ${servicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {/* Left Side - Large Mystical Image Card */}
            <div
              className="transition-all duration-700 ease-out hover:scale-[1.02] hover:z-10"
              style={{
                animationDelay: '0ms',
                opacity: servicesVisible ? 1 : 0,
                transform: servicesVisible ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out 0ms'
              }}
            >
              <div className="relative h-full min-h-[350px] lg:min-h-[450px] w-full overflow-hidden rounded-2xl border border-primary/20 shadow-2xl hover:border-primary/40 hover:shadow-[0_0_50px_-10px_hsl(var(--primary)/0.4)] transition-all duration-500">
                <Image
                  src="/images/mystical-card-border.png"
                  alt="Cartas de tarot dispuestas artísticamente para una lectura evolutiva"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                  <div className="space-y-3">
                    <div className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm border border-primary/20 flex items-center justify-center mb-3">
                      <Sparkles className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-serif text-foreground">Lectura de Tarot Evolutivo</h3>
                    <p className="text-muted-foreground text-sm md:text-base max-w-md">
                      Más que predicción, es orientación. Las cartas despejan la niebla para que puedas ver los senderos que se abren ante ti con lucidez.
                    </p>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-6 right-6 w-12 h-12 border-r-2 border-t-2 border-primary/30 rounded-tr-lg" />
              </div>
            </div>

            {/* Right Side - Two Service Cards Stacked */}
            <div className="flex flex-col gap-5 md:gap-6">
              {/* Card 1 - Top */}
              <div
                className="transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:z-10"
                style={{
                  animationDelay: '150ms',
                  opacity: servicesVisible ? 1 : 0,
                  transform: servicesVisible ? 'translateX(0)' : 'translateX(30px)',
                  transition: 'all 0.6s ease-out 150ms'
                }}
              >
                <ServiceCard service={services[0]} />
              </div>

              {/* Card 2 - Bottom */}
              <div
                className="transition-all duration-500 ease-out hover:scale-[1.02] hover:-translate-y-1 hover:z-10"
                style={{
                  animationDelay: '300ms',
                  opacity: servicesVisible ? 1 : 0,
                  transform: servicesVisible ? 'translateX(0)' : 'translateX(30px)',
                  transition: 'all 0.6s ease-out 300ms'
                }}
              >
                <ServiceCard service={services[1]} />
              </div>
            </div>
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
                <span className="text-primary italic">Lo que te llevas</span> de este<br />
                Encuentro
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Esta experiencia trasciende la lectura; es una inmersión profunda que te equipa con herramientas para tu vida cotidiana.
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
