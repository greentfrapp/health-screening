<template>
  <div class="bg-white flex flex-col items-center gap-10 py-10 max-w-[500px] mx-auto">
    <img src="@/assets/report.jpg" class="w-[150px]" />
    <div class="px-8 space-y-4" v-html="converter.makeHtml(copy)"></div>
  </div>
</template>
<script setup lang="ts">
import showdown from 'showdown'

const converter = new showdown.Converter()
const copy = "This website aims to help raise awareness about different types of health screenings available today.\n\nThe information provided here was mostly adapted from a [2019 report by the Screening Test Review Committee](https://www.ams.edu.sg/view-pdf.aspx?file=media%5c4817_fi_59.pdf&ofile=STRC+Report+March+2019.pdf) appointed by Singapore's Ministry of Health.\n\nAs usual, always consult a healthcare professional before choosing to undertake or disregard any tests or procedures.\n\nFor more like this, check out [our Substack](https://halejournal.substack.com)."
</script>
