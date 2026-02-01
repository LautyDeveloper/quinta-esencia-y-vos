"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { WHATSAPP_URL } from "@/lib/constants"
import { FloatingParticle, WhatsAppIcon } from "@/components/mystical-elements"

export function CTASection() {
  const { ref, isVisible } = useScrollAnimation<HTMLElement>()

  return (
    <section ref={ref} className="relative overflow-hidden py-12 md:py-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/consultation.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <FloatingParticle
            key={i}
            className="animate-float"
            left={`${15 + i * 15}%`}
            top={`${20 + (i % 3) * 25}%`}
            size={8}
            delay={i * 0.5}
            duration={4 + i}
          />
        ))}
      </div>

      <div className={`relative mx-auto max-w-4xl px-6 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm px-5 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-sm font-medium text-foreground">
            Tu Momento es Ahora
          </span>
        </div>

        <h2 className="mt-8 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          ¿Sientes el llamado a profundizar en tu propia historia?
        </h2>

        <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
          Permítete una pausa sagrada. Agenda tu sesión personalizada online y comienza el viaje de regreso a ti mism@.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-w-48 text-base gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="h-5 w-5" />
              Reservar mi Sesión
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="min-w-48 text-base bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary/10 hover:border-primary transition-all hover:scale-105">
            <Link href="/propuesta">Conocer la Propuesta</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
