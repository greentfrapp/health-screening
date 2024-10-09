import MiniSearch from "minisearch"
import searchCorpus from '@/utils/search_corpus.json'

const corpus = searchCorpus.map((r, i) => {
  return {
    ...r,
    id: i,
  }
})

export const miniSearch = new MiniSearch({
  fields: ['Disease', 'Test'],
  storeFields: [
    'Disease',
    'Disease Type',
    'Category',
    'Test',
    'Notes',
  ],
})
miniSearch.addAll(corpus)
