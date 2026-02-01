import type { Metadata } from "next"
import { ContactoContent } from "@/components/contacto/contacto-content"
import { SITE_URL } from "@/lib/constants"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Contacto | Quinta Esencia - Tarot y Numerología",
  description: "Ponte en contacto con Quinta Esencia para agendar tu consulta de Tarot o Numerología. Estamos aquí para acompañarte en tu viaje de autoconocimiento.",
  keywords: ["contacto tarot", "agendar consulta numerología", "tarot Berazategui", "lectura de cartas online"],
  authors: [{ name: "Quinta Esencia" }],
  alternates: {
    canonical: `${SITE_URL}/contacto`,
  },
  openGraph: {
    title: "Contacto | Quinta Esencia - Tarot y Numerología",
    description: "Inicia la conversación y descubre los mensajes que el universo tiene para ti.",
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
    description: "Conecta con nosotros vía WhatsApp o Instagram para iniciar tu proceso de transformación.",
    images: [`${SITE_URL}/images/contact-bg.jpg`],
  },
}

export default function ContactoPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contacto | Quinta Esencia",
    "description": "Página de contacto para agendar consultas de tarot y numerología.",
    "url": `${SITE_URL}/contacto`
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <ContactoContent />
    </>
  )
}
