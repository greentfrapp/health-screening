<template>
  <div class="bg-white flex flex-col items-center gap-10 py-10 max-w-[500px] h-full overflow-auto">
    <img src="@/assets/search.jpg" class="w-[150px]" />
    <div class="px-8 space-y-4" v-html="converter.makeHtml(disclaimer)"></div>
    <button @click="store.showSearchIntro = false" class="bg-neutral-100 rounded-full px-6 py-2">
      Continue
    </button>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'
import showdown from 'showdown'
import { targetBlank } from '@/utils/utils'
import { nextTick, onMounted } from 'vue'

const store = useStore()

const converter = new showdown.Converter()
const disclaimer = "The 2019 report by the Screening Test Review Committee appointed by Singapore's Ministry of Health contains screening recommendations for the Singapore population.\n\nThe report classifies each test into one of three categories.\n\n**Cat 1** - Suitable for population-level screening\n\n**Cat 2** - Suitable for individual-level decision\n\n**Cat 3** - Not recommended (overscreening can harm more than help)\n\nUse this app to search through the different tests and learn more about the recommendations for each of them.\n\nFor more details, check out the [report](https://www.ams.edu.sg/view-pdf.aspx?file=media%5c4817_fi_59.pdf&ofile=STRC+Report+March+2019.pdf)."

onMounted(async () => {
  await nextTick()
  targetBlank()
})
</script>
