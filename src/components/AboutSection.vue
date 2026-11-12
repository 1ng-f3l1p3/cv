<template>
  <section class="about">
    <div class="about__content">
      <h2 class="section__title" v-reveal>
        <span class="section__number">01.</span>
        {{ t.about.title }}
      </h2>
      <div class="about__grid">
        <div class="about__text" v-reveal style="transition-delay: 0.1s">
          <p>
            {{ t.about.p1Part1 }}<span class="highlight">{{ t.about.p1Highlight }}</span>{{ t.about.p1Part2 }}
          </p>
          <p>
            {{ t.about.p2Part1 }}<span class="highlight">{{ t.about.p2Highlight1 }}</span>{{ t.about.p2Part2 }}<span class="highlight">{{ t.about.p2Highlight2 }}</span>{{ t.about.p2Part3 }}<span class="highlight">{{ t.about.p2Highlight3 }}</span>{{ t.about.p2Part4 }}
          </p>
          <p>
            {{ t.about.p3Part1 }}<span class="highlight">{{ t.about.p3Highlight }}</span>{{ t.about.p3Part2 }}
          </p>
          <div class="about__details">
            <div class="about__detail-item">
              <span class="about__detail-label">{{ t.about.locationLabel }}</span>
              <span class="about__detail-value">{{ t.about.locationValue }}</span>
            </div>
            <div class="about__detail-item">
              <span class="about__detail-label">{{ t.about.educationLabel }}</span>
              <span class="about__detail-value">{{ t.about.educationValue }}</span>
            </div>
            <div class="about__detail-item">
              <span class="about__detail-label">{{ t.about.languagesLabel }}</span>
              <span class="about__detail-value">{{ t.about.languagesValue }}</span>
            </div>
          </div>
        </div>
        <div class="about__skills" v-reveal style="transition-delay: 0.2s">
          <h3 class="about__skills-title">{{ t.about.skillsTitle }}</h3>
          <div class="skills__grid">
            <div class="skill-item" v-for="skill in skills" :key="skill.name">
              <div class="skill-item__header">
                <span class="skill-item__name">{{ skill.name }}</span>
                <span class="skill-item__level">{{ skill.level }}%</span>
              </div>
              <div class="skill-item__bar">
                <div class="skill-item__fill" :style="{ width: skill.level + '%' }"></div>
              </div>
            </div>
          </div>
          <div class="skills__tags">
            <span class="skill-tag" v-for="tag in otherSkills" :key="tag">{{ tag }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const skills = ref([
  { name: 'PHP / Laravel 12', level: 95 },
  { name: 'Vue 3 / React / TypeScript', level: 90 },
  { name: 'PostgreSQL 17 / MySQL', level: 90 },
  { name: '.NET 8 / C# (WPF)', level: 85 },
  { name: 'Flutter / Dart', level: 80 },
  { name: 'Linux / Docker / CI/CD', level: 82 },
])

const otherSkills = ref([
  'PrimeVue / Pinia', 'Node.js', 'Playwright (E2E)', 'PHPStan / Pint',
  'WhatsApp Business API', 'Metamap / Veriff', 'Ruby on Rails',
  'Symfony', 'CodeIgniter', 'Angular', 'MongoDB', 'SQL Server',
  'GitLab CI/CD', 'Rocky Linux', 'Ubuntu', 'AWS', 'Firebase',
  'IA Generativa (Claude / Gemini)', 'Figma / Draw.io',
])
</script>

<style scoped>
.about {
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

.about__grid {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 4rem;
}

.about__text p {
  color: var(--text-secondary);
  margin-bottom: 1.2rem;
  font-size: 0.95rem;
  line-height: 1.8;
}

.highlight {
  color: var(--accent-primary);
  font-weight: 500;
}

.about__details {
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--border-subtle);
}

.about__detail-item {
  display: flex;
  gap: 1rem;
  margin-bottom: 0.8rem;
  font-size: 0.85rem;
}

.about__detail-label {
  font-family: var(--font-mono);
  color: var(--accent-primary);
  min-width: 110px;
}

.about__detail-value {
  color: var(--text-secondary);
}

.about__skills {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.5rem;
  height: fit-content;
  position: sticky;
  top: 5rem;
}

.about__skills-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  font-family: var(--font-mono);
}

.skills__grid {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.skill-item__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.4rem;
}

.skill-item__name {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--text-secondary);
}

.skill-item__level {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  color: var(--accent-primary);
}

.skill-item__bar {
  height: 4px;
  background: var(--bg-primary);
  border-radius: 2px;
  overflow: hidden;
}

.skill-item__fill {
  height: 100%;
  background: linear-gradient(90deg, var(--accent-primary), var(--accent-secondary));
  border-radius: 2px;
  transition: width 1s ease-out;
}

.skills__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.skill-tag {
  padding: 0.25rem 0.6rem;
  background: var(--bg-primary);
  border-radius: 4px;
  font-size: 0.7rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  transition: all var(--transition-smooth);
}

.skill-tag:hover {
  color: var(--accent-secondary);
  border-color: var(--accent-secondary);
}

@media (max-width: 768px) {
  .about__grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .about__skills {
    position: static;
  }
}
</style>
