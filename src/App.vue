<template>
  <div class="app">
    <nav class="nav">
      <div class="nav__content">
        <a href="#hero" class="nav__logo">&lt;FChim /&gt;</a>
        <div class="nav__links">
          <a href="#hero">{{ t.nav.home }}</a>
          <a href="#about">{{ t.nav.about }}</a>
          <a href="#experience">{{ t.nav.experience }}</a>
          <a href="#portfolio">{{ t.nav.zaaztech }}</a>
          <a href="#certifications">{{ t.nav.certifications }}</a>
        </div>
        <div class="nav__actions">
          <!-- Language Toggle Button -->
          <button
            type="button"
            class="nav__btn nav__btn--lang"
            @click="toggleLang"
            :title="lang === 'es' ? 'Switch to English' : 'Cambiar a Español'"
            :aria-label="t.nav.langLabel"
          >
            <span class="nav__lang-opt" :class="{ 'nav__lang-opt--active': lang === 'es' }">ES</span>
            <span class="nav__lang-divider">/</span>
            <span class="nav__lang-opt" :class="{ 'nav__lang-opt--active': lang === 'en' }">EN</span>
          </button>

          <!-- Theme Toggle Button -->
          <button
            type="button"
            class="nav__btn nav__btn--theme"
            @click="toggleTheme"
            :title="theme === 'dark' ? t.nav.themeLight : t.nav.themeDark"
            :aria-label="theme === 'dark' ? t.nav.themeLight : t.nav.themeDark"
          >
            <!-- Sun icon when dark (click to switch to light) -->
            <svg v-if="theme === 'dark'" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5" />
              <line x1="12" y1="1" x2="12" y2="3" />
              <line x1="12" y1="21" x2="12" y2="23" />
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
              <line x1="1" y1="12" x2="3" y2="12" />
              <line x1="21" y1="12" x2="23" y2="12" />
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
            </svg>
            <!-- Moon icon when light (click to switch to dark) -->
            <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <HeroSection id="hero" />
    <AboutSection id="about" />
    <ExperienceSection id="experience" />
    <ZaaztechSection id="portfolio" />
    <CertificationsSection id="certifications" />
    <footer class="footer">
      <p>{{ t.footer.text }}</p>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ZaaztechSection from './components/ZaaztechSection.vue'
import CertificationsSection from './components/CertificationsSection.vue'
import { useTheme } from './composables/useTheme'
import { useI18n } from './composables/useI18n'

const { theme, toggleTheme, initTheme } = useTheme()
const { lang, t, toggleLang, initLang } = useI18n()

onMounted(() => {
  initTheme()
  initLang()
})
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color var(--transition-smooth), color var(--transition-smooth);
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: var(--nav-bg);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
  transition: background-color var(--transition-smooth), border-color var(--transition-smooth);
}

.nav__content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
}

.nav__logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent-primary);
  letter-spacing: -0.5px;
  text-decoration: none;
  flex-shrink: 0;
}

.nav__links {
  display: flex;
  gap: 1.8rem;
  align-items: center;
}

.nav__links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.88rem;
  font-family: var(--font-mono);
  transition: color var(--transition-smooth);
}

.nav__links a:hover {
  color: var(--accent-primary);
}

.nav__actions {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
}

.nav__btn {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 0.35rem 0.65rem;
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  transition: all var(--transition-smooth);
  height: 32px;
}

.nav__btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 12px var(--accent-glow);
}

.nav__lang-opt {
  color: var(--text-muted);
  transition: color var(--transition-smooth);
}

.nav__lang-opt--active {
  color: var(--accent-primary);
  font-weight: 700;
}

.nav__lang-divider {
  color: var(--border-subtle);
  font-size: 0.7rem;
}

.nav__btn--theme svg {
  display: block;
}

.footer {
  text-align: center;
  padding: 3rem 2rem;
  border-top: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-family: var(--font-mono);
}

@media (max-width: 860px) {
  .nav__content {
    padding: 0.8rem 1.2rem;
    gap: 0.8rem;
    flex-wrap: wrap;
  }

  .nav__links {
    gap: 1rem;
    overflow-x: auto;
    font-size: 0.8rem;
  }

  .nav__links a {
    font-size: 0.8rem;
    white-space: nowrap;
  }
}

@media (max-width: 580px) {
  .nav__links {
    order: 3;
    width: 100%;
    justify-content: center;
    padding-top: 0.4rem;
    border-top: 1px solid var(--border-subtle);
  }
}
</style>
