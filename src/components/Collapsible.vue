<template>
  <button @click="show = !show" class="text-sm lg:text-base py-2 rounded-xl text-left">
    <div class="font-semibold flex items-center gap-0.5 px-1">
      <ChevronDownIcon v-if="show" class="w-4 h-4" />
      <ChevronRightIcon v-else class="w-4 h-4" />
      {{ props.label }}
    </div>
    <div class="overflow-hidden px-2" :style="style">
      <slot></slot>
    </div>
  </button>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'

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
