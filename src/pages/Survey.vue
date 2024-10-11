<template>
  <div class="h-full overflow-hidden grow shrink flex flex-col lg:flex-row justify-center">
    <SurveyIntro v-if="store.showSurveyIntro" />
    <template v-else>
      <SurveyOptions/>
      <SurveyResults/>
    </template>
  </div>
</template>
<script setup lang="ts">
import SurveyIntro from '@/components/SurveyIntro.vue'
import SurveyOptions from '@/components/SurveyOptions.vue'
import SurveyResults from '@/components/SurveyResults.vue'
import { useStore } from '@/utils/store'

const store = useStore()
</script>
