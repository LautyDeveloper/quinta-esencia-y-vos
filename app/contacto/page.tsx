import type { Metadata } from "next"
import { ContactoContent } from "@/components/contacto/contacto-content"
import { SITE_URL } from "@/lib/constants"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Contacto | Quinta Esencia - Tarot y Numerología",
  description: "Ponete en contacto con Quinta Esencia para agendar tu consulta de Tarot o Numerología. Estamos aquí para acompañarte en tu viaje de autoconocimiento.",
  keywords: ["contacto Tarot", "agendar consulta Numerología", "Tarot Berazategui", "lectura de cartas online"],
  authors: [{ name: "Quinta Esencia" }],
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: "Contacto | Quinta Esencia - Tarot y Numerología",
    description: "Iniciá la conversación y descubrí los mensajes que el universo tiene para vos.",
    url: `${SITE_URL}/contacto`,
    siteName: "Quinta Esencia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/contact-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Contacto Quinta Esencia",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Quinta Esencia - Tarot y Numerología",
    description: "Conectá con nosotros vía WhatsApp o Instagram para iniciar tu proceso de transformación.",
    images: [`${SITE_URL}/images/contact-bg.jpg`],
  },
}

export default function ContactoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto | Quinta Esencia",
    "description": "Página de contacto para agendar consultas de Tarot y Numerología.",
    "url": `${SITE_URL}/contacto`
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactoContent />
    </>
  )
}
