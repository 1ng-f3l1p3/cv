<template>
  <section class="certifications">
    <div class="certifications__content">
      <h2 class="section__title" v-reveal>
        <span class="section__number">04.</span>
        {{ t.certifications.title }}
      </h2>
      <div class="certifications__grid">
        <div
          class="cert-card"
          v-for="(cert, index) in t.certifications.items"
          :key="cert.title"
          v-reveal
          :style="{ transitionDelay: index * 0.08 + 's' }"
        >
          <div class="cert-card__top">
            <span class="cert-card__badge">{{ cert.category }}</span>
            <span class="cert-card__date">{{ cert.date }}</span>
          </div>
          <h3 class="cert-card__title">{{ cert.title }}</h3>
          <p class="cert-card__issuer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            {{ cert.issuer }}
          </p>
        </div>
      </div>
      <div class="certifications__footer" v-reveal style="transition-delay: 0.3s">
        <p>
          {{ t.certifications.footer }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

<style scoped>
.certifications {
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

.certifications__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.2rem;
}

.cert-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all var(--transition-smooth);
}

.cert-card:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 20px var(--accent-glow);
  transform: translateY(-3px);
}

.cert-card__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.9rem;
}

.cert-card__badge {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  color: var(--accent-secondary);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.cert-card__date {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
}

.cert-card__title {
  font-size: 0.98rem;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.4;
  margin-bottom: 0.8rem;
}

.cert-card__issuer {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.cert-card__issuer svg {
  color: var(--accent-primary);
  flex-shrink: 0;
}

.certifications__footer {
  margin-top: 2rem;
  padding: 1.2rem;
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  text-align: center;
}

.certifications__footer p {
  font-size: 0.85rem;
  color: var(--text-secondary);
  font-family: var(--font-sans);
}
</style>
