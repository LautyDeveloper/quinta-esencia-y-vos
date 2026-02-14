import type { Metadata } from "next"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/services-section"
import { AboutSection } from "@/components/home/about-section"
import { CTASection } from "@/components/home/cta-section"
import { SITE_URL } from "@/lib/constants"
import JsonLd from "@/components/json-ld"

export const metadata: Metadata = {
  title: "Quinta Esencia | Lecturas de Tarot y Numerología",
  description: "Descubrí tu camino con Quinta Esencia. Ofrecemos lecturas de Tarot evolutivo y Numerología personal en Berazategui y online. ¡Iniciá tu viaje hoy!",
  keywords: ["Tarot", "Numerología", "Berazategui", "lectura de cartas", "autoconocimiento", "crecimiento personal", "Buenos Aires"],
  authors: [{ name: "Quinta Esencia" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Quinta Esencia | Lecturas de Tarot y Numerología",
    description: "Herramientas para tu crecimiento personal y toma de decisiones a través del Tarot y la Numerología.",
    url: SITE_URL,
    siteName: "Quinta Esencia",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/hero-bg.jpg`,
        width: 1200,
        height: 630,
        alt: "Quinta Esencia - Tarot y Numerología",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quinta Esencia | Lecturas de Tarot y Numerología",
    description: "Descubrí un mundo de posibilidades con lecturas de Tarot y Numerología.",
    images: [`${SITE_URL}/images/hero-bg.jpg`],
  },
}

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Quinta Esencia - Lecturas de Tarot y Numerología",
    "description": "Descubrí tu camino con Quinta Esencia. Ofrecemos lecturas de Tarot evolutivo y Numerología personal en Berazategui y online.",
    "url": SITE_URL,
    "telephone": "+5491100000000",
    "email": "quintaesenciayvos@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Capital Federal",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "sameAs": [
      "https://www.instagram.com/5esenciayvos?igsh=MWhxYjEzbmY0dGw4"
    ]
  }

  return (
    <>
      <JsonLd data={jsonLd} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <CTASection />
    </>
  )
}
