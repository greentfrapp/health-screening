<template>
  <div class="fixed w-screen h-screen bg-black/50 flex items-center justify-center p-4">
    <div class="rounded-xl bg-white p-4 flex flex-col items-center space-y-2 max-w-[30rem]">
      <p>
        This website aims to help raise awareness about different types of health screenings available today. For more like this, check out <a href="https://halejournal.substack.com/">our Substack</a>!
      </p>
      <p>
        The information provided here was adapted from a <a href="https://www.ams.edu.sg/view-pdf.aspx?file=media%5c4817_fi_59.pdf&ofile=STRC+Report+March+2019.pdf">2019 report by the Screening Test Review Committee</a> appointed by Singapore's Ministry of Health.
      </p>
      <p>
        As usual, always consult a healthcare professional before choosing to undertake or disregard any tests or procedures.
      </p>
      <button @click="store.showDisclaimer = false" class="bg-neutral-100 hover:bg-yellow-300 font-medium rounded-full px-4 py-1">
        Got it!
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'

const store = useStore()
</script>
