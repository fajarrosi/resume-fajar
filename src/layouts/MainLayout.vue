<template>
  <q-layout view="hHh lpR fFf">

    <!-- <q-header reveal  class="bg-white text-primary">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Fajar Ilham Rosi
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <!-- <q-drawer v-model="leftDrawerOpen" side="left" elevated>
    </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>