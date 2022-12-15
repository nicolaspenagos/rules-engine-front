<script setup>
import { RouterLink, RouterView } from "vue-router";
import SideMenu from "./components/SideMenu.vue";
</script>

<template>
  <main class="flex w-full">
    <aside class="w-1/12 bg-indigo-900">
      <SideMenu> </SideMenu>
    </aside>
    <div class="w-full">
      <header class="bg-white w-full h-14 shadow flex items-center pl-10">
        <h1 class="font-semibold text-gray-700">Rule Engine</h1>
        <img src="arrow.png" class="w-3 ml-2" />
        <p class="ml-2 text-gray-700">Building a rule</p>
      </header>
      <RouterView />
    </div>
  </main>
</template>

<style scoped>
</style>
