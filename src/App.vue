<template>
  <Disclaimer v-if="store.showDisclaimer" />
  <div class="h-screen overflow-hidden flex flex-col">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { useStore } from './utils/store'
import Disclaimer from './components/Disclaimer.vue';

const store = useStore()
</script>
