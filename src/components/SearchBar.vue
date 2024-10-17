<template>
  <div class="order-3 lg:order-1 shrink-0 bg-white p-2 overflow-hidden w-full lg:w-[30%]">
    <div class="flex">
      <button class="w-10 h-10 flex items-center justify-center lg:hidden">
        <!-- <EmptyFunnelIcon v-if="!store.hasSearchFilters"
          class="text-neutral-600 hover:text-neutral-800 w-4 h-4"
          :class="[showFilters ? 'text-neutral-800' : 'text-neutral-400']"
          @click="showFilters = !showFilters" /> -->
        <FunnelIcon class="w-4 h-4"
          :class="[store.hasSearchFilters ? 'text-red-300' : 'text-neutral-400 hover:text-neutral-600']"
          @click="showFilters = !showFilters" />
      </button>
      <div class="border border-neutral-200 rounded-full px-2 w-full flex items-center max-w-[400px] overflow-hidden">
        <MagnifyingGlassIcon class="w-4 h-4 text-neutral-600" />
        <input v-model="store.searchQuery"
          class="grow px-2 py-1 focus-visible:outline-none"
          placeholder="Search"
          />
      </div>
    </div>
    <SearchFilters :class="[ showFilters ? 'block' : 'hidden lg:block lg:pt-4']" />
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import SearchFilters from './SearchFilters.vue'
import { onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const showFilters = ref(false)

watch(() => store.searchQuery, () => store.syncSearchParams(router))
watch(() => store.searchTestCategory.length, () => store.syncSearchParams(router))
watch(() => store.searchDiseaseType.length, () => store.syncSearchParams(router))

onMounted(() => {
  const route = useRoute()
  const query = route.query
  if (query.q !== undefined && query.q !== null) store.searchQuery = query.q as any
  if (query.testCategories) {
    if (typeof query.testCategories === 'string') store.searchTestCategory = [query.testCategories]
    else store.searchTestCategory = query.testCategories
  }
  if (query.diseaseTypes) {
    if (typeof query.diseaseTypes === 'string') store.searchDiseaseType = [query.diseaseTypes]
    else store.searchDiseaseType = query.diseaseTypes
  }
})
</script>
