<template>
  <div class="h-full overflow-hidden grow shrink flex flex-col lg:flex-row justify-center">
    <SurveyIntro v-if="store.showSurveyIntro" />
    <template v-else>
      <Options/>
      <Results/>
    </template>
  </div>
</template>
<script setup lang="ts">
import SurveyIntro from '@/components/SurveyIntro.vue'
import Options from '@/components/Options.vue'
import Results from '@/components/Results.vue'
import { useStore } from '@/utils/store'

const store = useStore()
</script>
