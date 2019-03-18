<template>
  <app-modal @close="$emit('close')" class="breed-modal">
    <img v-if="breed.image" :src="breed.image">
    <div v-else class="placeholder">No image available :(</div>
    <h1>{{ breed.name }}</h1>
    <p>{{ breed.summary }}</p>
  </app-modal>
</template>

<script>
import AppModal from '@/components/AppModal'

export default {
  props: {
    breed: Object,
    show: Boolean
  },
  components: {
    AppModal
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .breed-modal {
    img {
      max-height: 50vh;
    }

    h1 {
      margin-top: 10px;
    }
  }

  .placeholder {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: $grey-light;
    font-weight: bold;
  }
</style>
