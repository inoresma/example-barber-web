<template>
  <button
    :class="[
      'px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105',
      variant === 'primary' ? 'bg-barber-gold text-barber-black hover:bg-barber-light-gold' : '',
      variant === 'secondary' ? 'bg-transparent border-2 border-barber-gold text-barber-gold hover:bg-barber-gold hover:text-barber-black' : '',
      variant === 'outline' ? 'bg-transparent border-2 border-barber-black dark:border-white text-barber-black dark:text-white hover:bg-barber-black dark:hover:bg-white hover:text-white dark:hover:text-barber-black' : '',
      size === 'sm' ? 'px-4 py-2 text-sm' : '',
      size === 'lg' ? 'px-8 py-4 text-lg' : ''
    ]"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
})

defineEmits(['click'])
</script>

