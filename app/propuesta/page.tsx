"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Video, Shield, Check } from "lucide-react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

const WHATSAPP_NUMBER = "5491100000000"
const WHATSAPP_MESSAGE = "Hola! Me gustaria agendar una consulta de tarot/numerologia."
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

const features = [
  {
    icon: Clock,
    title: "1 hora de sesion",
    description: "Tiempo suficiente para una lectura profunda y significativa, con espacio para tus preguntas."
  },
  {
    icon: Video,
    title: "Consulta online",
    description: "Desde la comodidad de tu hogar, a traves de videollamada en la plataforma de tu preferencia."
  },
  {
    icon: Shield,
    title: "Espacio seguro",
    description: "Un ambiente de confidencialidad y respeto donde puedes explorar sin juicios."
  }
]

const included = [
  "Lectura completa de tarot o estudio numerologico",
  "Interpretacion personalizada segun tu situacion",
  "Espacio para preguntas y reflexion",
  "Herramientas practicas para aplicar en tu vida",
  "Grabacion de la sesion (opcional)"
]

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>()
  
  return (
    <div 
      ref={ref}
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <CardHeader>
          <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
            <feature.icon className="h-7 w-7" />
          </div>
          <CardTitle className="text-xl">{feature.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{feature.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}

export default function PropuestaPage() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: includedRef, isVisible: includedVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: notesRef, isVisible: notesVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/propuesta-hero.jpg"
            alt=""
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 animate-float"
              style={{
                left: `${10 + i * 12}%`,
                top: `${15 + (i % 4) * 20}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${5 + i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div ref={heroRef} className="relative mx-auto max-w-6xl px-6 py-24">
          <div className={`max-w-2xl transition-all duration-1000 ${heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/80 backdrop-blur-sm px-5 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="text-sm font-medium text-foreground">
                Mi Propuesta
              </span>
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Un espacio para tu{" "}
              <span className="text-primary">crecimiento personal</span>
            </h1>
            <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
              Las consultas son un encuentro intimo donde utilizamos el tarot y la numerologia 
              como herramientas para la reflexion, el autoconocimiento y la toma de decisiones.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="mt-8 gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Agenda tu consulta
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6">
          <div ref={includedRef} className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className={`transition-all duration-700 ${includedVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                La Consulta
              </span>
              <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                Que incluye cada sesion?
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Cada consulta es unica porque tu eres unico. Sin embargo, hay elementos 
                que siempre estan presentes para garantizar una experiencia valiosa.
              </p>
              <ul className="mt-8 space-y-4">
                {included.map((item, i) => (
                  <li 
                    key={item} 
                    className={`flex items-start gap-3 transition-all duration-500`}
                    style={{ transitionDelay: `${i * 100 + 200}ms` }}
                  >
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-4 w-4" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`transition-all duration-700 delay-200 ${includedVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-8 md:p-10 shadow-xl">
                <span className="text-sm font-semibold uppercase tracking-wider text-primary">
                  Tipos de Consulta
                </span>
                <div className="mt-6 space-y-4">
                  {[
                    { title: "Lectura de Tarot", desc: "Exploracion de tu situacion actual, posibilidades y caminos a traves de los arcanos." },
                    { title: "Estudio Numerologico", desc: "Analisis profundo de tu nombre y fecha de nacimiento para revelar talentos y ciclos personales." },
                    { title: "Consulta Combinada", desc: "Una sesion que integra ambas herramientas para una vision mas completa." }
                  ].map((type, i) => (
                    <div 
                      key={type.title}
                      className="rounded-xl border border-border bg-secondary/50 p-5 transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <h3 className="text-lg font-semibold text-foreground">{type.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="bg-secondary/30 py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
        </div>
        <div ref={notesRef} className="relative mx-auto max-w-6xl px-6">
          <div className={`mx-auto max-w-3xl transition-all duration-700 ${notesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Importante
            </span>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Lo que debes saber
            </h2>
            <div className="mt-8 space-y-6 text-lg text-muted-foreground">
              <p>
                Las consultas de tarot y numerologia son <strong className="text-foreground">herramientas de reflexion 
                y autoconocimiento</strong>. No reemplazan el consejo profesional en areas especificas.
              </p>
              <div className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 shadow-lg">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                  No se responden preguntas sobre:
                </h3>
                <ul className="mt-4 space-y-3">
                  {[
                    "Temas de salud (consulta siempre a profesionales medicos)",
                    "Problemas legales (acude a abogados especializados)",
                    "Terceras personas (excepto consultas sobre vinculos)"
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-destructive/60" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                Esto no es una limitacion, es un compromiso con la etica y con tu bienestar. 
                Las cartas y los numeros nos hablan de ti y de tu camino.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Listo para comenzar?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Agenda tu consulta y comienza tu viaje de autoconocimiento.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="mt-8 gap-2 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all hover:scale-105"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar por WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
