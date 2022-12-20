<template>
  <div class="flex flex-col items-start">
    <div v-if="valuePlaceHolder == 'Column'">
      <Autocomplete
        :placeholderMsg="valuePlaceHolder"
        :isValue="isValue"
        :expressionId="expressionId"
        :expressionGroupIndex="expressionGroupIndex"
      >
      </Autocomplete>
    </div>
    <div v-else>
      <input
        class="
          px-4
          py-1
          z-10
          rounded
          border border-slate-300
          text-gray-800 text-xs
          w-44
        "
        :class="inputValid"
        v-model="option"
        :placeholder="valuePlaceHolder"
        :type="inputType"
        @change="setValue"
        v-if="inputType != 'bool' || type == ''"
      />
    </div>
  </div>
</template>
  
<script>
import Autocomplete from "../ui-utils/Autocomplete.vue";
import { mapStores } from "pinia";
import { useExpressionsStore } from "../../stores/expressions/expressions.js";
import { useTableStore } from "../../stores/table/table.js";
import { BOOLEAN, NUMBER, STRING } from "../../model/Column";
export default {
  components: {
    Autocomplete,
  },
  props: {
    valuePlaceHolder: String,
    expressionId: String,
    expressionGroupIndex: Number,
    isValue: Boolean,
  },
  data() {
    return {
      isColumn: true,
      valueType: "text",
      option: "",
      disable: "",
      type: "",
    };
  },
  computed: {
    ...mapStores(useTableStore, useExpressionsStore),
    inputValid() {
      return this.valuePlaceHolder == "Value to compare" ? "disable" : "";
    },
    inputType() {
      let currentExpression = this.expressionsStore.getCurrentExpression(
        this.expressionGroupIndex,
        this.expressionId
      );

      this.type = this.tableStore.getColumnType(currentExpression.column);
      if (this.type == STRING) return "text";
      if (this.type == NUMBER) return "number";
      return BOOLEAN;
    },
  },

  mounted() {},
  watch: {
    option() {
      if (this.option != "") {
        let parsedOption = this.option;

        if (this.type == NUMBER) parsedOption = parseFloat(this.option);

        if (this.type == BOOLEAN) parsedOption = this.option === "true";

        this.expressionsStore.setValue(
          this.expressionGroupIndex,
          this.expressionId,
          parsedOption
        );
      }
    },
    valuePlaceHolder() {
      this.option = "";
      this.inputType = "opacity-25";
    },
  },
};
</script>
  
    