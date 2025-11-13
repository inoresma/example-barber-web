import { ref, onMounted, onUnmounted, watch, nextTick } from 'vue'

export function useScrollAnimation() {
  const elementRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  const initObserver = () => {
    if (typeof window === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.value) {
      observer.observe(elementRef.value)
    }
  }

  watch(elementRef, (newVal) => {
    if (newVal && observer) {
      observer.observe(newVal)
    }
  })

  onMounted(() => {
    nextTick(() => {
      initObserver()
      if (elementRef.value) {
        observer.observe(elementRef.value)
      }
    })
  })

  onUnmounted(() => {
    if (observer && elementRef.value) {
      observer.unobserve(elementRef.value)
    }
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible
  }
}

