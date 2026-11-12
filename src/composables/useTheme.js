import { ref, onMounted } from 'vue'

const theme = ref('dark')

export function useTheme() {
  const initTheme = () => {
    const saved = localStorage.getItem('cv_theme')
    if (saved === 'light' || saved === 'dark') {
      theme.value = saved
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      theme.value = 'light'
    } else {
      theme.value = 'dark'
    }
    applyTheme(theme.value)
  }

  const applyTheme = (val) => {
    document.documentElement.setAttribute('data-theme', val)
    localStorage.setItem('cv_theme', val)
  }

  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
    applyTheme(theme.value)
  }

  return {
    theme,
    toggleTheme,
    initTheme,
  }
}

