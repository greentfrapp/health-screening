import { defineStore } from 'pinia'
import { useStorage, RemovableRef } from '@vueuse/core'
import { AgeGroup, FamilyHistory, Lifestyle, MedicalHistory, Sex } from './types'

export const useStore = defineStore(
  'store', {
    state: () => ({
      ageGroup: useStorage('ageGroup', AgeGroup._25_TO_39),
      sex: useStorage('sex', Sex.FEMALE),
      lifestyle: useStorage('lifestyle', []) as RemovableRef<Lifestyle[]>,
      familyHistory: useStorage('familyHistory', []) as RemovableRef<FamilyHistory[]>,
      medicalHistory: useStorage('medicalHistory', []) as RemovableRef<MedicalHistory[]>,
    }),
    getters: {
    },
    actions: {
    },
  }
)
