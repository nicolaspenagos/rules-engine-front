<template>
  <div class="flex flex-col items-start"     :class="inputValid">
    <div class="flex">
      <RadioButton inputId="type1" name="type" value="Input" v-model="type" />
      <label for="type1" class="text-gray-800 text-xs ml-1">Input value</label>
    </div>
    <div class="field-radiobutton">
      <RadioButton inputId="type2" name="type" value="Column" v-model="type" />
      <label for="type2" class="text-gray-800 text-xs ml-1"
        >Another column</label
      >
    </div>
  </div>
</template>
  
  <script>
import RadioButton from "primevue/radiobutton";
import { mapStores } from "pinia";
import { useExpressionsStore } from "../../stores/expressions/expressions.js";
import { useTableStore } from "../../stores/table/table.js";
import { IS_FALSE, IS_TRUE } from '../../model/ExpressionModel.js';

export default {
  props: {
    expressionId: String,
    expressionGroupIndex: Number,
  },
  components: {
    RadioButton,
  },
  watch: {
    type() {
      this.$emit("typeChanged", this.type);
    },
  },
  data() {
    return {
      type: null,
    };
  },
  computed:{
    ...mapStores(useTableStore, useExpressionsStore),
    inputValid(){

      let currentExpression = this.expressionsStore.getCurrentExpression(this.expressionGroupIndex, this.expressionId);
      if(currentExpression.operand=='')
        this.type=null
      return (currentExpression.operand==''||currentExpression.operand==IS_TRUE||currentExpression.operand==IS_FALSE)?'disable':'';

    }
  }
}
</script>
  
    