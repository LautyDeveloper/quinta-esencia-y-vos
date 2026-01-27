"use client"

import Image from "next/image"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

export function AboutSection() {
  const { ref: tarotRef, isVisible: tarotVisible } = useScrollAnimation<HTMLDivElement>()
  const { ref: numRef, isVisible: numVisible } = useScrollAnimation<HTMLDivElement>()

  return (
    <section className="relative py-12 md:py-14 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Tarot Section */}
        <div
          ref={tarotRef}
          className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-14 transition-all duration-1000 ${tarotVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Content */}
          <div className={`transition-all duration-700 delay-100 ${tarotVisible ? 'translate-x-0' : '-translate-x-8'}`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Sobre las Lecturas
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              El Tarot como espejo del alma
            </h2>
            <div className="mt-5 space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                El tarot no predice el futuro de forma determinante. Es una herramienta
                de reflexion que nos ayuda a ver con mayor claridad las situaciones
                que atravesamos.
              </p>
              <p>
                Cada carta es un arquetipo, una energia universal que resuena con
                nuestras experiencias personales. Al interpretar los arcanos,
                abrimos un dialogo con nuestra intuicion mas profunda.
              </p>
              <p>
                Las sesiones duran aproximadamente <strong className="text-foreground">1 hora</strong> y se realizan
                de manera <strong className="text-foreground">online</strong>, creando un espacio intimo y comodo
                para la consulta.
              </p>
            </div>
          </div>

          {/* Tarot Image */}
          <div className={`relative transition-all duration-700 delay-300 ${tarotVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}>
            <div className="relative aspect-[3/4] max-w-sm mx-auto lg:mx-0 lg:ml-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
              <Image
                src="/images/tarot/two-of-wands.jpg"
                alt="Carta Two of Wands - Decisiones y nuevos caminos"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="text-lg font-semibold text-foreground">Two of Wands</h3>
                <p className="text-sm text-muted-foreground">Decisiones y nuevos caminos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Numerology Section */}
        <div
          ref={numRef}
          className={`mt-16 md:mt-20 grid items-center gap-10 lg:grid-cols-2 lg:gap-14 transition-all duration-1000 ${numVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Numerology Image */}
          <div className={`order-2 lg:order-1 relative transition-all duration-700 delay-300 ${numVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 group">
              <Image
                src="/images/numerology/sacred-numbers.jpg"
                alt="Numeros sagrados y geometria mistica"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Floating numbers decoration */}
            <div className="absolute -top-3 -right-3 grid grid-cols-3 gap-1.5">
              {[1, 2, 3].map((num, i) => (
                <div
                  key={num}
                  className="w-10 h-10 rounded-lg bg-card/80 backdrop-blur-sm border border-primary/20 flex items-center justify-center shadow-lg animate-float"
                  style={{ animationDelay: `${i * 0.2}s` }}
                >
                  <span className="text-base font-semibold text-primary">{num}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className={`order-1 lg:order-2 transition-all duration-700 delay-100 ${numVisible ? 'translate-x-0' : 'translate-x-8'}`}>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">
              Numerologia
            </span>
            <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Los numeros cuentan tu historia
            </h2>
            <div className="mt-5 space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
              <p>
                Cada numero tiene una vibracion unica y un significado profundo.
                Tu nombre y fecha de nacimiento contienen informacion valiosa sobre
                tus talentos, desafios y proposito de vida.
              </p>
              <p>
                A traves del estudio numerologico, podemos identificar patrones,
                ciclos personales y areas de oportunidad para tu desarrollo personal.
              </p>
            </div>

            {/* Numbers grid - more compact */}
            <div className="mt-6 grid grid-cols-3 gap-2">
              {[
                { num: 1, meaning: "Liderazgo" },
                { num: 2, meaning: "Armonia" },
                { num: 3, meaning: "Creatividad" },
                { num: 4, meaning: "Estabilidad" },
                { num: 5, meaning: "Libertad" },
                { num: 6, meaning: "Amor" },
                { num: 7, meaning: "Sabiduria" },
                { num: 8, meaning: "Abundancia" },
                { num: 9, meaning: "Humanidad" }
              ].map(({ num, meaning }, i) => (
                <div
                  key={num}
                  className="group flex flex-col items-center justify-center rounded-lg border border-border bg-card/50 backdrop-blur-sm p-2.5 transition-all hover:border-primary/30 hover:shadow-md hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">{num}</span>
                  <span className="text-xs text-muted-foreground">{meaning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
