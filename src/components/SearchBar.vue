<template>
  <div class="order-3 lg:order-1 shrink-0 bg-white w-full p-2 border overflow-hidden">
    <div class="border-4 border-neutral-200 rounded-full  px-2 w-full flex items-center">
      <MagnifyingGlassIcon class="w-4 h-4" />
      <input v-model="store.searchQuery"
        class="grow px-2 py-1 focus-visible:outline-none"
        placeholder="Search"
        />
      <button>
        <EmptyFunnelIcon v-if="!store.hasSearchFilters"
          class="text-neutral-400 hover:text-neutral-800 w-4 h-4"
          :class="[showFilters ? 'text-neutral-800' : 'text-neutral-400']"
          @click="showFilters = !showFilters" />
        <FunnelIcon v-else class="text-neutral-400 hover:text-neutral-800 w-4 h-4"
          :class="[showFilters ? 'text-neutral-800' : 'text-neutral-400']"
          @click="showFilters = !showFilters" />
      </button>
    </div>
    <SearchFilters v-if="showFilters" />
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'
import { FunnelIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import { FunnelIcon as EmptyFunnelIcon } from '@heroicons/vue/24/outline'
import SearchFilters from './SearchFilters.vue'
import { ref } from 'vue';

const store = useStore()

const showFilters = ref(false)
</script>
