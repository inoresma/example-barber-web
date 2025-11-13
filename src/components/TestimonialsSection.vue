<template>
  <section id="testimonios" class="py-20 bg-white dark:bg-barber-black">
    <div class="container mx-auto px-4">
      <SectionTitle
        title="Lo que Dicen Nuestros Clientes"
        subtitle="La satisfacción de nuestros clientes es nuestra mayor recompensa"
      />
      
      <div class="max-w-6xl mx-auto">
        <div class="relative overflow-hidden">
          <div
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="min-w-full px-4"
            >
              <Card class="text-center">
                <div class="text-5xl mb-4">{{ testimonial.emoji }}</div>
                <p class="text-lg text-gray-600 dark:text-barber-light-gray mb-6 italic leading-relaxed">
                  "{{ testimonial.text }}"
                </p>
                <div class="flex items-center justify-center space-x-2 mb-2">
                  <div class="text-barber-gold">★★★★★</div>
                </div>
                <h4 class="text-xl font-bold text-barber-black dark:text-white mb-1">{{ testimonial.name }}</h4>
                <p class="text-sm text-gray-500 dark:text-barber-light-gray">{{ testimonial.role }}</p>
              </Card>
            </div>
          </div>
        </div>
        
        <div class="flex justify-center space-x-2 mt-8">
          <button
            v-for="(testimonial, index) in testimonials"
            :key="index"
            @click="currentIndex = index"
            :class="[
              'w-3 h-3 rounded-full transition-all duration-300',
              currentIndex === index ? 'bg-barber-gold w-8' : 'bg-gray-400 dark:bg-barber-light-gray'
            ]"
          ></button>
        </div>
        
        <div class="flex justify-center space-x-4 mt-6">
          <button
            @click="previousTestimonial"
            class="p-2 bg-gray-200 dark:bg-barber-gray rounded-full hover:bg-barber-gold transition-colors text-barber-black dark:text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            @click="nextTestimonial"
            class="p-2 bg-gray-200 dark:bg-barber-gray rounded-full hover:bg-barber-gold transition-colors text-barber-black dark:text-white"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import SectionTitle from './SectionTitle.vue'
import Card from './Card.vue'

const currentIndex = ref(0)

const testimonials = ref([
  {
    name: 'Juan Pérez',
    role: 'Cliente desde 2020',
    text: 'Excelente servicio y atención. Siempre salgo satisfecho con mi corte. Los recomiendo totalmente.',
    emoji: '👍'
  },
  {
    name: 'Roberto García',
    role: 'Cliente frecuente',
    text: 'La mejor barbería de la ciudad. Profesionales de verdad que saben lo que hacen. El ambiente es increíble.',
    emoji: '⭐'
  },
  {
    name: 'Fernando López',
    role: 'Cliente desde 2019',
    text: 'Carlos y su equipo son los mejores. Siempre me dan el mejor consejo sobre mi estilo y el resultado es perfecto.',
    emoji: '💯'
  },
  {
    name: 'Alejandro Martín',
    role: 'Cliente nuevo',
    text: 'Primera vez que vengo y quedé impresionado. Servicio de primera calidad y muy buena atención al cliente.',
    emoji: '🔥'
  }
])

const nextTestimonial = () => {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
}

const previousTestimonial = () => {
  currentIndex.value = currentIndex.value === 0 ? testimonials.value.length - 1 : currentIndex.value - 1
}

let autoSlideInterval

onMounted(() => {
  autoSlideInterval = setInterval(() => {
    nextTestimonial()
  }, 5000)
})

onUnmounted(() => {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval)
  }
})
</script>

