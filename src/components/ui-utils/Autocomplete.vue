<template>
  <div
    v-if="filteredOptions && modal"
    class="absolute inset-0"
    @click="this.modal = false"
  ></div>
  <input
    type="text"
    class="
      px-4
      py-1
      z-10
      rounded
      border border-slate-300
      text-xs text-gray-800 text-sm
      w-44
    "
    v-model="option"
    autocomplete="off"
    @input="filterOptions"
    @focus="modal = true"
    :placeholder="placeholderMsg"
  />
  <div v-if="filteredOptions && modal" class="z-20">
    <ul class="w-44 text-slate-500 text-xs shadow-lg absolute bg-white">
      <li
        v-for="(filteredOption, index) in filteredOptions"
        :key="index"
        class="py-2 cursor-pointer px-4 py-1 rounded hover:bg-gray-100"
        @click="setOption(filteredOption)"
      >
        {{ filteredOption }}
      </li>
    </ul>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useExpressionsStore } from "../../stores/expressions/expressions.js";
export default {
  props: {
    placeholderMsg: String,
    expressionId: String,
    expressionGroupIndex: Number,
  },
  data() {
    return {
      option: "",
      options: ["Name", "Lastame", "Age", "Country", "City"],
      filteredOptions: [],
      modal: false,
    };
  },
  methods: {
    filterOptions() {
      this.filteredOptions = this.options.filter((option) => {
        return option.toLocaleLowerCase().startsWith(this.option.toLowerCase());
      });
    },
    setOption(filteredOption) {
      this.option = filteredOption;
      this.modal = false;
    },
    setColumn() {
      this.expressionsStore.setColumn(this.expressionGroupIndex, this.expressionId, this.option);
    },
  },
  mounted() {
    if (this.option.length == 0) this.filteredOptions = this.options;
    this.filterOptions();
  },
  computed: {
    ...mapStores(useExpressionsStore),
  },
  watch:{
    option(){
      if(this.option!=""){
        this.setColumn();
      }
    }
  }
};
</script>
  