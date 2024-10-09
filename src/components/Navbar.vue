<template>
  <div class="w-screen flex items-center px-2 gap-2 bg-yellow-300 py-2 overflow-auto lg:overflow-hidden shadow border-b border-b-yellow-400">
    <div v-for="link in links">
      <a v-if="link.link.startsWith('https://')" :href="link.link" target="_blank"
        class="no-underline font-semibold bg-yellow-200 px-3 py-1 rounded-full truncate">
        {{ link.label }}
      </a>
      <router-link v-else
        :to="link.link"
        class="no-underline font-semibold bg-yellow-200 px-3 py-1 rounded-full truncate">
        {{ link.label }}
      </router-link>
    </div>
  </div>
</template>
<script setup lang="ts">
const links = [
  {
    label: 'Suggest',
    link: '/',
  },
  {
    label: 'Search',
    link: '/search',
  },
  {
    label: 'STRC Report',
    link: 'https://www.ams.edu.sg/view-pdf.aspx?file=media%5c4817_fi_59.pdf&ofile=STRC+Report+March+2019.pdf',
  },
  {
    label: 'Our Substack',
    link: 'https://halejournal.substack.com',
  },
]
</script>
