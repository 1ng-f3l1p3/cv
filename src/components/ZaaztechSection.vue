<template>
  <section class="zaaztech">
    <div class="zaaztech__content">
      <div class="zaaztech__header" v-reveal>
        <h2 class="section__title">
          <span class="section__number">03.</span>
          {{ t.zaaztech.title }}
        </h2>
        <p class="zaaztech__tagline">{{ t.zaaztech.tagline }}</p>
        <p class="zaaztech__subtitle">{{ t.zaaztech.subtitle }}</p>
      </div>

      <!-- Tab Navigation -->
      <div class="zaaztech__tabs" v-reveal style="transition-delay: 0.1s">
        <button
          type="button"
          class="tab-btn"
          :class="{ 'tab-btn--active': activeTab === 'web' }"
          @click="selectTab('web')"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="2" y1="12" x2="22" y2="12"/>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
          </svg>
          {{ t.zaaztech.tabs.web }}
        </button>

        <button
          type="button"
          class="tab-btn"
          :class="{ 'tab-btn--active': activeTab === 'desktop' }"
          @click="selectTab('desktop')"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
          {{ t.zaaztech.tabs.desktop }}
        </button>

        <button
          type="button"
          class="tab-btn"
          :class="{ 'tab-btn--active': activeTab === 'mobile' }"
          @click="selectTab('mobile')"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
            <line x1="12" y1="18" x2="12.01" y2="18"/>
          </svg>
          {{ t.zaaztech.tabs.mobile }}
        </button>
      </div>

      <!-- Tab Content Panel -->
      <transition name="fade" mode="out-in">
        <div :key="activeTab" class="zaaztech__panel" v-reveal style="transition-delay: 0.15s">
          <div class="panel__hero">
            <div class="panel__role-badge">{{ currentPillar.role }}</div>
            <h3 class="panel__title">{{ currentPillar.name }}</h3>
            <p class="panel__summary">{{ currentPillar.summary }}</p>
          </div>

          <!-- Tech Stack -->
          <div class="panel__section">
            <h4 class="panel__section-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="16 18 22 12 16 6"/>
                <polyline points="8 6 2 12 8 18"/>
              </svg>
              Stack Tecnol&oacute;gico
            </h4>
            <div class="panel__tech-grid">
              <span v-for="tech in currentPillar.stack" :key="tech" class="tech-chip">
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Visual Showcase (Web, Windows Desktop, and Mobile) -->
          <div v-if="currentPillar.screenshots && currentPillar.screenshots.length" class="panel__section panel__section--showcase">
            <div class="showcase__header">
              <div>
                <h4 class="panel__section-title">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <polyline points="21 15 16 10 5 21"/>
                  </svg>
                  {{ currentPillar.screenshotsTitle }}
                </h4>
                <p class="showcase__subtitle">{{ currentPillar.screenshotsSubtitle }}</p>
              </div>
            </div>

            <!-- Screenshot Selector Pills -->
            <div class="showcase__nav">
              <button
                v-for="(shot, sIdx) in currentPillar.screenshots"
                :key="shot.id"
                type="button"
                class="showcase__nav-btn"
                :class="{ 'showcase__nav-btn--active': activeScreenIndex === sIdx }"
                @click="activeScreenIndex = sIdx"
              >
                <span class="showcase__nav-badge">{{ shot.badge }}</span>
                <span class="showcase__nav-title">{{ shot.title }}</span>
              </button>
            </div>

            <!-- Frame Container (Adaptive by Platform: Web, Windows, Mobile) -->
            <div class="showcase__frame-wrapper" :class="'showcase__frame-wrapper--' + activeTab">
              <!-- Web Browser Frame -->
              <div v-if="activeTab === 'web'" class="browser-frame" @click="openModal(activeScreenIndex)">
                <div class="browser-frame__bar">
                  <div class="browser-frame__dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div class="browser-frame__address">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                    <span>https://app.zaaztech.com/demo/{{ currentScreen.id }}</span>
                  </div>
                  <span class="browser-frame__zoom-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="11" cy="11" r="8"/>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                      <line x1="11" y1="8" x2="11" y2="14"/>
                      <line x1="8" y1="11" x2="14" y2="11"/>
                    </svg>
                    {{ currentPillar.zoomHint }}
                  </span>
                </div>
                <div class="browser-frame__canvas">
                  <img
                    :src="resolveImage(currentScreen)"
                    :alt="currentScreen.title"
                    class="browser-frame__image"
                    loading="lazy"
                  />
                  <div class="browser-frame__overlay">
                    <div class="browser-frame__overlay-content">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                      <span>{{ currentPillar.zoomHint }}</span>
                    </div>
                  </div>
                </div>
                <div class="browser-frame__caption">
                  <strong>{{ currentScreen.title }}:</strong> {{ currentScreen.desc }}
                </div>
              </div>

              <!-- Windows 11 Native Frame -->
              <div v-else-if="activeTab === 'desktop'" class="windows-frame" @click="openModal(activeScreenIndex)">
                <div class="windows-frame__bar">
                  <div class="windows-frame__title">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.951-1.8"/>
                    </svg>
                    <span>{{ currentScreen.badge }} · {{ currentScreen.title }}</span>
                  </div>
                  <div class="windows-frame__controls">
                    <span class="windows-ctrl windows-ctrl--min">&#8211;</span>
                    <span class="windows-ctrl windows-ctrl--max">&#9633;</span>
                    <span class="windows-ctrl windows-ctrl--close">&#10005;</span>
                  </div>
                </div>
                <div class="windows-frame__canvas">
                  <img
                    :src="resolveImage(currentScreen)"
                    :alt="currentScreen.title"
                    class="windows-frame__image"
                    loading="lazy"
                  />
                  <div class="browser-frame__overlay">
                    <div class="browser-frame__overlay-content">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"/>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        <line x1="11" y1="8" x2="11" y2="14"/>
                        <line x1="8" y1="11" x2="14" y2="11"/>
                      </svg>
                      <span>{{ currentPillar.zoomHint }}</span>
                    </div>
                  </div>
                </div>
                <div class="browser-frame__caption">
                  <strong>{{ currentScreen.title }}:</strong> {{ currentScreen.desc }}
                </div>
              </div>

              <!-- Mobile Smartphone Frame -->
              <div v-else class="mobile-frame-container">
                <div class="mobile-frame" @click="openModal(activeScreenIndex)">
                  <div class="mobile-frame__notch">
                    <span class="mobile-frame__speaker"></span>
                    <span class="mobile-frame__camera"></span>
                  </div>
                  <div class="mobile-frame__canvas">
                    <img
                      :src="resolveImage(currentScreen)"
                      :alt="currentScreen.title"
                      class="mobile-frame__image"
                      loading="lazy"
                    />
                    <div class="browser-frame__overlay">
                      <div class="browser-frame__overlay-content">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                          <circle cx="11" cy="11" r="8"/>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                          <line x1="11" y1="8" x2="11" y2="14"/>
                          <line x1="8" y1="11" x2="14" y2="11"/>
                        </svg>
                        <span>{{ currentPillar.zoomHint }}</span>
                      </div>
                    </div>
                  </div>
                  <div class="mobile-frame__bottom-bar">
                    <span class="mobile-frame__home-indicator"></span>
                  </div>
                </div>
                <div class="browser-frame__caption mobile-caption">
                  <strong>{{ currentScreen.title }}:</strong> {{ currentScreen.desc }}
                </div>
              </div>
            </div>
          </div>

          <!-- Architecture Pillars -->
          <div class="panel__section">
            <h4 class="panel__section-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="12 2 2 7 12 12 22 7 12 2"/>
                <polyline points="2 17 12 22 22 17"/>
                <polyline points="2 12 12 17 22 12"/>
              </svg>
              {{ currentPillar.pillarsTitle }}
            </h4>
            <div class="pillars__grid">
              <div v-for="pillar in currentPillar.pillars" :key="pillar.title" class="pillar-card">
                <div class="pillar-card__header">
                  <span class="pillar-card__dot"></span>
                  <h5 class="pillar-card__title">{{ pillar.title }}</h5>
                </div>
                <p class="pillar-card__desc">{{ pillar.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Features & Sub-modules -->
          <div class="panel__section">
            <h4 class="panel__section-title">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              {{ currentPillar.featuresTitle }}
            </h4>
            <ul class="features__list">
              <li v-for="(feat, idx) in currentPillar.features" :key="idx" class="feature-item">
                <span class="feature-item__icon">&#9656;</span>
                <span class="feature-item__text">{{ feat }}</span>
              </li>
            </ul>
          </div>
        </div>
      </transition>

      <!-- Otros Proyectos de Trayectoria -->
      <div v-if="otherProjects.length" class="zaaztech__other-projects" v-reveal style="transition-delay: 0.2s">
        <div class="other-projects__header">
          <h3 class="other-projects__title">{{ t.zaaztech.otherProjectsTitle }}</h3>
          <p class="other-projects__subtitle">{{ t.zaaztech.otherProjectsSubtitle }}</p>
        </div>
        <div class="other-projects__grid">
          <div
            class="project-card"
            v-for="(project, index) in otherProjects"
            :key="project.id"
            v-reveal
            :style="{ transitionDelay: index * 0.12 + 's' }"
          >
            <div class="project-card__header">
              <div class="project-card__icon" :class="'project-card__icon--' + project.id">
                <svg v-if="project.id === 'fintech-credit'" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
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
            <h4 class="project-card__title">{{ project.title }}</h4>
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
    </div>

    <!-- Lightbox Modal -->
    <teleport to="body">
      <transition name="modal">
        <div v-if="isModalOpen" class="modal__backdrop" @click="closeModal" @keydown.esc="closeModal" tabindex="0">
          <div class="modal__container" :class="{ 'modal__container--mobile': activeTab === 'mobile' }" @click.stop>
            <div class="modal__header">
              <div class="modal__title-group">
                <span class="modal__badge">{{ activeModalScreen?.badge }}</span>
                <h4 class="modal__title">{{ activeModalScreen?.title }}</h4>
              </div>
              <button type="button" class="modal__close" @click="closeModal" title="Cerrar (Esc)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>
            <div class="modal__viewport">
              <img
                :src="resolveImage(activeModalScreen)"
                :alt="activeModalScreen?.title"
                class="modal__image"
              />
            </div>
            <div class="modal__footer">
              <p class="modal__desc">{{ activeModalScreen?.desc }}</p>
              <div class="modal__controls">
                <button
                  type="button"
                  class="modal__nav-btn"
                  @click="prevModalScreen"
                  :title="activeTab === 'es' ? 'Anterior' : 'Previous'"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"/>
                  </svg>
                </button>
                <span class="modal__counter">
                  {{ activeScreenIndex + 1 }} / {{ currentPillar.screenshots?.length }}
                </span>
                <button
                  type="button"
                  class="modal__nav-btn"
                  @click="nextModalScreen"
                  :title="activeTab === 'es' ? 'Siguiente' : 'Next'"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from '../composables/useI18n'

// Web Screenshots (3)
import crmContactsListImg from '../assets/screenshots/crm-contacts-list.png'
import crmContactDetailsImg from '../assets/screenshots/crm-contact-details.png'
import crmCompanySettingsImg from '../assets/screenshots/crm-company-settings.png'

// Windows Desktop Screenshots (8)
import winChatMainImg from '../assets/screenshots/win-chat-main.png'
import winChatCalendarImg from '../assets/screenshots/win-chat-calendar.png'
import winChatKanbanImg from '../assets/screenshots/win-chat-kanban.png'
import winSyncFoldersImg from '../assets/screenshots/win-sync-folders.png'
import winSyncSettingsImg from '../assets/screenshots/win-sync-settings.png'
import winSyncAccountImg from '../assets/screenshots/win-sync-account.png'
import winWabaChatImg from '../assets/screenshots/win-waba-chat.png'
import winWabaTemplatesImg from '../assets/screenshots/win-waba-templates.png'

// Mobile Screenshots (6)
import mobChatListImg from '../assets/screenshots/mob-chat-list.png'
import mobChatCalendarImg from '../assets/screenshots/mob-chat-calendar.png'
import mobChatNotesImg from '../assets/screenshots/mob-chat-notes.png'
import mobWabaInboxImg from '../assets/screenshots/mob-waba-inbox.png'
import mobWabaAccountsImg from '../assets/screenshots/mob-waba-accounts.png'
import mobWabaProfileImg from '../assets/screenshots/mob-waba-profile.png'

const imageMap = {
  // Web
  'contacts-list': crmContactsListImg,
  'contact-details': crmContactDetailsImg,
  'company-settings': crmCompanySettingsImg,
  // Windows
  'win-chat-main': winChatMainImg,
  'win-chat-calendar': winChatCalendarImg,
  'win-chat-kanban': winChatKanbanImg,
  'win-sync-folders': winSyncFoldersImg,
  'win-sync-settings': winSyncSettingsImg,
  'win-sync-account': winSyncAccountImg,
  'win-waba-chat': winWabaChatImg,
  'win-waba-templates': winWabaTemplatesImg,
  // Mobile
  'mob-chat-list': mobChatListImg,
  'mob-chat-calendar': mobChatCalendarImg,
  'mob-chat-notes': mobChatNotesImg,
  'mob-waba-inbox': mobWabaInboxImg,
  'mob-waba-accounts': mobWabaAccountsImg,
  'mob-waba-profile': mobWabaProfileImg,
}

const resolveImage = (shot) => {
  if (!shot) return ''
  if (imageMap[shot.id]) return imageMap[shot.id]
  if (shot.src) {
    const base = import.meta.env.BASE_URL || '/'
    return shot.src.startsWith('/') ? `${base}${shot.src.slice(1)}` : shot.src
  }
  return ''
}

const { t } = useI18n()
const activeTab = ref('web')
const activeScreenIndex = ref(0)
const isModalOpen = ref(false)

const selectTab = (tab) => {
  activeTab.value = tab
  activeScreenIndex.value = 0
}

const currentPillar = computed(() => {
  return t.value.zaaztech[activeTab.value] || t.value.zaaztech.web
})

const otherProjects = computed(() => {
  const list = t.value.projects?.items || []
  return list.filter((p) => p.id === 'fintech-credit' || p.id === 'mobile-payments')
})

const currentScreen = computed(() => {
  const list = currentPillar.value.screenshots || []
  return list[activeScreenIndex.value] || list[0] || {}
})

const activeModalScreen = computed(() => {
  const list = currentPillar.value.screenshots || []
  return list[activeScreenIndex.value] || list[0] || null
})

const openModal = (idx) => {
  activeScreenIndex.value = idx
  isModalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  isModalOpen.value = false
  document.body.style.overflow = ''
}

const nextModalScreen = () => {
  const list = currentPillar.value.screenshots || []
  if (list.length > 0) {
    activeScreenIndex.value = (activeScreenIndex.value + 1) % list.length
  }
}

const prevModalScreen = () => {
  const list = currentPillar.value.screenshots || []
  if (list.length > 0) {
    activeScreenIndex.value = (activeScreenIndex.value - 1 + list.length) % list.length
  }
}

const handleKeydown = (e) => {
  if (!isModalOpen.value) return
  if (e.key === 'Escape') closeModal()
  if (e.key === 'ArrowRight') nextModalScreen()
  if (e.key === 'ArrowLeft') prevModalScreen()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.zaaztech {
  max-width: 1100px;
  margin: 0 auto;
  padding: 6rem 2rem;
}

.zaaztech__header {
  margin-bottom: 2.5rem;
}

.section__title {
  font-size: clamp(1.5rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.6rem;
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

.zaaztech__tagline {
  font-family: var(--font-mono);
  font-size: 0.95rem;
  color: var(--accent-secondary);
  margin-bottom: 0.5rem;
}

.zaaztech__subtitle {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 820px;
}

/* Tabs */
.zaaztech__tabs {
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.75rem 1.3rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 8px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 0.85rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all var(--transition-smooth);
}

.tab-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.tab-btn--active {
  background: var(--bg-card);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  box-shadow: 0 0 20px var(--accent-glow);
  font-weight: 600;
}

/* Panel */
.zaaztech__panel {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  padding: 2.2rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.12);
  transition: border-color var(--transition-smooth);
}

.panel__hero {
  margin-bottom: 2rem;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid var(--border-subtle);
}

.panel__role-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent-secondary);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
  margin-bottom: 0.8rem;
}

.panel__title {
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.8rem;
}

.panel__summary {
  font-size: 0.93rem;
  color: var(--text-secondary);
  line-height: 1.8;
}

.panel__section {
  margin-bottom: 2.2rem;
}

.panel__section:last-child {
  margin-bottom: 0;
}

.panel__section-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 1.1rem;
}

.panel__section-title svg {
  color: var(--accent-primary);
}

/* Tech Grid */
.panel__tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-chip {
  padding: 0.35rem 0.75rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--accent-primary);
  transition: all var(--transition-smooth);
}

