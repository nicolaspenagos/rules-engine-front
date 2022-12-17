<template>
  <div class="flex flex-col items-start">
    <div v-if="isColumn">
      <Autocomplete :placeholderMsg="valuePlaceHolder"> </Autocomplete>
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
import Autocomplete from "../ui-utils/Autocomplete.vue";
export default {
  components: {
    Autocomplete,
  },
  props: {
    valuePlaceHolder: String,
    expressionId: String,
    expressionGroupIndex: Number,
  },
  data() {
    return {
      isColumn: true,
    };
  },
};
</script>
  
    