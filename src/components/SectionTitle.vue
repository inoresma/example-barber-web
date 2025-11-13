<template>
  <div class="text-center mb-12">
    <h2 class="text-4xl md:text-5xl font-bold mb-4 text-barber-gold">
      {{ title }}
    </h2>
    <div class="w-24 h-1 bg-barber-gold mx-auto mb-4"></div>
    <p v-if="subtitle" class="text-gray-600 dark:text-barber-light-gray text-lg max-w-2xl mx-auto">
      {{ subtitle }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