.tech-chip:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 10px var(--accent-glow);
}

/* Showcase Section */
.panel__section--showcase {
  background: var(--bg-secondary);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.6rem;
}

.showcase__header {
  margin-bottom: 1.2rem;
}

.showcase__subtitle {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-top: -0.6rem;
  margin-bottom: 0.8rem;
}

.showcase__nav {
  display: flex;
  gap: 0.6rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
}

.showcase__nav-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 0.85rem;
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 6px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.showcase__nav-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.showcase__nav-btn--active {
  border-color: var(--accent-primary);
  background: var(--bg-card);
  color: var(--text-primary);
  box-shadow: 0 0 12px var(--accent-glow);
}

.showcase__nav-badge {
  font-size: 0.68rem;
  color: var(--accent-secondary);
  background: var(--bg-primary);
  padding: 0.15rem 0.45rem;
  border-radius: 4px;
}

/* Common Frames */
.browser-frame,
.windows-frame {
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  overflow: hidden;
  background: var(--bg-card);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.browser-frame:hover,
.windows-frame:hover,
.mobile-frame:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 12px 40px var(--accent-glow);
}

/* Browser Frame */
.browser-frame__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 1rem;
  background: var(--terminal-bar-bg);
  border-bottom: 1px solid var(--border-subtle);
  gap: 1rem;
}

