<template>
  <div class="cats">

    <breed-modal
      v-if="selectedBreed"
      v-show="showModal"
      :breed="selectedBreed"
      @close="closeModal"/>

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
        <router-link :to="{name: 'cats', params: { breedId: breed.id }}" @click.native="showModal = true">
          <breed-card :breed="breed" />
        </router-link>
      </li>
    </ul>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import BreedCard from './cats/BreedCard'
import BreedModal from './cats/BreedModal'

export default {
  name: 'cats',
  props: {
    breedId: String
  },
  data () {
    return {
      isLoading: true,
      countryFilter: '',
      showModal: false
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
      breedsCountries: 'breedsCountries',
      getBreedById: 'getBreedById'
    }),
    selectedBreed () {
      return this.getBreedById(this.breedId)
    }
  },
  watch: {
    selectedBreed (value) {
      if (value) this.showModal = true
    }
  },
  methods: {
    ...mapActions('breeds', {
      getBreeds: 'getBreeds'
    }),
    closeModal () {
      this.$router.replace({ name: 'cats' })
    }
  },
  components: {
    BreedCard,
    BreedModal
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
