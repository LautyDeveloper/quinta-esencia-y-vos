"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const services = [
  {
    id: "tarot",
    title: "Lecturas de Tarot",
    description: "Las cartas nos traen mensajes, nos muestran caminos posibles y nos invitan a reflexionar sobre nuestras decisiones.",
    icon: (
      <svg viewBox="0 0 40 40" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1">
        <rect x="8" y="4" width="24" height="32" rx="2" />
        <circle cx="20" cy="20" r="8" />
        <path d="M20 12v16M12 20h16" />
        <circle cx="20" cy="20" r="3" fill="currentColor" />
      </svg>
    ),
    size: "large"
  },
  {
    id: "numerologia",
    title: "Numerologia Personal",
    description: "Descubre tus talentos a traves del estudio de los numeros en tu nombre y fecha de nacimiento.",
    icon: (
      <img src="images/nueve.png" alt="" className="rounded-full" />
    ),
    size: "small"
  },
  {
    id: "fecha",
    title: "Estudio de Fecha de Nacimiento",
    description: "Tu fecha revela informacion sobre tu camino de vida, desafios y oportunidades.",
    icon: (
      <img src="images/calendario.png" alt="" className="rounded-full" />
    ),
    size: "small"
  },
  {
    id: "vinculos",
    title: "Analisis de Vinculos",
    description: "Explora la dinamica de tus relaciones personales y comprende mejor las conexiones que tienes con las personas importantes.",
    icon: (
      <img src="images/vinculos.png" alt="" className="rounded-full" />

    ),
    size: "medium"
  }
]

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()

  const sizeClasses = {
    large: "md:col-span-2 md:row-span-2",
    medium: "md:col-span-2",
    small: "md:col-span-1"
  }

  const isLarge = service.size === 'large'

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group relative ${sizeClasses[service.size as keyof typeof sizeClasses]} transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Card */}
      <div className={`relative h-full overflow-hidden rounded-2xl border border-border/50 backdrop-blur-sm transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 ${isLarge ? 'p-8 md:p-10' : 'p-6 md:p-8 bg-gradient-to-br from-card via-card to-card/80'}`}>

        {/* Background Image for Large Card */}
        {isLarge && (
          <>
            <Image
              src="/images/tarot/tarot-spread.jpg"
              alt=""
              fill
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500" />
          </>
        )}

        {/* Decorative corner ornaments */}
        <div className={`absolute top-3 left-3 w-6 h-6 border-t border-l ${isLarge ? 'border-white/60' : 'border-primary/20'} rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        <div className={`absolute top-3 right-3 w-6 h-6 border-t border-r ${isLarge ? 'border-white/60' : 'border-primary/20'} rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        <div className={`absolute bottom-3 left-3 w-6 h-6 border-b border-l ${isLarge ? 'border-white/60' : 'border-primary/20'} rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300`} />
        <div className={`absolute bottom-3 right-3 w-6 h-6 border-b border-r ${isLarge ? 'border-white/60' : 'border-primary/20'} rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-300`} />

        {/* Background glow on hover (non-large) */}
        {!isLarge && (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}

        {/* Floating decorative element (non-large) */}
        {!isLarge && (
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />
        )}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          {/* Icon */}
          <div className={`${isLarge ? 'w-16 h-16 md:w-20 md:h-20 text-white/90' : 'w-12 h-12 md:w-14 md:h-14 text-primary/70'} group-hover:text-primary transition-colors duration-500 mb-6 [&>img]:drop-shadow-[2px_4px_6px_rgba(0,0,0,0.5)] [&>img]:group-hover:drop-shadow-[0_0_12px_rgba(147,51,234,0.5),0_0_20px_rgba(59,130,246,0.3),0_0_30px_rgba(99,102,241,0.2)] [&>img]:transition-all [&>img]:duration-1000`}>
            {service.icon}
          </div>

          {/* Title */}
          <h3 className={`${isLarge ? 'text-2xl md:text-3xl text-white' : 'text-xl md:text-2xl text-foreground'} font-semibold mb-3 group-hover:text-primary transition-colors duration-300`}>
            {service.title}
          </h3>

          {/* Description */}
          <p className={`${isLarge ? 'text-base md:text-lg text-white/80' : 'text-sm md:text-base text-muted-foreground'} leading-relaxed flex-grow`}>
            {service.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative bg-gradient-to-b from-background via-secondary/20 to-background py-12 md:py-16 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-12 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <svg className="w-5 h-5 text-primary/60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
              <div className="w-8 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>

          <span className="text-sm font-semibold uppercase tracking-wider text-primary">
            Servicios
          </span>
          <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Herramientas para tu crecimiento
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
            Cada consulta es un espacio de reflexion y autoconocimiento,
            utilizando herramientas ancestrales con un enfoque moderno.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* Policies Note */}
        <div className="mt-10 relative">
          <div className="relative rounded-xl border border-border/50 bg-card/30 backdrop-blur-sm p-5 md:p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-primary animate-pulse" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">
                  Importante
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  No se responden preguntas sobre: <span className="text-foreground">Salud</span>, <span className="text-foreground">Problemas legales</span>,
                  ni sobre <span className="text-foreground">terceras personas</span> (excepto consultas sobre vinculos personales).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
