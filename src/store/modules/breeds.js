import { getBreeds } from '@/api/thecatapi'

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
      const response = await getBreeds()
      store.commit(SET_BREEDS, response.data)
    }
  },
  getters: {
    getFilteredBreeds: ({ breeds }) => (filter, filterValue) =>
      filterValue ? breeds.filter(breed => breed[filter] === filterValue) : breeds,

    breedsCountries: ({ breeds }) => breeds.reduce((res, el) => {
      res[el.country_code] = el.origin
      return res
    }, {})
  }
}
