<template>
  <q-page class="bg-core-background pb-[100px]">
    <SectionSatu/>
    <ListPortfolio/>
  </q-page>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
const SectionSatu = defineAsyncComponent(
  ()=> import('components/SectionSatu')
)
const ListPortfolio = defineAsyncComponent(
  ()=> import('components/ListPortfolio')
)


</script>
