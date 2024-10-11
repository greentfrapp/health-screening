<template>
  <div class="bg-white flex flex-col items-center gap-10 py-10 pb-20 max-w-[500px] mx-auto overflow-auto">
    <img src="@/assets/report.jpg" class="w-[150px]" />
    <div class="px-8 space-y-4" v-html="converter.makeHtml(copy)"></div>
  </div>
</template>
<script setup lang="ts">
import showdown from 'showdown'
import { targetBlank } from '@/utils/utils'
import { nextTick, onMounted } from 'vue'

const converter = new showdown.Converter()
const copy = "This website aims to raise awareness about health screenings that are backed by scientific evidence and expert recommendations.\n\nThe information provided here was mostly adapted from a [2019 report by the Screening Test Review Committee](https://www.ams.edu.sg/view-pdf.aspx?file=media%5c4817_fi_59.pdf&ofile=STRC+Report+March+2019.pdf) appointed by Singapore's Ministry of Health.\n\nIf you are from other regions such as the [US](https://www.uspreventiveservicestaskforce.org/uspstf/topic_search_results), [UK](https://view-health-screening-recommendations.service.gov.uk), [Australia](https://www.health.gov.au/our-work/population-based-health-screening), or the [EU](https://ec.europa.eu/commission/presscorner/detail/en/ip_22_7548), do check your local recommendations.\n\nAlways consult a healthcare professional before choosing to undertake or disregard any tests or procedures.\n\nThis is created by SK and Alfred. For more interesting healthcare apps and essays like this, check out [our main website](https://halejournal.substack.com)."

onMounted(async () => {
  await nextTick()
  targetBlank()
})
</script>
