# Informe de Correcciones Ortográficas y de Estilo - Quinta Esencia

A continuación se detallan las correcciones realizadas en el sitio, abarcando ortografía, acentuación, puntuación y la adaptación al español rioplatense (voseo) según lo solicitado.

## Resumen de Cambios Globales
- **Capitalización:** Se estandarizó el uso de mayúsculas en "Tarot", "Numerología", "Quinta Esencia" y "Números" (cuando refiere a la disciplina/arquetipos).
- **Voseo:** Se reemplazaron todas las formas de "tú" por "vos" y se ajustaron los imperativos (Descubre -> Descubrí, Agenda -> Agendá, etc.).
- **Puntuación:** Se agregaron los signos de apertura (¿, ¡) faltantes en varias secciones.
- **Botones y CTAs:** Se actualizaron todos los botones para utilizar el imperativo rioplatense (voseo), eliminando los infinitivos neutrales.

## Detalle de Correcciones

| UBICACIÓN | TEXTO ORIGINAL | TEXTO CORREGIDO | TIPO DE ERROR |
| :--- | :--- | :--- | :--- |
| **Global** (lib/constants.ts) | "Hola! Me gustaría agendar..." | "¡Hola! Me gustaría agendar..." | Puntuación (Falta de apertura ¡) |
| **Global** (lib/constants.ts) | "...tarot/numerología." | "...Tarot/Numerología." | Capitalización |
| **Header** | "Agendar Consulta" | "Agendá tu consulta" | Voseo (Imperativo) |
| **Home** - Hero | "Descubre un mundo de posibilidades" | "Descubrí un mundo de posibilidades" | Voseo / Acentuación |
| **Home** - Hero | "...Averigua lo que los números..." | "...averiguá lo que los Números..." | Voseo / Capitalización |
| **Home** - Hero | "Agendar Consulta" (Botón) | "Agendá tu consulta" | Voseo (Imperativo) |
| **Home** - Hero | "Conocer más" (Botón) | "Conocé más" | Voseo (Imperativo) |
| **Home** - Servicios | "Quintaesencia" | "Quinta Esencia" | Nombre de Marca |
| **Home** - Servicios | "...es la conexion con el mensaje..." | "...es la conexión con el mensaje..." | Falta de tilde |
| **Home** - Servicios | "...pueden orientarte y dar claridad..." | "...pueden orientarte y darte claridad..." | Estilo Voseo |
| **Home** - Servicios | "Numerologia Completa" | "Numerología Completa" | Falta de tilde |
| **Home** - Servicios | "Descubre el codigo oculto..." | "Descubrí el código oculto..." | Voseo / Falta de tilde |
| **Home** - Servicios | "...en tus numeros..." | "...en tus Números..." | Capitalización / Falta de tilde |
| **Home** - Servicios | "...libera tu maximo potencial." | "...liberá tu máximo potencial." | Voseo / Falta de tilde |
| **Home** - Servicios | "...deja que te guien..." | "...dejá que te guíen..." | Voseo / Falta de tilde |
| **Home** - Servicios | "...la combinacion perfecta..." | "...la combinación perfecta..." | Falta de tilde |
| **Home** - Servicios | "tarot y numerologia combinados" | "Tarot y Numerología combinados" | Capitalización / Falta de tilde |
| **Home** - Servicios | "...Descubre tu camino..." | "...Descubrí tu camino..." | Voseo |
| **Home** - Servicios | "...tus desafios..." | "...tus desafíos..." | Falta de tilde |
| **Home** - About | "...habitan en ti." | "...habitan en vos." | Voseo |
| **Home** - About | "Tu Mapa de Vida en Numeros" | "Tu Mapa de Vida en Números" | Falta de tilde |
| **Home** - About | "...Armonia / Sabiduria" | "...Armonía / Sabiduría" | Falta de tilde |
| **Home** - CTA | "¿Sientes el llamado...?" | "¿Sentís el llamado...?" | Voseo |
| **Home** - CTA | "Permítete una pausa..." | "Permitite una pausa..." | Voseo |
| **Home** - CTA | "Agenda tu sesión..." | "Agendá tu sesión..." | Voseo |
| **Home** - CTA | "...comienza el viaje de regreso a ti..." | "...comenzá el viaje de regreso a vos..." | Voseo |
| **Home** - CTA | "Reservar mi Sesión" (Botón) | "Reservá tu sesión" | Voseo (Imperativo) |
| **Home** - CTA | "Conocer la Propuesta" (Botón) | "Conocé la propuesta" | Voseo (Imperativo) |
| **Propuesta** - Hero | "Comenzar mi Transformación" | "Comenzá tu transformación" | Voseo (Imperativo) |
| **Propuesta** - Hero | "o descubre más abajo" | "o descubrí más abajo" | Voseo |
| **Propuesta** - Servicios | "...se abren ante ti..." | "...se abren ante vos..." | Voseo |
| **Propuesta** - Qué te llevas | "Lo que te llevas de este Encuentro" | "Lo que te llevás de este Encuentro" | Voseo |
| **Propuesta** - CTA | "Comenzar mi Viaje" | "Comenzá tu viaje" | Voseo (Imperativo) |
| **Contacto** - Título | "Inicia la Conversación" | "Iniciá la Conversación" | Voseo (Imperativo) |
| **Contacto** - Subtítulo | "...el universo tiene para ti." | "...el universo tiene para vos." | Voseo |
| **Contacto** - Botones | "Conecta vía WhatsApp" | "Conectá vía WhatsApp" | Voseo |
| **Contacto** - Botones | "Inspírate en Instagram" | "Inspirate en Instagram" | Voseo |
| **Políticas** - Metadata | "Conoce nuestros acuerdos..." | "Conocé nuestros acuerdos..." | Voseo |
| **Políticas** - Cuerpo | "Volver al inicio" (Botón) | "Volvé al inicio" | Voseo (Imperativo) |
| **Políticas** - Cuerpo | "...siempre debes consultar..." | "...siempre debés consultar..." | Voseo |
| **Políticas** - Cuerpo | "Si necesitas cancelar..." | "Si necesitás cancelar..." | Voseo |
| **Políticas** - Cuerpo | "...te pido que me avises..." | "...te pido que me avisés..." | Voseo (Subjuntivo) |
| **Políticas** - Cuerpo | "Tú eres el/la arquitecto/a..." | "Vos sos el/la arquitecto/a..." | Voseo |
| **Políticas** - Cuerpo | "¿Tienes alguna pregunta?" | "¿Tenés alguna pregunta?" | Voseo |
| **Políticas** - Cuerpo | "Si tienes dudas..." | "Si tenés dudas..." | Voseo |
| **Políticas** - Cuerpo | "...no dudes en contactarme." | "...no dudés en contactarme." | Voseo |
| **Políticas** - Cuerpo | "Contactar" (Botón) | "Contactame" | Voseo (Imperativo) |
| **Metadata** (Varios) | "Descubre tu camino..." | "Descubrí tu camino..." | Voseo |
| **Metadata** (Varios) | "Conoce nuestra propuesta..." | "Conocé nuestra propuesta..." | Voseo |
| **Metadata** (Layout) | "Quinta Esencia y Tú" | "Quinta Esencia y vos" | Voseo |
| **Alt Texts** (Varios) | "...tarot y numerología" | "...Tarot y Numerología" | Capitalización |
| **Alt Texts** (Varios) | "...en tu camino" | "...en tu camino" | (Revisión de tildes/ortografía) |

*Este informe detalla todas las correcciones realizadas. Se ha verificado que el voseo sea consistente en todo el sitio, incluyendo botones y llamadas a la acción.*
