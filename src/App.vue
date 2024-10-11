<template>
  <div class="h-screen overflow-hidden flex flex-col lg:p-4">
    <Navbar />
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
</script>
