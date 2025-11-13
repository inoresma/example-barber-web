<template>
  <section id="sobre-nosotros" class="py-20 bg-gray-50 dark:bg-barber-dark">
    <div class="container mx-auto px-4">
      <SectionTitle
        title="Sobre Nosotros"
        subtitle="Tradición, calidad y dedicación en cada corte"
      />
      
      <div
        ref="sectionRef"
        :class="[
          'grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000',
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        ]"
      >
        <div class="space-y-6">
          <p class="text-lg text-gray-700 dark:text-barber-light-gray leading-relaxed">
            En <span class="text-barber-gold font-semibold">Barbería Elite</span>, 
            llevamos más de una década perfeccionando el arte del corte y el cuidado 
            masculino. Nuestro compromiso es ofrecer un servicio excepcional que combine 
            técnicas tradicionales con las últimas tendencias en moda y estilo.
          </p>
          
          <p class="text-lg text-gray-700 dark:text-barber-light-gray leading-relaxed">
            Cada cliente es único para nosotros. Nos tomamos el tiempo necesario para 
            entender tu estilo, tus necesidades y tus preferencias, asegurándonos de que 
            salgas de nuestro local sintiéndote renovado y con confianza.
          </p>
          
          <div class="grid grid-cols-2 gap-6 mt-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-barber-gold mb-2">10+</div>
              <div class="text-gray-600 dark:text-barber-light-gray">Años de Experiencia</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-barber-gold mb-2">5000+</div>
              <div class="text-gray-600 dark:text-barber-light-gray">Clientes Satisfechos</div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="aspect-square rounded-lg overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop"
              alt="Barbería Elite - Interior profesional"
              class="w-full h-full object-cover"
              @error="handleImageError"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const { elementRef: sectionRef, isVisible } = useScrollAnimation()

const handleImageError = (event) => {
  event.target.src = 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&fit=crop'
  event.target.onerror = null
}
</script>

