<template>
  <section class="hero">
    <div class="hero__bg"></div>
    <div class="hero__content">
      <div class="hero__terminal">
        <div class="hero__terminal-bar">
          <span class="hero__terminal-dot"></span>
          <span class="hero__terminal-dot"></span>
          <span class="hero__terminal-dot"></span>
        </div>
        <div class="hero__terminal-body">
          <p class="hero__terminal-line">
            <span class="hero__prompt">$</span> whoami
          </p>
          <p class="hero__terminal-output">{{ t.hero.terminalWhoami }}</p>
          <p class="hero__terminal-line">
            <span class="hero__prompt">$</span> {{ t.hero.terminalRolePrompt }}
          </p>
          <p class="hero__terminal-output">{{ t.hero.role }}</p>
        </div>
      </div>
      <h1 class="hero__title">{{ t.hero.name }}</h1>
      <p class="hero__subtitle">{{ t.hero.subtitle }}</p>
      <p class="hero__tagline">
        {{ t.hero.tagline }}
      </p>
      <div class="hero__tech-stack">
        <span class="hero__tech-tag">Laravel 12</span>
        <span class="hero__tech-tag">Vue 3</span>
        <span class="hero__tech-tag">.NET 8</span>
        <span class="hero__tech-tag">PostgreSQL</span>
        <span class="hero__tech-tag">Flutter</span>
        <span class="hero__tech-tag">Docker</span>
      </div>
      <div class="hero__links">
        
        <a href="https://www.linkedin.com/in/felipe-chim-chi-38440aab" target="_blank" rel="noopener" class="hero__link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          {{ t.hero.linkedin }}
        </a>
        <a href="mailto:felipechch30@gmail.com" class="hero__link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
          {{ t.hero.email }}
        </a>
      </div>
      <div class="hero__scroll-indicator">
        <span>{{ t.hero.scroll }}</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 2rem;
}

.hero__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 20% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(0, 212, 255, 0.04) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 80%, rgba(0, 255, 136, 0.06) 0%, transparent 50%);
  pointer-events: none;
}

.hero__content {
  max-width: 700px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero__terminal {
  background: var(--terminal-bg);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  box-shadow: 0 0 40px var(--accent-glow);
}

.hero__terminal-bar {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: var(--terminal-bar-bg);
  border-bottom: 1px solid var(--border-subtle);
}

.hero__terminal-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--text-muted);
}

.hero__terminal-dot:nth-child(1) { background: #ff5f57; }
.hero__terminal-dot:nth-child(2) { background: #ffbd2e; }
.hero__terminal-dot:nth-child(3) { background: #28c840; }

.hero__terminal-body {
  padding: 1.2rem 1.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  text-align: left;
}

.hero__terminal-line {
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
}

.hero__prompt {
  color: var(--accent-secondary);
  margin-right: 0.5rem;
}

.hero__terminal-output {
  color: var(--accent-primary);
  margin-bottom: 0.8rem;
  font-weight: 500;
}

.hero__title {
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 800;
  letter-spacing: -1px;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, var(--text-primary) 0%, var(--accent-primary) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero__subtitle {
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
  font-weight: 400;
}

.hero__tagline {
  font-size: 1rem;
  color: var(--text-muted);
  margin-bottom: 1.5rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.hero__tech-stack {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 2rem;
}

.hero__tech-tag {
  padding: 0.4rem 0.9rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 20px;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--accent-primary);
  transition: all var(--transition-smooth);
}

.hero__tech-tag:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 15px var(--accent-glow);
  transform: translateY(-2px);
}

.hero__links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
}

.hero__link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.7rem 1.3rem;
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  font-family: var(--font-mono);
  transition: all var(--transition-smooth);
  background: transparent;
}

.hero__link:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 20px var(--accent-glow);
  transform: translateY(-2px);
}

.hero__link--primary {
  background: var(--accent-primary);
  border-color: var(--accent-primary);
  color: var(--bg-primary);
}

.hero__link--primary:hover {
  color: var(--bg-primary);
  box-shadow: 0 0 30px rgba(0, 212, 255, 0.3);
}

.hero__scroll-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-family: var(--font-mono);
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
