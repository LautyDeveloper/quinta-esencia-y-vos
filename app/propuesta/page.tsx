import type { Metadata } from "next"
import { PropuestaContent } from "@/components/propuesta/propuesta-content"
import { SITE_URL } from "@/lib/constants"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Propuesta de Lecturas de Tarot y Numerología | Quinta Esencia",
  description: "Conoce nuestra propuesta de sesiones personalizadas de Tarot y Numerología. Un viaje de autoconocimiento y claridad para tu evolución personal.",
  keywords: ["lectura de tarot", "numerología", "autoconocimiento", "crecimiento personal", "sesión online", "tarot evolutivo"],
  authors: [{ name: "Quinta Esencia" }],
  alternates: {
    canonical: `${SITE_URL}/propuesta`,
  },
  openGraph: {
    title: "Propuesta de Lecturas de Tarot y Numerología | Quinta Esencia",
    description: "Un umbral hacia tu interior, donde el lenguaje simbólico del Tarot y los Números te revelan tu propia sabiduría.",
    url: `${SITE_URL}/propuesta`,
    siteName: "Quinta Esencia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/propuesta-hero.jpg`,
        width: 1200,
        height: 630,
        alt: "Propuesta de Quinta Esencia - Tarot y Numerología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Propuesta de Lecturas de Tarot y Numerología | Quinta Esencia",
    description: "Descubre lo que las cartas y los números tienen para revelarte en nuestras sesiones personalizadas.",
    images: [`${SITE_URL}/images/propuesta-hero.jpg`],
  },
}

export default function PropuestaPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Lectura de Tarot y Numerología",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Quinta Esencia"
    },
    "description": "Sesiones personalizadas de Tarot Evolutivo y Numerología para el autoconocimiento y la claridad personal.",
    "url": `${SITE_URL}/propuesta`
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <PropuestaContent />
    </>
  )
}
