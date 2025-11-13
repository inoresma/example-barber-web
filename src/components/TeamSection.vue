<template>
  <section id="equipo" class="py-20 bg-white dark:bg-barber-black">
    <div class="container mx-auto px-4">
      <SectionTitle
        title="Nuestro Equipo"
        subtitle="Profesionales apasionados por su trabajo"
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          v-for="member in teamMembers"
          :key="member.id"
          class="text-center"
        >
          <div class="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-barber-gold/30 to-gray-300 dark:to-barber-black flex items-center justify-center text-5xl">
            {{ member.emoji }}
          </div>
          <h3 class="text-2xl font-bold mb-2 text-barber-gold">{{ member.name }}</h3>
          <p class="text-gray-600 dark:text-barber-light-gray mb-4">{{ member.role }}</p>
          <p class="text-sm text-gray-500 dark:text-barber-light-gray">{{ member.experience }}</p>
          <div class="mt-4 flex justify-center space-x-2">
            <span
              v-for="specialty in member.specialties"
              :key="specialty"
              class="px-3 py-1 bg-gray-200 dark:bg-barber-gray rounded-full text-xs text-barber-gold"
            >
              {{ specialty }}
            </span>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'
import Card from './Card.vue'

const teamMembers = ref([
  {
    id: 1,
    name: 'Carlos Martínez',
    role: 'Barbero Principal',
    experience: '12 años de experiencia',
    specialties: ['Cortes Clásicos', 'Barbas'],
    emoji: '👨‍💼'
  },
  {
    id: 2,
    name: 'Miguel Rodríguez',
    role: 'Barbero Senior',
    experience: '8 años de experiencia',
    specialties: ['Cortes Modernos', 'Afeitados'],
    emoji: '👨'
  },
  {
    id: 3,
    name: 'David López',
    role: 'Barbero',
    experience: '5 años de experiencia',
    specialties: ['Estilos Jóvenes', 'Tratamientos'],
    emoji: '🧑'
  }
])
</script>

