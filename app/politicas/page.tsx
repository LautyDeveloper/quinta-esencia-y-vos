import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Shield } from "lucide-react"

export const metadata = {
  title: "Políticas | Quintaesencia y Vos",
  description: "Políticas y lineamientos para las consultas de tarot y numerología."
}

export default function PoliticasPage() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        {/* Back Link */}
        <Button asChild variant="ghost" className="mb-8 -ml-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver al inicio
          </Link>
        </Button>

        {/* Header */}
        <div className="mb-12">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2">
            <Shield className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Código de Ética
            </span>
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Acuerdos y Ética Profesional
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Fundamentos para cuidar nuestro espacio sagrado de consulta.
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-stone max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight">
          <h2>La Naturaleza del Encuentro</h2>
          <p>
            Las consultas de tarot y numerología son herramientas de reflexión, autoconocimiento
            y desarrollo personal. <strong>Nos alejamos del determinismo. Aquí no adivinamos tu futuro; te empoderamos para que lo construyas.</strong>
          </p>
          <p>
            El tarot y la numerología nos ayudan a:
          </p>
          <ul>
            <li>Reflexionar sobre nuestra situación actual</li>
            <li>Explorar diferentes perspectivas y posibilidades</li>
            <li>Conectar con nuestra intuición y sabiduría interior</li>
            <li>Identificar patrones y áreas de crecimiento</li>
          </ul>

          <h2>Límites del Servicio</h2>
          <p>
            Por ética profesional y responsabilidad, hay ciertos temas que
            <strong> no se abordan</strong> en las consultas:
          </p>

          <h3>Salud</h3>
          <p>
            No se responden preguntas sobre diagnósticos, tratamientos o condiciones de salud.
            Para estos temas, siempre debes consultar con profesionales médicos calificados.
          </p>

          <h3>Problemas legales</h3>
          <p>
            No se brinda asesoramiento sobre asuntos legales, juicios, contratos o situaciones
            que requieran la intervención de abogados u otros profesionales del derecho.
          </p>

          <h3>Terceras personas</h3>
          <p>
            No se realizan lecturas sobre terceras personas sin su consentimiento. La excepción
            son las consultas sobre vínculos personales (pareja, familia, amistades), donde
            exploramos la dinámica de la relación desde tu perspectiva.
          </p>

          <h2>Tu Privacidad es Sagrada</h2>
          <p>
            Todo lo que se comparte durante las consultas es estrictamente confidencial.
            No se graba ni se comparte información personal con terceros.
          </p>

          <h2>Cancelaciones y reprogramaciones</h2>
          <p>
            Si necesitas cancelar o reprogramar tu consulta, te pido que me avises con al
            menos 24 horas de anticipación. Esto permite reorganizar la agenda y ofrecer
            ese espacio a otra persona.
          </p>

          <h2>Soberanía Personal</h2>
          <p>
            Tú eres el/la arquitecto/a de tu destino. Las cartas sugieren, pero tu libre albedrío decide. Honramos tu poder de elección.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-xl border border-border bg-secondary/50 p-8 text-center">
          <h3 className="text-xl font-semibold text-foreground">¿Tienes alguna pregunta?</h3>
          <p className="mt-2 text-muted-foreground">
            Si tienes dudas sobre las políticas o el proceso de consulta, no dudes en contactarme.
          </p>
          <Button asChild className="mt-6">
            <Link href="/contacto">Contactar</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
