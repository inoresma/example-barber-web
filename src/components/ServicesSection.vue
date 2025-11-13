<template>
  <section id="servicios" class="py-20 bg-white dark:bg-barber-black">
    <div class="container mx-auto px-4">
      <SectionTitle
        title="Nuestros Servicios"
        subtitle="Servicios profesionales adaptados a tu estilo"
      />
      
      <div class="mb-8 flex flex-wrap justify-center gap-4">
        <button
          v-for="category in categories"
          :key="category.id"
          @click="selectedCategory = category.id"
          :class="[
            'px-6 py-2 rounded-lg font-semibold transition-all duration-300',
            selectedCategory === category.id
              ? 'bg-barber-gold text-barber-black'
              : 'bg-gray-200 dark:bg-barber-gray text-barber-black dark:text-white hover:bg-gray-300 dark:hover:bg-barber-light-gray'
          ]"
        >
          {{ category.name }}
        </button>
      </div>
      
      <div
        ref="sectionRef"
        :class="[
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <Card
          v-for="service in filteredServices"
          :key="service.id"
          class="text-center"
        >
          <div class="text-5xl mb-4">{{ service.icon }}</div>
          <h3 class="text-2xl font-bold mb-3 text-barber-gold">{{ service.name }}</h3>
          <p class="text-gray-600 dark:text-barber-light-gray mb-4">{{ service.description }}</p>
          <div class="text-3xl font-bold text-barber-black dark:text-white mb-2">{{ service.price }}</div>
          <p class="text-sm text-gray-500 dark:text-barber-light-gray">{{ service.duration }}</p>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from './SectionTitle.vue'
import Card from './Card.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation()
const selectedCategory = ref('todos')

const categories = ref([
  { id: 'todos', name: 'Todos' },
  { id: 'cortes', name: 'Cortes' },
  { id: 'barba', name: 'Barba' },
  { id: 'tratamientos', name: 'Tratamientos' },
  { id: 'combos', name: 'Combos' }
])

const services = ref([
  {
    id: 1,
    name: 'Mullet',
    category: 'cortes',
    description: 'Corte mullet moderno con fade lateral y textura superior',
    price: '$10.000',
    duration: '50 min',
    icon: '💇'
  },
  {
    id: 2,
    name: 'Taper Fade',
    category: 'cortes',
    description: 'Fade gradual desde los lados hasta la parte superior',
    price: '$10.000',
    duration: '45 min',
    icon: '✂️'
  },
  {
    id: 3,
    name: 'Fade con Diseño',
    category: 'cortes',
    description: 'Fade personalizado con diseños y líneas creativas',
    price: '$10.000',
    duration: '55 min',
    icon: '🎨'
  },
  {
    id: 4,
    name: 'Undercut',
    category: 'cortes',
    description: 'Lados y espalda muy cortos con parte superior larga',
    price: '$10.000',
    duration: '40 min',
    icon: '💇‍♂️'
  },
  {
    id: 5,
    name: 'Pompadour',
    category: 'cortes',
    description: 'Estilo clásico con volumen en la parte frontal',
    price: '$10.000',
    duration: '50 min',
    icon: '👨'
  },
  {
    id: 6,
    name: 'Texturizado',
    category: 'cortes',
    description: 'Corte con textura y movimiento natural',
    price: '$10.000',
    duration: '45 min',
    icon: '✨'
  },
  {
    id: 7,
    name: 'Crew Cut',
    category: 'cortes',
    description: 'Corte corto y uniforme, estilo militar',
    price: '$10.000',
    duration: '35 min',
    icon: '🪖'
  },
  {
    id: 8,
    name: 'French Crop',
    category: 'cortes',
    description: 'Corte corto con flequillo recto y lados desvanecidos',
    price: '$10.000',
    duration: '40 min',
    icon: '🇫🇷'
  },
  {
    id: 9,
    name: 'Quiff',
    category: 'cortes',
    description: 'Volumen frontal con lados cortos y texturizados',
    price: '$10.000',
    duration: '45 min',
    icon: '💼'
  },
  {
    id: 10,
    name: 'Side Part',
    category: 'cortes',
    description: 'Raya lateral con separación definida',
    price: '$10.000',
    duration: '40 min',
    icon: '👔'
  },
  {
    id: 11,
    name: 'Arreglo de Barba',
    category: 'barba',
    description: 'Recorte y perfilado profesional de barba',
    price: '$12.000',
    duration: '30 min',
    icon: '🧔'
  },
  {
    id: 12,
    name: 'Barba Completa',
    category: 'barba',
    description: 'Mantenimiento completo de barba con tijera y navaja',
    price: '$15.000',
    duration: '35 min',
    icon: '🧔‍♂️'
  },
  {
    id: 13,
    name: 'Perfilado de Barba',
    category: 'barba',
    description: 'Perfilado preciso de contornos y líneas',
    price: '$10.000',
    duration: '25 min',
    icon: '✂️'
  },
  {
    id: 14,
    name: 'Afeitado Clásico',
    category: 'barba',
    description: 'Afeitado tradicional con navaja caliente y toalla caliente',
    price: '$18.000',
    duration: '40 min',
    icon: '🪒'
  },
  {
    id: 15,
    name: 'Corte + Barba',
    category: 'combos',
    description: 'Combo completo: corte y arreglo de barba',
    price: '$30.000',
    duration: '60 min',
    icon: '👨'
  },
  {
    id: 16,
    name: 'Tratamiento Capilar',
    category: 'tratamientos',
    description: 'Hidratación y cuidado profundo del cabello',
    price: '$8.000',
    duration: '20 min',
    icon: '💆'
  },
  {
    id: 17,
    name: 'Tinte de Cabello',
    category: 'tratamientos',
    description: 'Coloración profesional del cabello',
    price: '$25.000',
    duration: '90 min',
    icon: '🎨'
  }
])

const filteredServices = computed(() => {
  if (selectedCategory.value === 'todos') {
    return services.value
  }
  return services.value.filter(service => service.category === selectedCategory.value)
})
</script>
