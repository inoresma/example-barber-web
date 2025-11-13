<template>
  <section id="galeria" class="py-20 bg-gray-50 dark:bg-barber-dark">
    <div class="container mx-auto px-4">
      <SectionTitle
        title="Galería"
        subtitle="Algunos de nuestros trabajos realizados"
      />
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
          @click="openLightbox(index)"
        >
          <img
            :src="image.image"
            :alt="image.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            @error="handleImageError($event, index)"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-barber-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
            <svg class="w-12 h-12 text-barber-gold mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
            </svg>
            <h3 class="text-white font-bold text-lg text-center">{{ image.title }}</h3>
            <p class="text-barber-gold text-sm text-center mt-1">{{ image.description }}</p>
          </div>
        </div>
      </div>
    </div>
    
    <Modal :is-open="lightboxOpen" @close="closeLightbox">
      <div v-if="currentImage !== null" class="text-center">
        <img
          :src="galleryImages[currentImage].image"
          :alt="galleryImages[currentImage].title"
          class="w-full max-h-96 object-cover rounded-lg mb-4"
          @error="handleImageError($event, currentImage)"
          loading="lazy"
        />
        <h3 class="text-2xl font-bold text-barber-gold mb-2">
          {{ galleryImages[currentImage].title }}
        </h3>
        <p class="text-gray-600 dark:text-barber-light-gray">
          {{ galleryImages[currentImage].description }}
        </p>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'
import Modal from './Modal.vue'

const lightboxOpen = ref(false)
const currentImage = ref(null)

const galleryImages = ref([
  {
    image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Mullet',
    description: 'Corte mullet moderno con fade lateral'
  },
  {
    image: 'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Taper Fade',
    description: 'Fade gradual desde los lados hasta la parte superior'
  },
  {
    image: 'https://images.pexels.com/photos/3992877/pexels-photo-3992877.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Fade con Diseño',
    description: 'Fade personalizado con diseños y líneas creativas'
  },
  {
    image: 'https://images.pexels.com/photos/3992878/pexels-photo-3992878.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Undercut',
    description: 'Lados y espalda muy cortos con parte superior larga'
  },
  {
    image: 'https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Pompadour',
    description: 'Estilo clásico con volumen en la parte frontal'
  },
  {
    image: 'https://images.pexels.com/photos/3992880/pexels-photo-3992880.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Texturizado',
    description: 'Corte con textura y movimiento natural'
  },
  {
    image: 'https://images.pexels.com/photos/3992881/pexels-photo-3992881.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Crew Cut',
    description: 'Corte corto y uniforme, estilo militar'
  },
  {
    image: 'https://images.pexels.com/photos/1319462/pexels-photo-1319462.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'French Crop',
    description: 'Corte corto con flequillo recto y lados desvanecidos'
  },
  {
    image: 'https://images.pexels.com/photos/3992883/pexels-photo-3992883.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    title: 'Quiff',
    description: 'Volumen frontal con lados cortos y texturizados'
  }
])

const fallbackImages = [
  'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3992876/pexels-photo-3992876.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3992877/pexels-photo-3992877.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3992878/pexels-photo-3992878.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3992879/pexels-photo-3992879.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3992880/pexels-photo-3992880.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3992881/pexels-photo-3992881.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/1319462/pexels-photo-1319462.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
  'https://images.pexels.com/photos/3992883/pexels-photo-3992883.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop'
]

const handleImageError = (event, index) => {
  if (index !== null && index !== undefined && fallbackImages[index]) {
    event.target.src = fallbackImages[index]
    event.target.onerror = () => {
      const title = galleryImages.value[index || 0]?.title || 'Corte de Cabello'
      const placeholderColor = 'd4af37'
      const textColor = '000000'
      event.target.src = `https://via.placeholder.com/800x800/${placeholderColor}/${textColor}?text=${encodeURIComponent(title)}`
      event.target.onerror = null
    }
  } else {
    const title = galleryImages.value[index || 0]?.title || 'Corte de Cabello'
    const placeholderColor = 'd4af37'
    const textColor = '000000'
    event.target.src = `https://via.placeholder.com/800x800/${placeholderColor}/${textColor}?text=${encodeURIComponent(title)}`
    event.target.onerror = null
  }
}

const openLightbox = (index) => {
  currentImage.value = index
  lightboxOpen.value = true
}

const closeLightbox = () => {
  lightboxOpen.value = false
  setTimeout(() => {
    currentImage.value = null
  }, 300)
}
</script>
