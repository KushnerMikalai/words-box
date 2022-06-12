<script setup lang="ts">
import { ref } from 'vue'
import UDialog from '~/components/dialog.vue'
const open = ref(false)

</script>

<template>
  <h1>main</h1>
  <button @click="open = true">open dialog</button>

  <u-dialog v-if="open">

    <p>dialog say - Hello</p>

  </u-dialog>

  <div :style="{ height: '1300px' }"></div>
</template>

<style>
h1 {
  color: var(--default-color)
}
</style>