import { getBreeds } from '@/api/thecatapi'
import { getMediaFromUrl } from '@/api/wikipedia'

const SET_BREEDS = 'SET_BREEDS'

export default {
  namespaced: true,
  state: {
    breeds: []
  },
  mutations: {
    [SET_BREEDS] (state, breeds) {
      state.breeds = breeds
    }
  },
  actions: {
    async getBreeds (store) {
      const promises = []
      const response = await getBreeds()
      let breeds = response.data

      breeds.forEach(async breed => {
        if (breed.wikipedia_url) promises.push(getMediaFromUrl(breed.wikipedia_url))
        else promises.push('')
      })

      const images = await Promise.all(promises)

      store.commit(SET_BREEDS, breeds.map((breed, index) => {
        const response = images[index]

        if (response && response.data.items.length) {
          const image = response.data.items[0].original.source
          return { ...breed, image }
        }
        return breed
      }))
    }
  },
  getters: {
    getFilteredBreeds: ({ breeds }) => (filter, filterValue) => {
      return filterValue ? breeds.filter(breed => breed[filter] === filterValue) : breeds
    },
    breedsCountries: ({ breeds }) => breeds.reduce((res, el) => {
      res[el.country_code] = el.origin
      return res
    }, {}),
    getBreedById: ({ breeds }) => id => breeds.find(breed => breed.id === id)
  }
}
