<template>
  <q-card class="own-card" flat>
    <q-card-section class="pb-0" v-if="thumbnail">
      <img :src="require(`assets/${thumbnail}`)" class="rounded-lg min-h-[210px]" >
    </q-card-section>
    <q-card-section class="row gap-y-4">
        <div class="col-12">
          <div class="text-subtitle2">{{title}}</div>
          <!-- <div class="text-xs">{{description}}</div> -->
          <div class="flex gap-x-2 mt-2">
            <q-badge :label="tech" v-for="(tech,index) in technology" :key="index" class="py-2"/>
          </div>
        </div>
        <!-- <q-btn color="primary" label="Live Demo" no-caps unelevated outline class="col-12 "/> -->
    </q-card-section>
  </q-card>
</template>

<script setup>
const props = defineProps({
  title:{
    type:String
  },
  technology:{
    type:Array
  },
  description:{
    type:String
  },
  thumbnail:{
    type:String
  }
})
</script>