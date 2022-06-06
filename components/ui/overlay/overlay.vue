<template>
  <div class="u-overlay">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.u-overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  height: 100%;
  background-color: var(--overlay-color);
  overflow: auto;
}
</style>