<template>
  <div class="flex flex-col items-start">
    <p class="text-gray-500 text-sm italic font-light">
      c) Enter the value to compare:
    </p>
    <div v-if="isColumn">
        <Autocomplete>

        </Autocomplete>
    </div>
    <div v-else>
      <input
        type="text"
        class="px-4 py-1 z-10 rounded border border-slate-300 text-gray-800"
        v-model="option"
      />
    </div>
  </div>
</template>
  
<script>
import Autocomplete from '../ui-utils/Autocomplete.vue';
export default {
    components:{
        Autocomplete
    },
    data(){
        return {
            isColumn: true
        }
    }
};
</script>
  
    