<template>
  <div class="h-1/2 w-full lg:h-full lg:w-1/2 bg-yellow-300 p-2 overflow-auto space-y-2 border-t-2 border-yellow-400 lg:border-0 shadow-xl">
    <div class="font-medium text-center">
      {{ relevantTests.length }} suggestion{{ relevantTests.length !== 1 ? 's' : '' }}
    </div>
    <div v-for="test in relevantTests"
      class="border-4 border-yellow-400 rounded-xl py-1 lg:space-y-1">
      <Header2 class="mx-2">{{ test.condition }}</Header2>
      <div class="text-sm lg:text-base space-y-1 mx-2" :innerHTML="test.descriptionHTML"></div>
      <div class="px-1 pt-1">
        <Collapsible label="High-risk groups" v-if="test.riskGroups && test.riskGroups.length"
          class="w-full bg-yellow-400 text-sm px-2 py-0.5 rounded-lg">
          <ul>
            <li v-for="g in test.riskGroups">
              {{ g }}
            </li>
          </ul>
        </Collapsible>
      </div>
    </div>
    <div v-if="!relevantTests.length"
      class="text-sm lg:text-base w-full h-full flex items-center justify-center">
      No tests recommended for your selection!
    </div>
  </div>
</template>
<script setup lang="ts">
import cat1Tests from '@/utils/cat1_tests.json'
import cat2Tests from '@/utils/cat2_tests.json'
import { computed } from 'vue'
import { useStore } from '@/utils/store'
import Header2 from './Header2.vue'
import Collapsible from './Collapsible.vue'

const store = useStore()
const tests = [].concat(cat1Tests, cat2Tests)

function isRelevant(rules: any[]) {
  if (!rules.length) return true
  return rules.some(r => {
    return Object.entries(r).every(k => {
        if (typeof store[k[0]] === 'string') {
            return (k[1] as any[]).includes(store[k[0]])
        } else if (typeof store[k[0]] === 'object') {
            return store[k[0]].some((v: any) => {
              return (k[1] as any[]).includes(v)
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
</script>
