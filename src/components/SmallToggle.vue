<template>
  <button class="rounded-full px-2 lg:px-4 lg:py-1 text-sm lg:text-base flex gap-1 items-center max-w-full"
    :class="toggleClass">
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
})

const toggleClass = computed(() => {
  return props.active ?
    'bg-red-100' :
    'bg-neutral-100'
})
</script>