.browser-frame__dots {
  display: flex;
  gap: 6px;
}

.browser-frame__dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.browser-frame__dots span:nth-child(1) { background: #ff5f57; }
.browser-frame__dots span:nth-child(2) { background: #ffbd2e; }
.browser-frame__dots span:nth-child(3) { background: #28c840; }

.browser-frame__address {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 4px;
  padding: 0.2rem 0.8rem;
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--text-muted);
  flex: 1;
  max-width: 480px;
}

.browser-frame__zoom-badge {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--accent-primary);
}

.browser-frame__canvas,
.windows-frame__canvas {
  position: relative;
  background: var(--bg-card);
  overflow: hidden;
  min-height: 240px;
}

.browser-frame__image,
.windows-frame__image {
  width: 100%;
  display: block;
  max-height: 500px;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;
}

.browser-frame:hover .browser-frame__image,
.windows-frame:hover .windows-frame__image {
  transform: scale(1.015);
}

.browser-frame__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.browser-frame:hover .browser-frame__overlay,
.windows-frame:hover .browser-frame__overlay,
.mobile-frame:hover .browser-frame__overlay {
  opacity: 1;
}

.browser-frame__overlay-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: #ffffff;
  font-family: var(--font-mono);
  font-size: 0.85rem;
  background: rgba(10, 10, 15, 0.85);
  padding: 0.8rem 1.4rem;
  border-radius: 8px;
  border: 1px solid var(--accent-primary);
  box-shadow: 0 0 20px var(--accent-glow);
}

