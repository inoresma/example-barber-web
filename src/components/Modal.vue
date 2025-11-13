<template>
  <Transition name="modal">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
      @click.self="$emit('close')"
    >
      <div class="relative max-w-4xl w-full mx-4 max-h-[90vh] overflow-auto">
        <button
          @click="$emit('close')"
          class="absolute top-4 right-4 text-white hover:text-barber-gold text-2xl font-bold z-10"
        >
          ×
        </button>
        <div class="bg-white dark:bg-barber-dark rounded-lg p-6">
          <slot></slot>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
defineProps({
  isOpen: {
    type: Boolean,
    required: true
  }
})

defineEmits(['close'])
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>

