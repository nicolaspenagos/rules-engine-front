<template>
  <div class="flex flex-col items-start">
    <div v-if="filteredOption && modal" class="absolute inset-0" @click="this.modal=false">
    </div>
    <p class="text-gray-500 text-sm italic font-light">b) Select an operand:</p>
    <input
      type="text"
      class="px-4 py-1 z-9 rounded border border-slate-300 text-gray-800 w-24 cursor-pointer"
      v-model="option"
      autocomplete="off"
      readonly
      @focus="modal=true"
    />
    <div v-if="filteredOption && modal" class="z-9">
      <ul class="w-24 text-slate-500 text-sm shadow-lg  absolute bg-white">
        <li
          v-for="(option, index) in filteredOption"
          :key="index"
          class="py-2 cursor-pointer px-4 py-1 rounded hover:bg-gray-100"
          @click="setOption(option)"
        >
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: '',
      options: ['>', '=', '<'],
      filteredOption: [],
      modal:false
    };
  },
  methods: {
    filterOptions() {
      this.filteredOption = this.options.filter((option) => {
        return this.option.toLocaleLowerCase().startsWith(this.option.toLowerCase());
      });
    },
    setOption(filteredOption) {
      this.operand = filteredOption;
      this.modal = false;
    },
  },
  mounted(){
    if(this.option.length==0)
        this.filteredOption = this.options;
    this.filterOptions();
  }
};
</script>

  