<template>
  <div class="cats">

    <div class="filters">
      <select v-model="countryFilter">
        <option value=''>All</option>
        <option v-for="(country, key) in breedsCountries" :key="key" :value="key">
          {{ country }}
        </option>
      </select>
    </div>

    <ul>
      <li v-for="breed in getFilteredBreeds('country_code', countryFilter)" :key="breed.id">
        <breed-card :breed="breed" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BreedCard from './cats/BreedCard'

export default {
  name: 'cats',
  data () {
    return {
      isLoading: true,
      countryFilter: ''
    }
  },
  async mounted () {
    try {
      await this.getBreeds()
    } finally {
      this.isLoading = false
    }
  },
  computed: {
    ...mapGetters('breeds', {
      getFilteredBreeds: 'getFilteredBreeds',
      breedsCountries: 'breedsCountries'
    })
  },
  methods: {
    ...mapActions('breeds', {
      getBreeds: 'getBreeds'
    })
  },
  components: {
    BreedCard
  }
}
</script>

<style scoped lang="scss">
  .cats {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      width: 25%;
    }
  }
</style>
