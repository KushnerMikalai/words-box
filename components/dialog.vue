<script setup>
import { onBeforeMount, onUnmounted } from 'vue'

onBeforeMount(() => {
    document.body.classList.add('modal_hidden')
})

onUnmounted(() => {
    document.body.classList.remove('modal_hidden')
})
</script>

<template>
  <teleport to="body">
    <transition
      name="modal-fade"
    >
      <div
        role="dialog"
        class="u-dialog"
      >
        <slot />
        <button >close</button>
      </div>
    </transition>
  </teleport>
</template>

<style>
.ku-dialog {
  position: fixed;
  top: 0;
  left: 0;
}

.modal_hidden {
    overflow: hidden;
}
</style>