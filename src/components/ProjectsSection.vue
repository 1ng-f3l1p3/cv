<template>
  <section class="projects">
    <div class="projects__content">
      <h2 class="section__title" v-reveal>
        <span class="section__number">03.</span>
        Proyectos destacados
      </h2>
      <div class="projects__grid">
        <div
          class="project-card"
          v-for="(project, index) in projects"
          :key="project.title"
          v-reveal
          :style="{ transitionDelay: index * 0.12 + 's' }"
        >
          <div class="project-card__header">
            <div class="project-card__icon">{{ project.icon }}</div>
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
            <p v-for="(detail, index) in project.details" :key="index" class="project-card__detail">
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
import { ref } from 'vue'

const projects = ref([
  {
    icon: '&#127981;',
    role: 'Programador PHP Full Stack',
    company: 'Zaaztech',
    title: 'CRM Multitenant Modular',
    description: 'Desarrollo de un CRM modular y personalizable con arquitectura multitenant, concebido como evolución de Vtiger con herramientas adicionales y adaptable a diferentes giros de negocio.',
    tech: ['Laravel 12', 'PostgreSQL 17', 'Vue 3', 'APIs REST', 'Rocky Linux', 'Ubuntu'],
    details: [
      'Módulos personalizables por tenant sin afectar el núcleo de la aplicación',
      'Diseño e implementación de entidades y extensiones a medida',
      'Administración de servidores Rocky Linux y Ubuntu Linux (CWP/SSH)',
      'CI/CD en proyectos CRM/API de GitLab',
      'Desarrollo asistido con IA (Claude) para acelerar el ciclo de desarrollo',
      'Colaboración con equipo ágil vía GitLab y ClickUp',
    ],
  },
  {
    icon: '&#128274;',
    role: 'Analista de Sistemas',
    company: 'Financiera Prestamito',
    title: 'Plataforma de Crédito y Cobranza',
    description: 'Desarrollo de aplicaciones web internas para procesos de crédito y cobranza, con integración de verificación facial y pasarelas de pago.',
    tech: ['PHP', 'Ruby on Rails', 'MySQL', 'Bootstrap 5', 'Metamap', 'Veriff', 'Webhooks'],
    details: [
      'APIs RESTful con Ruby on Rails para validación de identidad y dispersión de pagos',
      'Integración de SDKs Metamap y Veriff para verificación facial',
      'Desarrollo de webhooks en PHP para proyectos de la empresa',
      'Bases de datos MySQL con procedimientos almacenados, triggers y vistas',
      'Administración de CRM Kommo con consultas SQL para reportes ejecutivos',
      'Documentación de proyectos y diagramas UML para modelado de sistemas',
    ],
  },
  {
    icon: '&#128241;',
    role: 'Programador',
    company: 'System Global App',
    title: 'Apps Móviles y APIs',
    description: 'Desarrollo de aplicaciones móviles nativas Android y aplicaciones web con frameworks modernos e integración de servicios externos.',
    tech: ['Android', 'Retrofit', 'Laravel', 'Symfony', 'Vue.js', 'Angular'],
    details: [
      'Apps móviles nativas consumiendo APIs REST mediante Retrofit',
      'Integración de APIs de Facebook, Google y PayPal para autenticación y pagos',
      'Envío masivo de correos transaccionales con Mailgun',
      'Control de versiones con Git y documentación técnica con Figma/Draw.io',
      'Arquitectura MVC con múltiples frameworks PHP y JavaScript',
    ],
  },
])
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
  font-size: 1.8rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-primary);
  border-radius: 10px;
}

.project-card__company {
  display: flex;
  flex-direction: column;
}

.project-card__role {
  font-size: 0.8rem;
  font-family: var(--font-mono);
  color: var(--accent-primary);
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
}

@media (max-width: 768px) {
  .project-card {
    padding: 1.3rem;
  }
}
</style>
