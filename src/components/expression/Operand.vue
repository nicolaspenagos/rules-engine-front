<template>
  <div class="flex flex-col items-start">
    <div
      v-if="filteredOption && modal"
      class="absolute inset-0"
      @click="this.modal = false"
    ></div>
    <input
      type="text"
      class="
        px-4
        py-1
        z-9
        rounded
        border border-slate-300
        text-xs text-gray-800
        w-24
        cursor-pointer
      "
      v-model="option"
      autocomplete="off"
      readonly
      @focus="modal = true"
      placeholder="Operand"
      :class="inputValid"
    />
    <div v-if="filteredOption && modal && inputValid == ''" class="z-9">
      <ul class="w-24 text-slate-500 text-sm shadow-lg absolute bg-white z-10">
        <li
          v-for="(option, index) in filteredOption"
          :key="index"
          class="
            py-2
            cursor-pointer
            px-4
            py-1
            text-sm
            rounded
            hover:bg-gray-100
          "
          @click="setOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import { useExpressionsStore } from "../../stores/expressions/expressions.js";
import { useTableStore } from "../../stores/table/table.js";

export default {
  props: {
    expressionId: String,
    expressionGroupIndex: Number,
  },
  data() {
    return {
      option: "",
      options: [],
      filteredOption: [],
      modal: false,
    };
  },
  methods: {
    filterOptions() {
      this.filteredOption = this.options;
    },
    setOption(option) {
      this.option = option;
      this.modal = false;

      this.expressionsStore.setOperand(
        this.expressionGroupIndex,
        this.expressionId,
        option
      );
    },
  },
  mounted() {
    if (this.option.length == 0) this.filteredOption = this.options;
    this.filterOptions();
  },
  computed: {
    ...mapStores(useTableStore, useExpressionsStore),
    inputValid() {
      let currentExpression = this.expressionsStore.getCurrentExpression(
        this.expressionGroupIndex,
        this.expressionId
      );

      if (currentExpression.operand == "") {
        this.option = "";
      }

      this.options = this.tableStore.getOperands(
        this.tableStore.getColumnType(currentExpression.column)
      );

      if (this.option.length == 0) this.filteredOptions = this.options;
      this.filterOptions();

      return this.tableStore.isValidColumn(currentExpression.column)
        ? ""
        : "disable";
    },
  },
};
</script>

  