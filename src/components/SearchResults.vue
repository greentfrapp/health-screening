<template>
  <div class="order-2 shrink grow w-full overflow-hidden flex flex-col">
    <div class="font-medium text-center shrink-0 text-neutral-600 py-2">
      {{ store.searchResults.length }} result{{ store.searchResults.length !== 1 ? 's' : '' }}
    </div>
    <div class="overflow-auto p-2 space-y-2">
      <div v-for="result in store.searchResults"
        class="w-full overflow-hidden bg-neutral-100 rounded-lg p-2 space-y-1">
        <div class="text-sm">{{ result.Disease }}</div>
        <Header2>{{ result.Test }}</Header2>
        <div class="flex gap-1">
          <div v-if="result['Disease Type']" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Disease Type"] }}</div>
          <div v-if="result.Category" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Category"] }} Test</div>
        </div>
        <div v-if="result['General Population Recommendation']"
          class="bg-green-100 px-2 py-1 rounded-xl">
          <h3>General Population Recommendation</h3>
          <div v-html="converter.makeHtml(result['General Population Recommendation'])"></div>
        </div>
        <div v-if="result.Notes">
          {{ result.Notes }}
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'
import Header2 from '@/components/Header2.vue'
import showdown from 'showdown'

const store = useStore()
const converter = new showdown.Converter()
</script>
