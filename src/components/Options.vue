<template>
  <div class="h-1/2 w-full lg:h-full lg:w-1/2 space-y-4 lg:space-y-6 overflow-auto p-2 lg:p-4">
    <div v-for="option in options" class="space-y-2">
      <Header2>
        {{ option.label }}
      </Header2>
      <div class="flex flex-wrap gap-1">
        <Toggle v-for="i in option.enum"
          :active="optionIsActive(option.key, i)"
          @click="handleOptionClick(option.key, i)">
          {{ i }}
        </Toggle>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Header2 from './Header2.vue';
import Toggle from './Toggle.vue'
import { AgeGroup, FamilyHistory, MedicalHistory, Sex } from '@/utils/types'
import { useStore } from '@/utils/store'

const store = useStore()

const options = [
  {
    label: 'Age Group',
    enum: AgeGroup,
    key: 'ageGroup'
  },
  {
    label: 'Sex',
    enum: Sex,
    key: 'sex'
  },
  {
    label: 'Family History',
    enum: FamilyHistory,
    key: 'familyHistory'
  },
  {
    label: 'Medical History',
    enum: MedicalHistory,
    key: 'medicalHistory'
  },
]

function optionIsActive(key: string, value: string | number) {
  if (typeof store[key] === 'string') {
    return store[key] === value
  } else if (typeof store[key] === 'object') {
    return store[key].includes(value)
  }
}

function handleOptionClick(key: string, value: string | number) {
  if (typeof store[key] === 'string') {
    store[key] = value
  } else if (typeof store[key] === 'object') {
    if (optionIsActive(key, value)) {
      store[key] = store[key].filter((i: any) => i !== value)
    } else {
      store[key].push(value)
    }
  }
}
</script>
