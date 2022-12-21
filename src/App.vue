<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideMenu from "./components/SideMenu.vue";
import Modal from "./components/Modal.vue";
import { useTableStore } from "./stores/table/table";
import { mapStores } from 'pinia';
import { useRouter, useRoute } from 'vue-router';

</script>

<template>
  <main class="flex h-full w-full">
    <Modal :class="hidden" @close-modal="closeModal"></Modal>
    <aside class=" bg-indigo-900 h-full">
      <SideMenu @on-view-changed="(txt)=>currentViewHeaderText=txt"> </SideMenu>
    </aside>
    <div class=" w-full">
      <header class="bg-white w-full h-14 shadow flex items-center pl-10 z-20 relative">
        <h1 class="font-semibold text-gray-700">Rule Engine</h1>
        <img src="/arrow.png" class="w-3 ml-2" />
        <p class="ml-2 text-gray-700">{{currentViewHeaderText}}</p>
      </header>
      <RouterView  class="overflow-y-scroll" @open-modal="openModal" :ruleSavedHide="ruleSavedHide"/>
    </div>
  </main>
</template>
<script>
export default{
  data(){
    return {
      hidden:'hidden',
      ruleSavedHide:'hidden',
      currentViewHeaderText: 'Building a new rule'
    }
  },
methods:{
  openModal(){
    this.hidden = '';
  },
  closeModal(){
    this.hidden = 'hidden';
    this.ruleSavedHide = '';
      setTimeout(()=>{this.ruleSavedHide = 'hidden';}, 3000)
 
  }
},



};
</script>


<style scoped>
</style>
