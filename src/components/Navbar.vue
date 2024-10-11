<template>
  <div class="w-screen flex justify-center lg:justify-start">
    <div class="flex items-center justify-center w-max rounded-full shadow pl-3 pr-2 py-2 my-4 gap-2">
      <HeartIcon class="w-6 h-6 text-red-400" />
      <div v-for="link in links">
        <a v-if="link.link.startsWith('https://')" :href="link.link" target="_blank"
          class="no-underline px-3 py-1 rounded-full truncate font-normal lg:text-lg">
          {{ link.label }}
        </a>
        <router-link v-else
          :to="link.link"
          class="no-underline px-3 py-1 rounded-full truncate font-normal lg:text-lg"
          :class="[ route.path === link.link ? 'bg-[#FFB4B4]/25' : '']">
          {{ link.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { HeartIcon } from '@heroicons/vue/20/solid'
import { useRoute } from 'vue-router'

const links = [
  {
    label: 'Home',
    link: '/',
  },
  {
    label: 'Search',
    link: '/search',
  },
  // {
  //   label: 'STRC Report',
  //   link: 'https://www.ams.edu.sg/view-pdf.aspx?file=media%5c4817_fi_59.pdf&ofile=STRC+Report+March+2019.pdf',
  // },
  {
    label: 'About',
    link: '/about',
  },
]

const route = useRoute()
</script>
