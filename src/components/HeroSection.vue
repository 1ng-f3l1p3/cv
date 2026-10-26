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
          <p class="hero__terminal-output">felipe_chim_chi</p>
          <p class="hero__terminal-line">
            <span class="hero__prompt">$</span> cat role.txt
          </p>
          <p class="hero__terminal-output">Programador PHP Full Stack</p>
        </div>
      </div>
      <h1 class="hero__title">Felipe de Jes&uacute;s Chim Chi</h1>
      <p class="hero__subtitle">Ingeniero en Sistemas Computacionales</p>
      <p class="hero__tagline">
        6+ a&ntilde;os construyendo aplicaciones web, CRMs multitenant y APIs RESTful
      </p>
      <div class="hero__tech-stack">
        <span class="hero__tech-tag">Laravel 12</span>
        <span class="hero__tech-tag">Vue 3</span>
        <span class="hero__tech-tag">PostgreSQL</span>
        <span class="hero__tech-tag">Node.js</span>
        <span class="hero__tech-tag">Linux</span>
      </div>
      <div class="hero__links">
        <a href="https://github.com/1ng-f3l1p3" target="_blank" rel="noopener" class="hero__link hero__link--primary">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 0 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="https://linkedin.com/in/Felipe-Chim-Chim" target="_blank" rel="noopener" class="hero__link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a href="mailto:felipechch30@gmail.com" class="hero__link">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
          Email
        </a>
      </div>
      <div class="hero__scroll-indicator">
        <span>scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </div>
  </section>
</template>

<script setup>
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
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 2.5rem;
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.08);
}

.hero__terminal-bar {
  display: flex;
  gap: 8px;
  padding: 12px 16px;
  background: rgba(255, 255, 255, 0.03);
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
