# AGENTS.md - CV

## Commands

```
npm run dev      # Start Vite dev server (localhost:5173)
npm run build    # Production build → dist/
npm run preview  # Preview production build locally
```

No lint, test, typecheck, or formatter configured. Add as needed.

## Architecture

- **Vue 3 + Vite** (ESM, `<script setup>`)
- Entry: `src/main.js` → registra directiva global `v-reveal` → monta `App.vue` en `#app`
- Composables:
  - `src/composables/useTheme.js` → control reactivo de modo claro / oscuro (`[data-theme="light"]`, persistido en `localStorage`)
  - `src/composables/useI18n.js` → sistema reactivo de traducción español / inglés (persistido en `localStorage`)
- Diccionario i18n: `src/i18n/translations.js` (textos completos en español e inglés para todas las secciones)
- Componentes en `src/components/`, un archivo por sección
- Estilos globales en `src/styles/global.css` (CSS variables, dark theme, clases de animación)
- Sin router, sin state management. Single-page landing.

## Componentes

| Archivo                    | Descripción                                                                  |
| -------------------------- | ---------------------------------------------------------------------------- |
| `HeroSection.vue`          | Terminal animado, nombre, tagline, tech stack, links a GitHub/LinkedIn/Email |
| `AboutSection.vue`         | `01.` Bio, barras de progreso de skills, tags de tecnologías adicionales      |
| `ExperienceSection.vue`    | `02.` Timeline vertical con 4 trabajos (fechas, rol, empresa, detalles, tags)|
| `ZaaztechSection.vue`      | `03.` Portafolio unificado: Deep dive interactivo con tabs (Web SaaS, Windows Desktop, Apps Móviles) + Otros proyectos destacados de trayectoria |
| `CertificationsSection.vue`| `04.` Grid de certificaciones y cursos con categorías, emisores y fechas      |

## Secciones y orden en App.vue

1. Nav (Inicio / Sobre mí / Experiencia / Portafolio / Certificaciones + selectores de idioma y tema)
2. `HeroSection` — `#hero`
3. `AboutSection` — `#about` (`01.`)
4. `ExperienceSection` — `#experience` (`02.`)
5. `ZaaztechSection` — `#portfolio` (`03. Portafolio`)
6. `CertificationsSection` — `#certifications` (`04. Certificaciones`)
7. Footer

## Directiva v-reveal

Registrada globalmente en `main.js`. Aplica animación fade-up al entrar en viewport via `IntersectionObserver`.

```html
<!-- uso básico -->
<div v-reveal>...</div>

<!-- con delay para stagger -->
<div v-reveal :style="{ transitionDelay: index * 0.1 + 's' }">...</div>
```

Las clases CSS `.reveal` y `.reveal--visible` están definidas en `global.css`.

## Convenciones

- CSS variables definidas en `src/styles/global.css` — usar siempre para colores y tipografía
- Paleta: `--accent-primary` (cyan `#00d4ff`) y `--accent-secondary` (green `#00ff88`). Sin tercero.
- Google Fonts (Inter + JetBrains Mono) cargadas en `index.html`
- Texto en español con HTML entities (`&iacute;`, `&oacute;`, `&ntilde;`) **solo en templates HTML**
- Strings en JavaScript (`<script setup>`) deben usar caracteres UTF-8 directos (ó, é, ñ, etc.)

## Gotchas

- Windows environment — usar `Remove-Item` en lugar de `rm -rf`
- `public/` existe pero está vacío; los assets estáticos van aquí
- Los archivos de scaffold por defecto fueron eliminados (HelloWorld.vue, style.css, assets/)
