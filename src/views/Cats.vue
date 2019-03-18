<template>
  <div class="cats">
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'cats',
  mounted () {
    this.getBreeds()
  },
  methods: {
    ...mapActions('breeds', {
      getBreeds: 'getBreeds'
    })
  }
}
</script>
