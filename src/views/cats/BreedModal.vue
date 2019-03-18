<template>
  <app-modal @close="$emit('close')">
    <img :src="breed.image">
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

