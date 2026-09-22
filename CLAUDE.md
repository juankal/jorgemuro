# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Wiki de memoria (segundo cerebro)

**Antes de cualquier tarea, revisa la wiki**: la página de este proyecto es
`C:\Repositorios\Jc Master\wiki\proyectos\jorgemuro.md` (`wiki\index.md` lista el resto). Es un sitio
cliente de Soluciones Takana (Dr. Jorge Muro), no un proyecto personal. No empieces desde cero
en algo ya documentado.

Al cerrar una sesión de trabajo importante, actualiza esa página y agrega una entrada **arriba de
todo** en `wiki\log.md` (nunca al final). Reglas completas en la sección "Sesiones desde repos de
proyecto" de `C:\Repositorios\Jc Master\CLAUDE.md`: solo esa página y el log, tipo `update`,
`Estado actual` y `Pendientes abiertos` reescritos arriba y el detalle fechado en `Historial`.
Si esas rutas no existen (otra máquina, CI), ignora esta sección.

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
  (`#pubModal`) se puebla desde este array en runtime. El botón "Ver Artículo Completo" del modal
  **solo se renderiza si la entrada tiene `pdfLink`** (string único o `{ en, es }`) — sin ese campo
  el modal se queda solo con el resumen de 3 párrafos, sin link a nada. Cuando el artículo completo
  vive en el propio sitio (`articulos/<id>.html`) en vez de un PDF externo, `pdfLink` puede apuntar
  ahí (ej. `articulos/<id>.html?lang=es` / `?lang=en`), no solo a Google Drive.
- Al agregar/editar un artículo hay que tocar 4 archivos en sync: `script.js` (fuente), `script.min.js`
  (el que carga `index.html`, sin minificador automático), la tarjeta `<noscript>` correspondiente en
  `index.html` (fallback sin JS — ya está incompleta respecto a los artículos reales, falta al menos
  `quantum-advances`) y `sitemap.xml`.
- **i18n**: bilingüe ES/EN client-side, sin rutas separadas. El diccionario `translations` vive en
  `script.js` (~línea 495) y se aplica vía atributos `data-i18n`, `data-i18n-title`,
  `data-i18n-aria`, `data-i18n-href` sobre el DOM. El toggle de idioma (`#langToggle`) dispara el
  swap; no hay build-time generation de páginas por idioma.
- **Formulario de contacto** (`#contactForm`): usa `data-netlify="true"` + honeypot — el hosting es
  Netlify (o compatible), no hay backend propio en este repo.
- **`_headers`**: headers HTTP (CSP, cache-control, etc.) en formato Netlify/Cloudflare Pages — al
  agregar un recurso externo nuevo (script, iframe, fuente), hay que actualizar la CSP aquí o se
  bloqueará en producción. `script.js`, `script.min.js`, `index.css` y `critical.css` llevan
  `Cache-Control: immutable, max-age=31536000` (un año) **sin versionar el nombre del archivo** —
  cualquier deploy que toque alguno de esos 4 archivos queda cacheado en el edge de Cloudflare hasta
  que alguien purgue manualmente esa URL en el dashboard de Cloudflare (Custom Purge), o hasta que
  cambie la URL con la que se pide. Confirmar con `curl -sI` si `cf-cache-status` da `HIT` en vez de
  `MISS`/`DYNAMIC`. Decisión 2026-09-15: para `script.min.js` (el único de los cuatro cargado desde
  un `<script src>` en `index.html`) se adoptó cache-busting por query string — el tag es
  `script.min.js?v=N` — así que **cada vez que cambie `script.min.js` hay que subir el número de
  `v=` en `index.html`** en vez de depender de la purga manual. `index.css` y `critical.css` (cargados
  sin query string) y el propio `script.js` (no se sirve directo, solo es la fuente legible) siguen
  dependiendo de la purga manual si alguna vez cambian.
- **SEO**: `sitemap.xml` y `robots.txt` en la raíz deben actualizarse manualmente si se agrega o
  quita una página (p. ej. un nuevo artículo en `articulos/`).
- **Analytics**: Google tag (`gtag.js`, `G-SJXJT6BQH3`) embebido inline en cada página — presente
  tanto en `index.html` como en cada archivo de `articulos/`.
