<template>
    <div
      class="
        hover:bg-rose-200
        bg-rose-100
        h-4
        w-4
        rounded-3xl
        flex
        items-center
        justify-center
        mr-4
        cursor-pointer
      "
      v-if="index>0"

      v-on:click="deleteExpression"
    >
      <div class="h-0.5 w-2 bg-rose-600 rounded-3xl"></div>
    </div>
    <div v-else class="w-4  mr-4">

    </div>
</template>
<script>
import { mapStores } from "pinia";
import { useExpressionsStore } from "../../stores/expressions/expressions.js";

export default {
  props: {
    expressionId: String,
    expressionGroupIndex: Number,
    index: Number
  },
  methods: {
    deleteExpression(){
        this.expressionsStore.deleteExpression(this.expressionId, this.expressionGroupIndex);
    }
  }, computed: {
    ...mapStores(useExpressionsStore),
  }, mounted(){

  }
};
</script>
