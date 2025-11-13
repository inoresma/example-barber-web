import { ref } from 'vue'

const isDark = ref(false)

const initTheme = () => {
  if (typeof window === 'undefined') return

  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = prefersDark
  }

  applyTheme()
}

const applyTheme = () => {
  if (typeof document === 'undefined') return

  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

if (typeof window !== 'undefined') {
  initTheme()
  
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      isDark.value = e.matches
      applyTheme()
    }
  })
}

export function useTheme() {
  const toggleTheme = () => {
    isDark.value = !isDark.value
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
    applyTheme()
  }

  return {
    isDark,
    toggleTheme
  }
}

