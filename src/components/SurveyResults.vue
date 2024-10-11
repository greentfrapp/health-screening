<template>
  <div class="shrink-0 w-full lg:h-full lg:w-1/2 overflow-hidden shadow-3xl lg:shadow-none flex flex-col items-center"
    :class="[expandResults ? 'expanded' : 'collapsed']">
    <div class="overflow-hidden flex flex-col lg:w-[90%] lg:h-[90%] lg:shadow-lg lg:border lg:rounded-xl">
      <div class="font-medium text-center shrink-0 p-2 relative text-neutral-600"
        @click="expandResults = !expandResults">
        {{ relevantTests.length }} suggestion{{ relevantTests.length !== 1 ? 's' : '' }}
        <div class="absolute lg:hidden right-2.5 top-2.5 w-5 h-5 text-neutral-500">
          <ArrowsPointingInIcon v-if="expandResults" />
          <ArrowsPointingOutIcon v-else />
        </div>
      </div>
      <div v-if="relevantTests.length" class="grow overflow-auto p-2 pt-0 space-y-2 lg:p-10 lg:pt-0 pb-10">
        <div v-for="test in relevantTests"
          class="bg-white border-4 border-red-100 rounded-3xl p-1 py-3 space-y-2">
          <Header2 class="mx-2">{{ test.condition }}</Header2>
          <div class="space-y-2">
            <div class="space-y-1 mx-2" :innerHTML="test.descriptionHTML"></div>
            <div class="px-1 pt-1" v-if="test.riskGroups && test.riskGroups.length">
              <Collapsible label="High-risk groups"
                class="w-full bg-red-100 text-sm px-2 py-0.5 rounded-lg">
                <ul class="pt-1 space-y-0.5">
                  <li v-for="g in test.riskGroups">
                    {{ g }}
                  </li>
                </ul>
              </Collapsible>
            </div>
          </div>
        </div>
      </div>
      <div v-else
        class="text-sm lg:text-base w-full h-full flex items-center justify-center">
        No tests recommended for your selection!
      </div>
    </div>
  </div>
</template>
<style scoped>
.collapsed {
  height: 30%;
}

.expanded {
  height: 100%;
}

@media (min-width: 1024px) {
  .collapsed {
    height: 100%;
  }
}
</style>
<script setup lang="ts">
import cat1Tests from '@/utils/cat1_tests.json'
import cat2Tests from '@/utils/cat2_tests.json'
import { computed, nextTick, ref, watch } from 'vue'
import { useStore } from '@/utils/store'
import Header2 from './Header2.vue'
import Collapsible from './Collapsible.vue'
import { SurveyOptionKey } from '@/utils/types'
import {
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from '@heroicons/vue/20/solid'
import { targetBlank } from '@/utils/utils'

const store = useStore()
const tests = ([] as any[]).concat(cat1Tests, cat2Tests)

function isRelevant(rules: any[]) {
  if (!rules.length) return true
  return rules.some(r => {
    return Object.entries(r).every(k => {
      let key = k[0] as SurveyOptionKey
      let value = k[1] as any
      if (typeof store[key] === 'string') {
        return value.includes(store[key])
      } else if (typeof store[key] === 'object') {
        return store[key].some((v: any) => {
          return value.includes(v)
        })
      }
    })
  })
}

const relevantTests = computed(() => {
  return tests.filter((t: any) => {
    return isRelevant(t.rules)
  })
})

watch(relevantTests, async () => {
  await nextTick()
  targetBlank()
}, { immediate: true })

const expandResults = ref(false)
</script>
