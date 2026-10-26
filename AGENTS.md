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
- Componentes en `src/components/`, un archivo por sección
- Estilos globales en `src/styles/global.css` (CSS variables, dark theme, clases de animación)
- Sin router, sin state management. Single-page landing.

## Componentes

| Archivo                 | Descripción                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| `HeroSection.vue`       | Terminal animado, nombre, tagline, tech stack, links a GitHub/LinkedIn/Email |
| `AboutSection.vue`      | Bio, barras de progreso de skills, tags de tecnologías adicionales           |
| `ExperienceSection.vue` | Timeline vertical con 4 trabajos (fechas, rol, empresa, detalles, tech tags) |
| `ProjectsSection.vue`   | 3 tarjetas de proyectos destacados con tech tags y detalles                  |

## Secciones y orden en App.vue

1. Nav (Inicio / Sobre mí / Experiencia / Proyectos)
2. `HeroSection` — `#hero`
3. `AboutSection` — `#about`
4. `ExperienceSection` — `#experience`
5. `ProjectsSection` — `#projects`
6. Footer

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