.browser-frame__caption {
  padding: 0.8rem 1.2rem;
  background: var(--bg-card);
  border-top: 1px solid var(--border-subtle);
  font-size: 0.82rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.browser-frame__caption strong {
  color: var(--text-primary);
}

/* Windows 11 Native Frame */
.windows-frame__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.55rem 1rem;
  background: var(--terminal-bar-bg);
  border-bottom: 1px solid var(--border-subtle);
}

.windows-frame__title {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.windows-frame__title svg {
  color: var(--accent-primary);
}

.windows-frame__controls {
  display: flex;
  gap: 0.8rem;
  align-items: center;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-family: var(--font-mono);
}

.windows-ctrl {
  cursor: pointer;
  transition: color var(--transition-smooth);
}

.windows-ctrl:hover {
  color: var(--text-primary);
}

.windows-ctrl--close:hover {
  color: #ff5f57;
}

/* Mobile Frame Container */
.mobile-frame-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.mobile-frame {
  max-width: 360px;
  width: 100%;
  background: #000000;
  border: 3px solid var(--border-subtle);
  border-radius: 36px;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  position: relative;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.mobile-frame__notch {
  height: 24px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding-top: 4px;
}

.mobile-frame__speaker {
  width: 44px;
  height: 4px;
  background: #2a2a35;
  border-radius: 2px;
}

.mobile-frame__camera {
  width: 8px;
  height: 8px;
  background: #1a1a24;
  border-radius: 50%;
  border: 1px solid #333345;
}

.mobile-frame__canvas {
  position: relative;
  background: var(--bg-card);
  overflow: hidden;
}

.mobile-frame__image {
  width: 100%;
  display: block;
  max-height: 560px;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;
}

.mobile-frame:hover .mobile-frame__image {
  transform: scale(1.02);
}

.mobile-frame__bottom-bar {
  height: 20px;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-frame__home-indicator {
  width: 120px;
  height: 4px;
  background: #55556a;
  border-radius: 2px;
}

.mobile-caption {
  max-width: 700px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--border-subtle);
  text-align: center;
}

/* Pillars Grid */
.pillars__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}

.pillar-card {
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  border-radius: 10px;
  padding: 1.3rem;
  transition: all var(--transition-smooth);
}

.pillar-card:hover {
  border-color: var(--accent-primary);
  transform: translateY(-2px);
}

.pillar-card__header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.6rem;
}

