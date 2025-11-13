import { ref } from 'vue'

const isDark = ref(false)

const initTheme = () => {
  if (typeof window === 'undefined') return

  const stored = localStorage.getItem('theme')

  if (stored) {
    isDark.value = stored === 'dark'
  } else {
    isDark.value = false
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

