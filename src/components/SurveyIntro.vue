<template>
  <div class="bg-white flex flex-col items-center gap-10 py-10 max-w-[500px] h-full">
    <img src="@/assets/heart.jpg" class="w-[150px]" />
    <div class="px-8 space-y-4" v-html="converter.makeHtml(disclaimer)"></div>
    <button @click="store.showSurveyIntro = false" class="bg-neutral-100 rounded-full px-6 py-2">
      Continue
    </button>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'
import showdown from 'showdown'

const store = useStore()

const converter = new showdown.Converter()
const disclaimer = "Health screenings can help detect potential health issues early, even before symptoms appear, allowing for timely treatment and better outcomes.\n\nDepending on your demographic and medical history, this survey suggests potential screenings that you can bring up with your healthcare provider."
</script>
