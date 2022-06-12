<template>
  <div
    :class="[
        'ui-overlay',
        props.overlayClass
    ]"
    :style="{
        zIndex: props.zIndex
    }"
>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
type Props = {
    overlayClass?: string | string[] | Record<string, boolean>
    zIndex?: number
}

const props = withDefaults(defineProps<Props>(), {
});
</script>

<style lang="scss">
.ui-overlay {
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