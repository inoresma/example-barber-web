<template>
  <section id="reservas" class="py-20 bg-gray-50 dark:bg-barber-dark">
    <div class="container mx-auto px-4 max-w-4xl">
      <SectionTitle
        title="Reserva tu Cita"
        subtitle="Selecciona el servicio, fecha y hora que mejor te convenga"
      />
      
      <div class="bg-gray-100 dark:bg-barber-gray rounded-lg p-8">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Servicio</label>
            <select
              v-model="formData.service"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
              required
            >
              <option value="">Selecciona un servicio</option>
              <option v-for="service in services" :key="service.id" :value="service.id">
                {{ service.name }} - {{ service.price }}
              </option>
            </select>
          </div>
          
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Barbero</label>
            <select
              v-model="formData.barber"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
              required
            >
              <option value="">Selecciona un barbero</option>
              <option v-for="barber in barbers" :key="barber.id" :value="barber.id">
                {{ barber.name }}
              </option>
            </select>
          </div>
          
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Fecha</label>
            <input
              v-model="formData.date"
              type="date"
              :min="minDate"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
              required
            />
          </div>
          
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Hora</label>
            <select
              v-model="formData.time"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
              required
            >
              <option value="">Selecciona una hora</option>
              <option v-for="time in availableTimes" :key="time" :value="time">
                {{ time }}
              </option>
            </select>
          </div>
          
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Nombre Completo</label>
            <input
              v-model="formData.name"
              type="text"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
              placeholder="Tu nombre completo"
              required
            />
          </div>
          
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Teléfono</label>
            <input
              v-model="formData.phone"
              type="tel"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
              placeholder="+56 9 XXXX XXXX"
              required
            />
          </div>
          
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Email</label>
            <input
              v-model="formData.email"
              type="email"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors"
              placeholder="tu@email.com"
              required
            />
          </div>
          
          <div>
            <label class="block text-barber-black dark:text-white font-semibold mb-2">Comentarios (opcional)</label>
            <textarea
              v-model="formData.comments"
              rows="4"
              class="w-full px-4 py-3 bg-white dark:bg-barber-black border border-gray-300 dark:border-barber-light-gray rounded-lg text-barber-black dark:text-white focus:outline-none focus:border-barber-gold transition-colors resize-none"
              placeholder="Alguna preferencia o comentario adicional..."
            ></textarea>
          </div>
          
          <Button type="submit" size="lg" class="w-full">
            Confirmar Reserva
          </Button>
        </form>
      </div>
      
      <Modal :is-open="showConfirmation" @close="closeConfirmation">
        <div class="text-center py-8">
          <div class="text-6xl mb-4">✅</div>
          <h3 class="text-3xl font-bold text-barber-gold mb-4">¡Reserva Confirmada!</h3>
          <div class="text-left bg-gray-100 dark:bg-barber-gray p-6 rounded-lg mb-6 space-y-2">
            <p class="text-barber-black dark:text-white"><span class="text-barber-gold font-semibold">Servicio:</span> {{ confirmationData.service }}</p>
            <p class="text-barber-black dark:text-white"><span class="text-barber-gold font-semibold">Barbero:</span> {{ confirmationData.barber }}</p>
            <p class="text-barber-black dark:text-white"><span class="text-barber-gold font-semibold">Fecha:</span> {{ confirmationData.date }}</p>
            <p class="text-barber-black dark:text-white"><span class="text-barber-gold font-semibold">Hora:</span> {{ confirmationData.time }}</p>
            <p class="text-barber-black dark:text-white"><span class="text-barber-gold font-semibold">Cliente:</span> {{ confirmationData.name }}</p>
          </div>
          <p class="text-gray-600 dark:text-barber-light-gray mb-6">
            Te hemos enviado un email de confirmación a <span class="text-barber-gold">{{ confirmationData.email }}</span>
          </p>
          <p class="text-sm text-gray-600 dark:text-barber-light-gray">
            Recuerda que esta es una demostración visual. En un sistema real, recibirías una confirmación por email.
          </p>
        </div>
      </Modal>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import SectionTitle from './SectionTitle.vue'
import Button from './Button.vue'
import Modal from './Modal.vue'

const showConfirmation = ref(false)
const confirmationData = ref({})

const formData = ref({
  service: '',
  barber: '',
  date: '',
  time: '',
  name: '',
  phone: '',
  email: '',
  comments: ''
})

const services = ref([
  { id: 1, name: 'Mullet', price: '$10.000' },
  { id: 2, name: 'Taper Fade', price: '$10.000' },
  { id: 3, name: 'Fade con Diseño', price: '$10.000' },
  { id: 4, name: 'Undercut', price: '$10.000' },
  { id: 5, name: 'Pompadour', price: '$10.000' },
  { id: 6, name: 'Texturizado', price: '$10.000' },
  { id: 7, name: 'Crew Cut', price: '$10.000' },
  { id: 8, name: 'French Crop', price: '$10.000' },
  { id: 9, name: 'Quiff', price: '$10.000' },
  { id: 10, name: 'Side Part', price: '$10.000' },
  { id: 11, name: 'Arreglo de Barba', price: '$12.000' },
  { id: 12, name: 'Barba Completa', price: '$15.000' },
  { id: 13, name: 'Perfilado de Barba', price: '$10.000' },
  { id: 14, name: 'Afeitado Clásico', price: '$18.000' },
  { id: 15, name: 'Corte + Barba', price: '$30.000' },
  { id: 16, name: 'Tratamiento Capilar', price: '$8.000' },
  { id: 17, name: 'Tinte de Cabello', price: '$25.000' }
])

const barbers = ref([
  { id: 1, name: 'Carlos Martínez' },
  { id: 2, name: 'Miguel Rodríguez' },
  { id: 3, name: 'David López' }
])

const availableTimes = ref([
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30', '17:00', '17:30',
  '18:00', '18:30', '19:00', '19:30'
])

const minDate = computed(() => {
  const today = new Date()
  today.setDate(today.getDate() + 1)
  return today.toISOString().split('T')[0]
})

const handleSubmit = () => {
  const selectedService = services.value.find(s => s.id === parseInt(formData.value.service))
  const selectedBarber = barbers.value.find(b => b.id === parseInt(formData.value.barber))
  
  confirmationData.value = {
    service: selectedService?.name || '',
    barber: selectedBarber?.name || '',
    date: new Date(formData.value.date).toLocaleDateString('es-CL', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    }),
    time: formData.value.time,
    name: formData.value.name,
    email: formData.value.email
  }
  
  showConfirmation.value = true
  
  formData.value = {
    service: '',
    barber: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    comments: ''
  }
}

const closeConfirmation = () => {
  showConfirmation.value = false
}
</script>
