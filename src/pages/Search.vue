<template>
  <div class="h-full overflow-hidden grow shrink flex flex-col lg:flex-row justify-center lg:gap-2">
    <SearchIntro v-if="store.showSearchIntro" />
    <template v-else>
      <SearchBar/>
      <SearchResults/>
    </template>
  </div>
</template>
<script setup lang="ts">
import SearchIntro from '@/components/SearchIntro.vue'
import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'
import { useStore } from '@/utils/store'

const store = useStore()
</script>
