<template>
  <div class="row px-[40px] justify-center gap-y-4 pt-4">
      <div class="col-12 text-center text-primary text-h3 font-medium">My Recent Work</div>
      <div class="col-12 row q-col-gutter-md">
        <div class="col-12 col-sm-4 col-lg-3"  v-for="(item,index) in listPortfolio" :key="index">
          <ItemPortfolio v-bind="item" class="h-full"/>
        </div>
      </div>


    </div>
</template>

<script setup>
import { ref,defineAsyncComponent,computed } from 'vue'
import { useStore } from 'vuex'
const ItemPortfolio = defineAsyncComponent(
  ()=> import('components/ItemPortfolio')
)
const store = useStore()
const listPortfolio = computed(()=>{
  return store.state.portfolio.list
})
const category = ref('Semua')
const showPorfolio = ref(true)
const onChangeCategory = value => {
  category.value = value
  showPorfolio.value = false
  setTimeout(()=>{
    showPorfolio.value = true
  },100)
}
</script>