.pillar-card__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-secondary);
  box-shadow: 0 0 8px var(--accent-glow-green);
  flex-shrink: 0;
}

.pillar-card__title {
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
}

.pillar-card__desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

/* Features List */
.features__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.6;
}

.feature-item__icon {
  color: var(--accent-primary);
  font-size: 0.75rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

/* Lightbox Modal */
.modal__backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal__container {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 14px;
  max-width: 1200px;
  width: 100%;
  max-height: 92vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
}

.modal__container--mobile {
  max-width: 500px;
}

.modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--border-subtle);
  background: var(--bg-secondary);
}

.modal__title-group {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.modal__badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  color: var(--accent-secondary);
  background: var(--bg-primary);
  border: 1px solid var(--border-subtle);
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
}

.modal__title {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-primary);
}

.modal__close {
  background: transparent;
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.modal__close:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.modal__viewport {
  flex: 1;
  overflow-y: auto;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 72vh;
  padding: 1rem;
}

.modal__image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  display: block;
  border-radius: 6px;
}

.modal__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem 1.5rem;
  border-top: 1px solid var(--border-subtle);
  background: var(--bg-secondary);
  gap: 1rem;
}

.modal__desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.5;
  flex: 1;
}

.modal__controls {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-shrink: 0;
}

