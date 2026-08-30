# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Wiki de memoria

Antes de trabajar en este repo, lee `C:\Repositorios\Jc Master\wiki\proyectos\jorgemuro.md`. Es
un sitio cliente de Soluciones Takana (Dr. Jorge Muro), no un proyecto personal. Al cerrar una
sesión de trabajo sustantiva, actualiza esa página siguiendo las reglas del `CLAUDE.md` global.

## Qué es este repo

Sitio web estático (HTML/CSS/JS vanilla, sin build tooling, sin `package.json`, sin framework) para
el Dr. Jorge Muro — físico, especialista en liderazgo y negociación (credencial Harvard). Deploy en
`https://www.jorgemuro.net`. No hay comandos de build/lint/test: se edita el HTML/CSS/JS directamente.

Para previsualizar cambios localmente, sirve el directorio con cualquier servidor estático (p. ej.
`npx serve .` o la extensión Live Server) y abre `index.html`.

## Arquitectura

- **`index.html`** — página principal (landing de una sola página con anchors: `#hero`, `#about`,
  `#expertise`, `#publications`, `#books`, `#contact`). Trae el critical CSS **inline** en un
  `<style>` dentro del `<head>` (para first paint), y además carga `index.css` de forma no
  bloqueante (`media="print" onload="this.media='all'"`). El archivo `critical.css` en la raíz
  existe pero **no está referenciado** desde ningún HTML — es contenido huérfano/histórico, no
  asumas que se usa en producción.
- **`articulos/*.html`** — páginas de artículos individuales, autocontenidas: cada una repite el
  mismo `<head>` con critical CSS inline (mismo patrón que `index.html`, no un include compartido).
  Al editar estilos o metadata compartida, hay que replicar el cambio en cada archivo de
  `articulos/` manualmente — no hay templating.
- **`script.js`** → **`script.min.js`** — `index.html` carga el `.min.js`, `script.js` es la fuente
  legible. No hay minificador configurado en el repo; al editar `script.js` hay que regenerar
  `script.min.js` a mano (o con un minificador externo) y mantener ambos en sync.
- **Contenido de publicaciones**: el array `publications` dentro de `script.js` (~línea 8) es la
  fuente de verdad de las tarjetas de la sección "Publications" — cada entrada trae textos en `en`
  y `es`, imagen, thumbnail y opcionalmente `youtubeId` o `pdfLink`. El modal de detalle
  (`#pubModal`) se puebla desde este array en runtime.
- **i18n**: bilingüe ES/EN client-side, sin rutas separadas. El diccionario `translations` vive en
  `script.js` (~línea 495) y se aplica vía atributos `data-i18n`, `data-i18n-title`,
  `data-i18n-aria`, `data-i18n-href` sobre el DOM. El toggle de idioma (`#langToggle`) dispara el
  swap; no hay build-time generation de páginas por idioma.
- **Formulario de contacto** (`#contactForm`): usa `data-netlify="true"` + honeypot — el hosting es
  Netlify (o compatible), no hay backend propio en este repo.
- **`_headers`**: headers HTTP (CSP, cache-control, etc.) en formato Netlify/Cloudflare Pages — al
  agregar un recurso externo nuevo (script, iframe, fuente), hay que actualizar la CSP aquí o se
  bloqueará en producción.
- **SEO**: `sitemap.xml` y `robots.txt` en la raíz deben actualizarse manualmente si se agrega o
  quita una página (p. ej. un nuevo artículo en `articulos/`).
- **Analytics**: Google tag (`gtag.js`, `G-SJXJT6BQH3`) embebido inline en cada página — presente
  tanto en `index.html` como en cada archivo de `articulos/`.
