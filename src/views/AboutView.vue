<script setup>

import { mapStores } from "pinia";

import { useTableStore } from "../stores/table/table";

</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <Dialog></Dialog>
</template>
<script>


</script>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
