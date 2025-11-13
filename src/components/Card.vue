<template>
  <div
    :class="[
      'bg-gray-100 dark:bg-barber-gray rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105',
      hoverEffect ? 'hover:shadow-2xl hover:shadow-barber-gold/20' : ''
    ]"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  hoverEffect: {
    type: Boolean,
    default: true
  }
})
</script>

