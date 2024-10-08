import { defineStore } from 'pinia'
import { useStorage, RemovableRef } from '@vueuse/core'
import { AgeGroup, FamilyHistory, Lifestyle, MedicalHistory, Sex } from './types'
import searchCorpus from '@/utils/search_corpus.json'

export const useStore = defineStore(
  'store', {
    state: () => ({
      showDisclaimer: true,
      ageGroup: useStorage('ageGroup', AgeGroup._25_TO_39),
      sex: useStorage('sex', Sex.FEMALE),
      lifestyle: useStorage('lifestyle', []) as RemovableRef<Lifestyle[]>,
      familyHistory: useStorage('familyHistory', []) as RemovableRef<FamilyHistory[]>,
      medicalHistory: useStorage('medicalHistory', []) as RemovableRef<MedicalHistory[]>,
      searchQuery: '',
      searchTestCategory: [] as any[],
      searchDiseaseType: [] as any[],
    }),
    getters: {
      hasSearchFilters: state => {
        return state.searchTestCategory.length || state.searchDiseaseType.length
      },
      searchResults: state => {
        let query = state.searchQuery.toLowerCase()
        let results = searchCorpus
        if (state.searchQuery) {
          results = results.filter(r => {
            return r.Disease.toLowerCase().includes(query) || r.Test.toLowerCase().includes(query)
          })
        }
        if (state.searchTestCategory.length) {
          results = results.filter(r => {
            return state.searchTestCategory.some(c => c === r.Category)
          })
        }
        return results
      },
    },
    actions: {
    },
  }
)
