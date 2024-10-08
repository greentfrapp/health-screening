<template>
  <button @click="show = !show" class="bg-yellow-400 text-sm lg:text-base px-2 py-0.5 rounded-lg text-left">
    <div class="font-semibold">{{ props.label }}</div>
    <div class="overflow-hidden" :style="style">
      <slot></slot>
    </div>
  </button>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps({
  label: {
    required: true,
    type: String,
  }
})

const show = ref(false)

const style = computed(() => {
  return show.value ?
    { height: 'auto' } :
    { height: 0 }
})
</script>
