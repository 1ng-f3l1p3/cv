<template>
  <section class="projects">
    <div class="projects__content">
      <h2 class="section__title" v-reveal>
        <span class="section__number">03.</span>
        {{ t.projects.title }}
      </h2>
      <div class="projects__grid">
        <div
          class="project-card"
          v-for="(project, index) in t.projects.items"
          :key="project.id"
          v-reveal
          :style="{ transitionDelay: index * 0.12 + 's' }"
        >
          <div class="project-card__header">
            <div class="project-card__icon" :class="'project-card__icon--' + project.id">
              <!-- CRM Multitenant -->
              <svg v-if="project.id === 'crm-multitenant'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <!-- Desktop & WABA -->
              <svg v-else-if="project.id === 'desktop-waba'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
                <line x1="8" y1="21" x2="16" y2="21"/>
                <line x1="12" y1="17" x2="12" y2="21"/>
                <path d="M7 8h6M7 11h3"/>
              </svg>
              <!-- Fintech Credit & Biometrics -->
              <svg v-else-if="project.id === 'fintech-credit'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M9 12l2 2 4-4"/>
              </svg>
              <!-- Mobile & Payments -->
              <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                <line x1="12" y1="18" x2="12.01" y2="18"/>
                <path d="M8 7h8M8 10h5"/>
              </svg>
            </div>
            <div class="project-card__company">
              <span class="project-card__role">{{ project.role }}</span>
              <span class="project-card__company-name">{{ project.company }}</span>
            </div>
          </div>
          <h3 class="project-card__title">{{ project.title }}</h3>
          <p class="project-card__description">{{ project.description }}</p>
          <div class="project-card__tech">
            <span class="project-card__tech-tag" v-for="tech in project.tech" :key="tech">{{ tech }}</span>
          </div>
          <div class="project-card__details">
            <p v-for="(detail, i) in project.details" :key="i" class="project-card__detail">
              <span class="project-card__bullet">&#9642;</span>
              {{ detail }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.projects {
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.section__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.section__title::after {
  content: '';
  flex: 1;
  height: 1px;
  background: linear-gradient(90deg, var(--border-subtle), transparent);
}

.section__number {
  font-family: var(--font-mono);
  color: var(--accent-primary);
  font-size: 1.2rem;
  font-weight: 400;
}

.projects__grid {
  display: grid;
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.8rem;
  transition: all var(--transition-smooth);
}

.project-card:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 30px var(--accent-glow);
  transform: translateY(-3px);
}

.project-card__header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.project-card__icon {
  width: 46px;
  height: 46px;
  min-width: 46px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  color: var(--accent-primary);
  transition: all var(--transition-smooth);
}

.project-card:hover .project-card__icon {
  border-color: var(--accent-primary);
  color: var(--accent-secondary);
}

.project-card__company {
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.project-card__role {
  font-size: 0.82rem;
  font-family: var(--font-mono);
  color: var(--accent-primary);
  line-height: 1.4;
}

.project-card__company-name {
  font-size: 0.75rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

.project-card__title {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
}

.project-card__description {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 1rem;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.2rem;
}

.project-card__tech-tag {
  padding: 0.3rem 0.7rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 5px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent-secondary);
}

.project-card__details {
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.project-card__detail {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
}

.project-card__bullet {
  color: var(--accent-primary);
  font-size: 0.7rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .project-card {
    padding: 1.3rem;
  }
}
</style>
