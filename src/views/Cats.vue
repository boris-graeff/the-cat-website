<template>
  <div class="cats">
    <ul>
      <li v-for="breed in breeds" :key="breed.id">
        <breed-card :breed="breed" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import BreedCard from './cats/BreedCard'

export default {
  name: 'cats',
  mounted () {
    this.getBreeds()
  },
  computed: {
    ...mapState('breeds', {
      breeds: ({ breeds }) => breeds
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
