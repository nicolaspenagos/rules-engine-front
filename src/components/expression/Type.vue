<template>
    <div class="flex flex-col items-start">
      <p class="text-gray-500 text-sm italic font-light">c) Select the type value to compare:</p>
      <div class="flex">
        <RadioButton inputId="type1" name="type" value="input" v-model="type" />
        <label for="type1" class="text-gray-800 text-sm ml-1">Input value</label>
      </div>
      <div class="field-radiobutton">
            <RadioButton inputId="type2" name="type" value="column" v-model="type" />
            <label for="type2" class="text-gray-800 text-sm ml-1">Another column</label>
    </div>
    </div>
  </template>
  
  <script>
  import RadioButton from 'primevue/radiobutton'
  export default {
    components:{
        RadioButton
    },
    data() {
		return {
			type: null
		}
	}
  };
  </script>
  
    