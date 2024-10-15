<template>
  <div class="h-dvh overflow-hidden flex flex-col lg:px-4 lg:py-2 max-w-screen-xl mx-auto">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>
