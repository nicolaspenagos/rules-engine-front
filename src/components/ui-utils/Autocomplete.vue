<template>
    <div
      v-if="filteredOptions && modal"
      class="absolute inset-0"
      @click="this.modal = false"
    ></div>
    <input
      type="text"
      class="px-4 py-1 z-10 rounded border border-slate-300 text-sm text-gray-800 text-sm"
      v-model="option"
      autocomplete="off"
      @input="filterOptions"
      @focus="modal = true"
      :placeholder="placeholderMsg"
    />
    <div v-if="filteredOptions && modal" class="z-10">
      <ul class="w-52 text-slate-500 text-sm shadow-lg absolute bg-white">
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
  export default {
    props: {
      placeholderMsg: String
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
    },
    mounted() {
      if (this.option.length == 0) this.filteredOptions = this.options;
      this.filterOptions();
    },
  };
  </script>
  