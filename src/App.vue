<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App'
})
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
/* .q-dialog__inner > div {
  box-shadow:none !important;
} */
</style>