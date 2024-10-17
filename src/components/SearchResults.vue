<template>
  <div class="order-2 shrink grow w-full h-full overflow-hidden flex lg:block">
    <div class="order-2 w-full overflow-hidden flex flex-col lg:w-[95%] lg:h-[95%] lg:shadow-lg lg:border lg:rounded-xl mx-auto">
      <div class="font-medium text-center shrink-0 text-neutral-600 py-2">
        {{ store.searchResults.length }} result{{ store.searchResults.length !== 1 ? 's' : '' }}
      </div>
      <div class="overflow-auto p-2 space-y-2">
        <div v-for="result in store.searchResults"
          class="w-full overflow-hidden bg-neutral-100 rounded-lg p-2 space-y-2">
          <component :is="parseContent(result.Disease)" class="text-sm px-3"></component>
          <component :is="parseHeader(result.Test)" class="text-xl font-semibold lg:text-2xl px-3"></component>
          <div class="flex gap-1 px-3">
            <div v-if="result['Disease Type']" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Disease Type"] }}</div>
            <div v-if="result.Category" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Category"] }} Test</div>
          </div>
          <div v-if="result['General Population Recommendation']"
            class="bg-green-100 px-3 py-2 rounded-xl space-y-2">
            <h3>General Population Recommendation</h3>
            <component :is="parseContent(result['General Population Recommendation'])"
              class="space-y-3"></component>
          </div>
          <div v-if="result['Individual Recommendation']" class="px-3 py-2">
            <component :is="parseContent(result['Individual Recommendation'])" class="space-y-3"></component>
          </div>
          <Collapsible v-if="result.Notes" label="Additional Information">
            <component :is="parseContent(result.Notes)" class="space-y-3 pt-2"></component>
          </Collapsible>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'
import Header2 from '@/components/Header2.vue'
import showdown from 'showdown'
import Collapsible from './Collapsible.vue'
import CitationPopup from './CitationPopup.vue'
import { nextTick, shallowRef, watch } from 'vue'
import { targetBlank } from '@/utils/utils'

const store = useStore()
const converter = new showdown.Converter()

function parseContent(content: string) {
  let parsed = converter.makeHtml(content.replaceAll('\n', '\n\n'))
  // Parse citations
  const re = new RegExp(`<cite>(.*?)</cite>`, 'g')
  parsed = parsed.replace(re, (_: string, g: string) => `<component v-bind:is="CitationPopup" src="${g}" />`)
  return {
    template: `<div>${parsed}</div>`,
    data() {
      return {
        CitationPopup: shallowRef(CitationPopup)
      }
    },
    components: {}
  }
}

function parseHeader(content: string) {
  let parsed = content
  // Parse citations
  const re = new RegExp(`<cite>(.*?)</cite>`, 'g')
  parsed = parsed.replace(re, (_: string, g: string) => `<component v-bind:is="CitationPopup" src="${g}" />`)
  return {
    template: `<component v-bind:is="Header2">${parsed}</component>`,
    data() {
      return {
        CitationPopup: shallowRef(CitationPopup),
        Header2: shallowRef(Header2),
      }
    },
    components: {}
  }
}

watch(() => store.searchResults.length, async () => {
  await nextTick()
  targetBlank()
}, { immediate: true })
</script>
