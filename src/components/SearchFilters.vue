<template>
  <div class="text-sm space-y-2 pt-2">
    <div v-for="filter in filters">
      <div class="font-semibold text-xs uppercase">{{ filter.label }}</div>
      <div class="flex flex-wrap gap-0.5">
        <Toggle v-for="i in filter.options"
          :active="optionIsActive(filter.key, i.value)"
          @click="handleOptionClick(filter.key, i.value)">
          {{ i.label }}
        </Toggle>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from '@/utils/store'
import Toggle from './SmallToggle.vue'
import { SearchOptionKey } from '@/utils/types'

const store = useStore()

const testCategories = [
  {
    label: "Cat 1",
    value: "Cat 1",
  },
  {
    label: "Cat 2",
    value: "Cat 2",
  },
  {
    label: "Cat 3",
    value: "Cat 3",
  },
]
const diseaseTypes = [
  {
    label: 'Cancer',
    value: 'Cancer',
  },
  {
    label: 'Heart',
    value: 'Heart and Vascular',
  },
  {
    label: 'Infectious',
    value: 'Infectious',
  },
  {
    label: 'Musculoskeletal',
    value: 'Musculoskeletal',
  },
  {
    label: 'Ob-Gyn',
    value: 'Ob-Gyn',
  },
  {
    label: 'Vision/Hearing',
    value: 'Vision/Hearing',
  },
  {
    label: 'Pediatric',
    value: 'Congenital and Pediatric',
  },
  {
    label: 'Others',
    value: 'Metabolic, Nutritional, Endocrine, and Rheumatology',
  },
]

const filters = [
  {
    label: 'Test Category',
    options: testCategories,
    key: 'searchTestCategory' as SearchOptionKey,
  },
  {
    label: 'Disease Type',
    options: diseaseTypes,
    key: 'searchDiseaseType' as SearchOptionKey,
  },
]

function optionIsActive(key: SearchOptionKey, value: string | number) {
  if (typeof store[key] === 'string') {
    return store[key] === value
  } else if (typeof store[key] === 'object') {
    return store[key].includes(value)
  }
}

function handleOptionClick(key: SearchOptionKey, value: string | number) {
  if (typeof store[key] === 'string') {
    store[key] = value as any
  } else if (typeof store[key] === 'object') {
    if (optionIsActive(key, value)) {
      store[key] = store[key].filter((i: any) => i !== value)
    } else {
      store[key].push(value)
    }
  }
}
</script>
