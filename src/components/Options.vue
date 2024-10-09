<template>
  <div class="h-1/2 w-full lg:h-full lg:w-1/2 space-y-4 lg:space-y-6 overflow-auto p-2 lg:p-4">
    <div v-for="option in options" class="space-y-2">
      <Header2>
        {{ option.label }}
      </Header2>
      <div class="flex flex-wrap gap-1">
        <Toggle v-for="i in getOptions(option.label)"
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
import {
  AgeGroup, FamilyHistory, Lifestyle,
  MedicalHistory, MedicalHistoryFemale, Sex
} from '@/utils/types'
import { useStore } from '@/utils/store'

const store = useStore()

const options = [
  {
    label: 'Age Group',
    key: 'ageGroup'
  },
  {
    label: 'Sex',
    key: 'sex'
  },
  {
    label: 'Lifestyle',
    key: 'lifestyle'
  },
  {
    label: 'Family History',
    key: 'familyHistory'
  },
  {
    label: 'Medical History',
    key: 'medicalHistory',
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

function getOptions(label: string) {
  const staticOptions = {
    'Age Group': AgeGroup,
    'Sex': Sex,
    'Lifestyle': Lifestyle,
    'Family History': FamilyHistory,
  }
  if (label in staticOptions) return staticOptions[label]
  else if (label === 'Medical History') {
    if (store.sex === Sex.FEMALE) {
      return Object.assign({}, MedicalHistory, MedicalHistoryFemale)
    } else {
      return MedicalHistory
    }
  }
  else return []
}
</script>
