<template>
  <div class="modal">
    <div class="background" @click="$emit('close')">
      <div class="content">
        <button class="close-button" type="button">X</button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .background {
    position: fixed;
    background: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content {
    position: relative;
    max-width: 600px;
    width: 100%;
    padding: 30px;
    background: white;
    overflow-y: auto;
    max-height: 100%;
  }

  .close-button {
    position: absolute;
    top: 6px;
    right: 6px;
    font-weight: bold;
    font-family: sans-serif;
    background: none;
  }
</style>
