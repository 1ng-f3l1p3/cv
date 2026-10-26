<template>
  <div class="app">
    <nav class="nav">
      <div class="nav__content">
        <span class="nav__logo">&lt;FChim /&gt;</span>
        <div class="nav__links">
          <a href="#hero">Inicio</a>
          <a href="#about">Sobre m&iacute;</a>
          <a href="#experience">Experiencia</a>
          <a href="#projects">Proyectos</a>
        </div>
      </div>
    </nav>
    <HeroSection id="hero" />
    <AboutSection id="about" />
    <ExperienceSection id="experience" />
    <ProjectsSection id="projects" />
    <footer class="footer">
      <p>&copy; 2026 Felipe Chim Chi. Desarrollado con Vue 3 + Vite.</p>
    </footer>
  </div>
</template>

<script setup>
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
</script>

<style scoped>
.app {
  min-height: 100vh;
  background: var(--bg-primary);
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(10, 10, 15, 0.85);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border-subtle);
}

.nav__content {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav__logo {
  font-family: var(--font-mono);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--accent-primary);
  letter-spacing: -0.5px;
}

.nav__links {
  display: flex;
  gap: 2rem;
}

.nav__links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-family: var(--font-mono);
  transition: color var(--transition-smooth);
}

.nav__links a:hover {
  color: var(--accent-primary);
}

.footer {
  text-align: center;
  padding: 3rem 2rem;
  border-top: 1px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.85rem;
  font-family: var(--font-mono);
}
</style>
