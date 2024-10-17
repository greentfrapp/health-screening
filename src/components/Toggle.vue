<template>
  <button class="rounded-full px-4 py-1 truncate"
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
