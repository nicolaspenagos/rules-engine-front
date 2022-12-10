<template>
  <div class="flex flex-col items-center">
    <div class="absolute inset-0" @click="this.modal=false">
    </div>
    <p>a) Select a column:</p>
    <input
      type="text"
      class="px-4 py-1 z-10 rounded border border-slate-300"
      v-model="option"
      autocomplete="off"
      @input="filterOptions"
      @focus="modal=true"
    />
    <div v-if="filteredOptions && modal" class="z-10">
      <ul class="w-48 text-slate-500 text-sm shadow-lg">
        <li
          v-for="(filteredOption, index) in filteredOptions"
          :key="index"
          class="py-2 cursor-pointer px-4 py-1 rounded"
          @click="setOption(filteredOption)"
        >
          {{ filteredOption }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      option: "",
      options: ["Name", "Lastame", "Age", "Country", "City"],
      filteredOptions: [],
      modal:false
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
  mounted(){
    if(this.option.length==0)
        this.filteredOptions = this.options;
    this.filterOptions();
  }
};
</script>
