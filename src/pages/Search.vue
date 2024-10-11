<template>
  <div class="w-full h-full overflow-hidden grow shrink flex flex-col items-center">
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
