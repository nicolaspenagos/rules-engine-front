<template>
  <div class="flex flex-col items-start">
    <p class="text-gray-500 text-sm italic font-light">a) Select a column:</p>
    <Autocomplete>

    </Autocomplete>
  </div>
</template>
<script>
import Autocomplete from '../ui-utils/Autocomplete.vue';
export default {
  components:{
    Autocomplete
  }
}
</script>
