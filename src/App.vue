<template>
  <div class="app">
    <header>
      The Cat Website
    </header>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import '~@/style/reset';

  @import url('https://fonts.googleapis.com/css?family=Lato');
</style>

<style scoped lang="scss">
  @import '~@/style/vars';

  .app {
    font-family: Lato;

    header {
      padding: 20px;
      background: $grey;
      text-transform: uppercase;
      font-size: 30px;
    }
  }
</style>
