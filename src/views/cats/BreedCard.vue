<template>
  <div>
    <div>{{ breed.name }}</div>
    <div>{{ breed. origin }}</div>
    <img :src="breed.image" />
  </div>
</template>

<script>

export default {
  props: {
    breed: Object
  }
}
</script>
