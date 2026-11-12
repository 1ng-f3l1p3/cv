<template>
  <section class="experience">
    <div class="experience__content">
      <h2 class="section__title" v-reveal>
        <span class="section__number">02.</span>
        {{ t.experience.title }}
      </h2>
      <div class="timeline">
        <div
          v-for="(job, index) in t.experience.jobs"
          :key="job.company + job.period"
          class="timeline__item"
          v-reveal
          :style="{ transitionDelay: index * 0.1 + 's' }"
        >
          <div class="timeline__marker">
            <div class="timeline__dot" :class="{ 'timeline__dot--active': job.current }"></div>
            <div class="timeline__line" v-if="index < t.experience.jobs.length - 1"></div>
          </div>
          <div class="timeline__card">
            <div class="timeline__header">
              <div class="timeline__top">
                <h3 class="timeline__role">{{ job.role }}</h3>
                <span class="timeline__period" :class="{ 'timeline__period--active': job.current }">
                  {{ job.period }}
                </span>
              </div>
              <div class="timeline__sub">
                <span class="timeline__company">{{ job.company }}</span>
                <span class="timeline__sep">·</span>
                <span class="timeline__location">{{ job.location }}</span>
              </div>
            </div>
            <ul class="timeline__details">
              <li v-for="(detail, i) in job.details" :key="i">{{ detail }}</li>
            </ul>
            <div class="timeline__tech">
              <span v-for="tech in job.tech" :key="tech" class="timeline__tech-tag">{{ tech }}</span>
            </div>
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
.experience {
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

.timeline {
  display: flex;
  flex-direction: column;
}

.timeline__item {
  display: grid;
  grid-template-columns: 24px 1fr;
  gap: 0 1.5rem;
}

.timeline__marker {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timeline__dot {
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-secondary);
  border: 2px solid var(--border-subtle);
  flex-shrink: 0;
  margin-top: 0.35rem;
  transition: border-color var(--transition-smooth);
}

.timeline__dot--active {
  border-color: var(--accent-secondary);
  background: var(--accent-secondary);
  box-shadow: 0 0 10px var(--accent-glow-green);
  animation: pulse 2.5s infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 8px var(--accent-glow-green); }
  50% { box-shadow: 0 0 18px rgba(0, 255, 136, 0.4); }
}

.timeline__line {
  flex: 1;
  width: 2px;
  background: var(--border-subtle);
  margin: 6px 0;
  min-height: 2rem;
}

.timeline__card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  transition: border-color var(--transition-smooth), box-shadow var(--transition-smooth);
}

.timeline__card:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 24px var(--accent-glow);
}

.timeline__header {
  margin-bottom: 1rem;
}

.timeline__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 0.3rem;
  flex-wrap: wrap;
}

.timeline__role {
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
}

.timeline__period {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-primary);
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  white-space: nowrap;
  flex-shrink: 0;
}

.timeline__period--active {
  color: var(--accent-secondary);
  border: 1px solid rgba(0, 255, 136, 0.3);
}

.timeline__sub {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
}

.timeline__company {
  font-family: var(--font-mono);
  color: var(--accent-primary);
  font-weight: 500;
}

.timeline__sep {
  color: var(--text-muted);
}

.timeline__location {
  color: var(--text-muted);
}

.timeline__details {
  list-style: none;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.timeline__details li {
  font-size: 0.85rem;
  color: var(--text-secondary);
  padding-left: 1rem;
  position: relative;
  line-height: 1.6;
}

.timeline__details li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--accent-primary);
  font-size: 0.7rem;
  top: 0.15rem;
}

.timeline__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.timeline__tech-tag {
  padding: 0.2rem 0.6rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent-secondary);
}

@media (max-width: 600px) {
  .timeline__top {
    flex-direction: column;
    gap: 0.4rem;
  }

  .timeline__card {
    padding: 1.2rem;
  }
}
</style>
