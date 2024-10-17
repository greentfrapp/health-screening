<template>
  <div ref="citation" class="inline-block w-max underline"
    @mouseenter="showCitations = true"
    @mouseleave="showCitations = false"
    @click.stop="showCitations = !showCitations">
    [{{ props.src }}]
    <div v-if="showCitations" class="absolute bg-white rounded-lg p-4 shadow max-w-full max-h-[10rem] overflow-auto space-y-2"
      :style="boxPosition">
      <div v-for="s in citations" class="flex">
        <div class="w-10 shrink-0">{{ s }}.</div>
        <a :href="sources[s].link || undefined" target="_blank"
          class="no-underline"
          :class="[sources[s].link ? 'hover:underline' : '']">
          {{ sources[s].text }}
        </a>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import _sources from '@/utils/citations.json'

const sources = _sources as {[k:string]: any} 

const props = defineProps({
  src: {
    type: String,
    default: '',
  },
})

const citations = computed(() => {
  let citeStr = props.src
  // Parse ranges
  const re = new RegExp('(\\d+)-(\\d+)', 'g')
  citeStr = citeStr.replace(re, (_: string, startStr: string, endStr: string) => {
    const start = parseInt(startStr)
    const end = parseInt(endStr)
    if (start >= end) return end.toString()
    const range = [...Array(end-start+1).keys()].map(i => i + start)
    return range.join(',')
  })
  return citeStr.split(',')
})

const showCitations = ref(false)
const citation = ref<null|HTMLDivElement>(null)

const boxPosition = ref({})
function setBoxPosition() {
  if (citation.value) {
    boxPosition.value = {
      width: `${(citation.value.parentElement as HTMLElement).getBoundingClientRect().width}px`,
      left: `${(citation.value.parentElement as HTMLElement).getBoundingClientRect().left}px`,
      top: `${citation.value.getBoundingClientRect().bottom}px`,
    }
  }
}

watch(showCitations, show => {
  if (show) {
    setBoxPosition()
  }
})
</script>
