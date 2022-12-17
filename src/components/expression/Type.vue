<template>
  <div class="flex flex-col items-start">
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
}; 
</script>
  
    