<script setup>
  import { RouterLink, RouterView } from 'vue-router'
  import HelloWorld from './components/HelloWorld.vue'
  import InputText from 'primevue/inputtext'
</script>

<template>
  <main class="h-full flex">
    <aside class="bg-white h-full w-1/6"></aside>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
