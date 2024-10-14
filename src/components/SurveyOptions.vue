<template>
  <div class="grow shrink w-full lg:h-full lg:w-1/2 space-y-4 lg:space-y-6 overflow-auto p-4 lg:p-4 pb-10">
    <div v-for="option in options" class="space-y-2">
      <Label>
        {{ option.label }}
      </Label>
      <div class="flex flex-wrap gap-1">
        <Toggle v-for="i in Object.values(getOptions(option.label)).sort()"
          :active="optionIsActive(option.key, i)"
          @click="handleOptionClick(option.key, i)">
          {{ i }}
        </Toggle>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Label from './Label.vue'
import Toggle from './Toggle.vue'
import {
  AgeGroup, FamilyHistory, Lifestyle,
  MedicalHistory, MedicalHistoryFemale, Sex,
  SurveyOptionKey,
} from '@/utils/types'
import { useStore } from '@/utils/store'

const store = useStore()

const options = [
  {
    label: 'Age Group',
    key: 'ageGroup',
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
] as { label: string, key: SurveyOptionKey }[]

function optionIsActive(key: SurveyOptionKey, value: string | number) {
  if (typeof store[key] === 'string') {
    return store[key] === value
  } else if (typeof store[key] === 'object') {
    return (store[key] as (string|number)[]).includes(value)
  }
}

function handleOptionClick(key: SurveyOptionKey, value: string | number) {
  // Reset female medical history options when "Male" is selected
  if (key === 'sex' && value === Sex.MALE) {
    store.medicalHistory = store.medicalHistory.filter((i: MedicalHistoryFemale | MedicalHistory) => {
      return !Object.values(MedicalHistoryFemale).includes(i as MedicalHistoryFemale)
    })
  }
  if (typeof store[key] === 'string') {
    store[key] = value as any
  } else if (typeof store[key] === 'object') {
    if (optionIsActive(key, value)) {
      store[key] = store[key].filter((i: any) => i !== value) as any
    } else {
      (store[key] as any[]).push(value)
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
  if (label in staticOptions) return staticOptions[label as 'Age Group' | 'Sex' | 'Lifestyle' | 'Family History']
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
