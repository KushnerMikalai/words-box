<script setup>
import { onBeforeMount, onUnmounted } from 'vue'
import UOverlay from '~/components/ui/overlay'

onBeforeMount(() => {
  document.body.classList.add('overflow_hidden')
})

onUnmounted(() => {
  document.body.classList.remove('overflow_hidden')
})
</script>

<template>
  <teleport to="body">
    <transition
      name="modal-fade"
    >
      <u-overlay>
        <div
          role="dialog"
          aria-modal="true"
          class="u-overlay-dialog"
        >
          <div class="u-dialog">
            <slot></slot>
            <button>close</button>
          </div>
        </div>
      </u-overlay>
    </transition>
  </teleport>
</template>

<style>
.u-overlay-dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
}

.u-dialog {
  --u-dialog-width: 50%;
  --u-dialog-margin-top: 15vh;
  --u-dialog-bg-color: var(--u-bg-color);
  --u-dialog-box-shadow: var(--u-box-shadow);
  --u-dialog-title-font-size: var(--u-font-size-large);
  --u-dialog-content-font-size: 14px;
  --u-dialog-font-line-height: var(--u-font-line-height-primary);
  --u-dialog-padding-primary: 20px;
  --u-dialog-border-radius: var(--u-border-radius-small);

  position: relative;
  margin: var(--u-dialog-margin-top, 15vh) auto 50px;
  background: var(--u-dialog-bg-color);
  border-radius: var(--u-dialog-border-radius);
  box-shadow: var(--u-dialog-box-shadow);
  box-sizing: border-box;
  width: var(--u-dialog-width, 50%);
}
</style>