.modal__nav-btn {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  border-radius: 6px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.modal__nav-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.modal__counter {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Modal transition */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.25s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

/* Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

/* Other Key Projects (Unified Portfolio) */
.zaaztech__other-projects {
  margin-top: 5rem;
  padding-top: 3.5rem;
  border-top: 1px solid var(--border-subtle);
}

.other-projects__header {
  margin-bottom: 2rem;
}

.other-projects__title {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.4rem;
}

.other-projects__subtitle {
  font-size: 0.92rem;
  color: var(--text-secondary);
}

.other-projects__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.project-card {
  background: var(--bg-card);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 1.8rem;
  transition: all var(--transition-smooth);
  display: flex;
  flex-direction: column;
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
  margin-top: auto;
}

.project-card__detail {
  font-size: 0.82rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  line-height: 1.5;
}

.project-card__bullet {
  color: var(--accent-primary);
  font-size: 0.7rem;
  margin-top: 0.15rem;
  flex-shrink: 0;
}

@media (max-width: 800px) {
  .pillars__grid {
    grid-template-columns: 1fr;
  }

  .zaaztech__panel {
    padding: 1.5rem;
  }

  .browser-frame__address {
    display: none;
  }

  .modal__footer {
    flex-direction: column;
    align-items: stretch;
  }

  .modal__controls {
    justify-content: center;
  }
}
</style>
