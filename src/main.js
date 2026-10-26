import { createApp } from 'vue'
import './styles/global.css'
import App from './App.vue'

const app = createApp(App)

app.directive('reveal', {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value) el.style.transitionDelay = binding.value
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('reveal--visible')
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    observer.observe(el)
  },
})

app.mount('#app')
