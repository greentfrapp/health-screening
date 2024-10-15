<template>
  <div class="order-2 shrink grow w-full h-full overflow-hidden flex lg:block">
    <div class="order-2 w-full overflow-hidden flex flex-col lg:h-[90%] lg:shadow-lg lg:border lg:rounded-xl">
      <div class="font-medium text-center shrink-0 text-neutral-600 py-2">
        {{ store.searchResults.length }} result{{ store.searchResults.length !== 1 ? 's' : '' }}
      </div>
      <div class="overflow-auto p-2 space-y-2">
        <div v-for="result in store.searchResults"
          class="w-full overflow-hidden bg-neutral-100 rounded-lg p-2 space-y-2">
          <div class="text-sm px-3">{{ result.Disease }}</div>
          <Header2 class="px-3">{{ result.Test }}</Header2>
          <div class="flex gap-1 px-3">
            <div v-if="result['Disease Type']" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Disease Type"] }}</div>
            <div v-if="result.Category" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Category"] }} Test</div>
          </div>
          <div v-if="result['General Population Recommendation']"
            class="bg-green-100 px-3 py-2 rounded-xl space-y-2">
            <h3>General Population Recommendation</h3>
            <div v-html="converter.makeHtml(result['General Population Recommendation'].replaceAll('\n', '\n\n'))"
              class="space-y-2"></div>
          </div>
          <div v-if="result['Individual Recommendation']"
            class="px-3 py-2 space-y-2">
            <div v-html="converter.makeHtml(result['Individual Recommendation'].replaceAll('\n', '\n\n'))"
              class="space-y-2"></div>
          </div>
          <Collapsible v-if="result.Notes" label="Additional Information">
            <div v-html="converter.makeHtml(result.Notes.replaceAll('\n', '\n\n'))"
              class="space-y-2 pt-2"></div>
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
import { nextTick, watch } from 'vue'
import { targetBlank } from '@/utils/utils'

const store = useStore()
const converter = new showdown.Converter()

watch(() => store.searchResults.length, async () => {
  await nextTick()
  targetBlank()
}, { immediate: true })
</script>
