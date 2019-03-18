<template>
  <div class="breed-card">
    <div class="image" :style="{backgroundImage: `url(${breed.image})`}"></div>
    <div class="infos">
      <div class="name">{{ breed.name }}</div>
      <div>{{ breed. origin }}</div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    breed: Object
  }
}
</script>

<style scoped lang="scss">
  @import '~@/style/vars';

  .breed-card {
    padding: 6px;
  }

  .name {
    font-weight: bold;
  }

  .image {
    background-color: $grey;
    height: 200px;
    background-size: cover;
    background-position: center top;
  }

  .infos {
    padding: 10px;
    background: $grey-light;
  }
</style>
