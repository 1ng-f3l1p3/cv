import { ref, computed } from 'vue'
import { translations } from '../i18n/translations'

const currentLang = ref('es')

export function useI18n() {
  const initLang = () => {
    const saved = localStorage.getItem('cv_lang')
    if (saved === 'es' || saved === 'en') {
      currentLang.value = saved
    } else {
      currentLang.value = 'es'
    }
    applyLang(currentLang.value)
  }

  const applyLang = (val) => {
    document.documentElement.setAttribute('lang', val)
    localStorage.setItem('cv_lang', val)
  }

  const setLang = (lang) => {
    if (lang === 'es' || lang === 'en') {
      currentLang.value = lang
      applyLang(lang)
    }
  }

  const toggleLang = () => {
    const next = currentLang.value === 'es' ? 'en' : 'es'
    setLang(next)
  }

  const t = computed(() => translations[currentLang.value] || translations.es)

  return {
    lang: currentLang,
    t,
    setLang,
    toggleLang,
    initLang,
  }
}

