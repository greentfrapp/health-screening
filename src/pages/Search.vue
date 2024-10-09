<template>
  <div class="w-screen h-full overflow-hidden grow shrink flex flex-col">
    <SearchBar/>
    <SearchResults/>
  </div>
</template>
<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import SearchResults from '@/components/SearchResults.vue'
</script>
