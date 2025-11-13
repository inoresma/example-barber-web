<template>
  <section id="inicio" class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div class="absolute inset-0 hero-bg-image"></div>
    <div class="absolute inset-0 bg-gradient-to-br from-barber-black/85 via-barber-dark/80 to-barber-black/85 dark:from-barber-black/90 dark:via-barber-dark/85 dark:to-barber-black/90"></div>
    <div class="absolute inset-0 pattern-overlay opacity-30"></div>
    <div class="absolute inset-0 gold-accent"></div>
    
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <Transition name="fade-up" appear>
        <h1 class="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
          <span class="text-white">Estilo y</span>
          <span class="text-barber-gold block mt-2">Tradición</span>
        </h1>
      </Transition>
      
      <Transition name="fade-up" appear :delay="200">
        <p class="text-xl md:text-2xl text-white/90 mb-8 text-shadow">
          Más de 10 años de experiencia en cortes y barbas profesionales. 
          Tu mejor versión nos espera.
        </p>
      </Transition>
      
      <Transition name="fade-up" appear :delay="400">
        <Button @click="scrollToReservas" size="lg">
          Reservar Cita
        </Button>
      </Transition>
    </div>
    
    <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-barber-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </section>
</template>

<script setup>
import Button from './Button.vue'

const scrollToReservas = () => {
  const element = document.getElementById('reservas')
  if (element) {
    const offset = 80
    const elementPosition = element.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}
</script>

<style scoped>
.hero-bg-image {
  background-image: url('https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.pattern-overlay {
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23 11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-5 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29-22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23d4af37' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 200px 200px;
}

.gold-accent {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, transparent 50%, rgba(212, 175, 55, 0.1) 100%);
  background-size: 200% 200%;
  animation: shimmer 8s ease-in-out infinite;
}

@keyframes shimmer {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.fade-up-enter-active {
  transition: all 0.8s ease-out;
}

.fade-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@media (max-width: 768px) {
  .hero-bg-image {
    background-attachment: scroll;
  }
}
</style>

