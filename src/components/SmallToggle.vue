<template>
  <button class="border-2 rounded-full px-2 hover:border-yellow-400 text-sm lg:text-base"
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
    'bg-yellow-300 border-yellow-300' :
    'bg-white'
})
</script>
