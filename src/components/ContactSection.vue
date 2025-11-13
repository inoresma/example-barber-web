<template>
  <section id="contacto" class="py-20 bg-gray-50 dark:bg-barber-dark">
    <div class="container mx-auto px-4">
      <SectionTitle
        title="Contacto"
        subtitle="Estamos aquí para ayudarte. Visítanos o contáctanos"
      />
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div class="space-y-8">
          <div>
            <h3 class="text-2xl font-bold text-barber-gold mb-4">Información de Contacto</h3>
            <div class="space-y-4 text-barber-black dark:text-white">
              <div class="flex items-start space-x-4">
                <div class="text-barber-gold text-xl">📍</div>
                <div>
                  <p class="font-semibold text-barber-black dark:text-white">Dirección</p>
                  <p class="text-gray-600 dark:text-barber-light-gray">Av. Providencia 1234, Providencia, Santiago, Chile</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="text-barber-gold text-xl">📞</div>
                <div>
                  <p class="font-semibold text-barber-black dark:text-white">Teléfono</p>
                  <p class="text-gray-600 dark:text-barber-light-gray">+56 9 1234 5678</p>
                </div>
              </div>
              
              <div class="flex items-start space-x-4">
                <div class="text-barber-gold text-xl">✉️</div>
                <div>
                  <p class="font-semibold text-barber-black dark:text-white">Email</p>
                  <p class="text-gray-600 dark:text-barber-light-gray">info@barberiaelite.cl</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="text-2xl font-bold text-barber-gold mb-4">Horarios de Atención</h3>
            <div class="space-y-2 text-gray-600 dark:text-barber-light-gray">
              <div class="flex justify-between">
                <span>Lunes - Viernes</span>
                <span class="text-barber-black dark:text-white font-semibold">9:00 - 20:00</span>
              </div>
              <div class="flex justify-between">
                <span>Sábados</span>
                <span class="text-barber-black dark:text-white font-semibold">9:00 - 18:00</span>
              </div>
              <div class="flex justify-between">
                <span>Domingos</span>
                <span class="text-barber-black dark:text-white font-semibold">Cerrado</span>
              </div>
            </div>
          </div>
          
          <div class="bg-gray-100 dark:bg-barber-gray rounded-lg p-6">
            <h4 class="text-xl font-semibold mb-4 text-barber-gold">¿Por qué elegirnos?</h4>
            <ul class="space-y-2 text-gray-600 dark:text-barber-light-gray">
              <li class="flex items-center space-x-2">
                <span class="text-barber-gold">✓</span>
                <span>Más de 10 años de experiencia</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-barber-gold">✓</span>
                <span>Equipo de profesionales certificados</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-barber-gold">✓</span>
                <span>Productos de primera calidad</span>
              </li>
              <li class="flex items-center space-x-2">
                <span class="text-barber-gold">✓</span>
                <span>Atención personalizada</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div>
          <div class="bg-gray-100 dark:bg-barber-gray rounded-lg p-8 mb-6">
            <h3 class="text-2xl font-bold text-barber-gold mb-6">Envíanos un Mensaje</h3>
            <form @submit.prevent="handleContactSubmit" class="space-y-4">
              <div>
                <input
                  v-model="contactForm.name"
                  type="text"
                  placeholder="Tu nombre"
                  class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  v-model="contactForm.email"
                  type="email"
                  placeholder="Tu email"
                  class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
                  required
                />
              </div>
              
              <div>
                <input
                  v-model="contactForm.subject"
                  type="text"
                  placeholder="Asunto"
                  class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
                  required
                />
              </div>
              
              <div>
                <textarea
                  v-model="contactForm.message"
                  rows="5"
                  placeholder="Tu mensaje"
                  class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" class="w-full">
                Enviar Mensaje
              </Button>
            </form>
          </div>
          
          <div class="bg-gray-100 dark:bg-barber-gray rounded-lg p-6 h-64 flex items-center justify-center">
            <div class="text-center text-gray-600 dark:text-barber-light-gray">
              <svg class="w-16 h-16 mx-auto mb-4 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <p>Mapa de Ubicación</p>
              <p class="text-sm mt-2">(Vista previa - Integrar con Google Maps)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <Modal :is-open="showContactModal" @close="closeContactModal">
      <div class="text-center py-8">
        <div class="text-6xl mb-4">✉️</div>
        <h3 class="text-3xl font-bold text-barber-gold mb-4">¡Mensaje Enviado!</h3>
        <p class="text-gray-600 dark:text-barber-light-gray mb-6">
          Gracias por contactarnos. Te responderemos lo antes posible.
        </p>
        <p class="text-sm text-gray-600 dark:text-barber-light-gray">
          Esta es una demostración visual. En un sistema real, recibirías una confirmación por email.
        </p>
      </div>
    </Modal>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionTitle from './SectionTitle.vue'
import Button from './Button.vue'
import Modal from './Modal.vue'

const showContactModal = ref(false)

const contactForm = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleContactSubmit = () => {
  showContactModal.value = true
  contactForm.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
}

const closeContactModal = () => {
  showContactModal.value = false
}
</script>

