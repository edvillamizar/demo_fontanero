# Fontanería Darro: web demostrativa para oficios

Landing page de un fontanero ficticio en Granada. Es un proyecto demostrativo: el negocio, el teléfono y el email no existen.

**Demo:** (https://demo-fontanero.pages.dev/)

## Objetivo

Plantilla base para ofrecer webs a negocios locales y oficios (fontaneros, albañiles, electricistas). Esta demo muestra cómo queda aplicada a un fontanero.

## Qué incluye

- Menú de navegación móvil accesible (`aria-expanded`, cierre con Escape)
- Cabecera que cambia al hacer scroll
- Sección de servicios en Grid y galería de trabajos con carga diferida
- Botón flotante de WhatsApp con mensaje prefijado
- Mapa de Google bajo demanda: no se carga hasta que el usuario lo pide
- SEO básico: `title`, meta description, Open Graph y datos estructurados JSON-LD
- Fuentes (Poppins y Open Sans) alojadas en local
- Enlace "Saltar al contenido", foco visible y respeto a `prefers-reduced-motion`
- Esqueletos de aviso legal y política de privacidad

## Tecnologías

HTML5 · CSS3 (Grid, Flexbox, variables) · JavaScript sin librerías

## Estructura

```
├── index.html
├── aviso-legal.html
├── privacidad.html
├── css/style.css      # tokens de diseño en :root
├── js/main.js         # menú, scroll, mapa bajo demanda
├── fonts/             # woff2 en local
├── images/            # placeholders
└── robots.txt         # Disallow: / (es una demo)
```

## Cómo personalizarla

1. Cambia los colores en el bloque `:root` de `css/style.css`.
2. Edita textos, teléfono, `wa.me/34XXXXXXXXX` y JSON-LD en `index.html`.
3. Sustituye las imágenes de `images/` por fotos reales en WebP.
4. Rellena los `[corchetes]` de las páginas legales y revísalas con un asesor.
5. Usa el dominio real en `canonical`, `robots.txt` y `sitemap.xml`.

## Notas

- Las imágenes son marcadores de posición.
- La demo lleva `noindex` para no competir en buscadores.

## Autor

Edwin Alejandro · Desarrollador Web Front End Junior · Granada
[Portfolio](https://portfolio-edwin-alejandro-villamizar.pages.dev/) · [LinkedIn](https://www.linkedin.com/in/edwinvillamizardiaz)
