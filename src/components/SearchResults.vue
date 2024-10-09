<template>
  <div class="order-2 shrink grow w-full overflow-auto p-2 space-y-2">
    <div v-for="result in store.searchResults"
      class="w-full overflow-hidden bg-neutral-100 rounded-lg p-2 space-y-1">
      <div class="text-sm">{{ result.Disease }}</div>
      <Header2>{{ result.Test }}</Header2>
      <div class="flex gap-1">
        <div v-if="result['Disease Type']" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Disease Type"] }}</div>
        <div v-if="result.Category" class="bg-neutral-200 w-max rounded-full px-2 text-sm">{{ result["Category"] }} Test</div>
      </div>
      <div v-if="result['General Population Recommendation']"
        class="border-4 bg-green-100 border-green-500 px-2 py-1 rounded-xl">
        <h3>General Population Recommendation</h3>
        <div v-html="converter.makeHtml(result['General Population Recommendation'])"></div>
      </div>
      <div v-if="result.Notes">
        {{ result.Notes }}
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
