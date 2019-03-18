<template>
  <div>
    <div>{{ breed.name }}</div>
    <div>{{ breed. origin }}</div>
  </div>
</template>

<script>
export default {
  props: {
    breed: Object
  }
}
</script>
