<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideMenu from "./components/SideMenu.vue";
import Modal from "./components/Modal.vue";
import { useTableStore } from "./stores/table/table";
import { mapStores } from 'pinia';

</script>

<template>
  <main class="flex h-full w-full">
    <Modal :class="hidden" @close-modal="closeModal"></Modal>
    <aside class="w-1/12 bg-indigo-900">
      <SideMenu> </SideMenu>
    </aside>
    <div class="h-full w-full">
      <header class="bg-white w-full h-14 shadow flex items-center pl-10 z-20 relative">
        <h1 class="font-semibold text-gray-700">Rule Engine</h1>
        <img src="/arrow.png" class="w-3 ml-2" />
        <p class="ml-2 text-gray-700">Building a rule</p>
      </header>
      <RouterView  class="overflow-y-scroll" @open-modal="openModal"/>
    </div>
  </main>
</template>
<script>
export default{
  data(){
    return {
      hidden:'hidden'
    }
  },
methods:{
  openModal(){
    this.hidden = '';
  },
  closeModal(){
    this.hidden = 'hidden';
  }
},
mounted(){
  useTableStore().laodColumns();

},


};
</script>


<style scoped>
</style>
