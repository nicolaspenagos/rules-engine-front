<template>
    <div class="flex flex-col items-start">
      <p class="text-gray-500 text-sm italic font-light">c) Select the type value to compare:</p>
      <div class="flex">
        <RadioButton inputId="city1" name="city" value="Chicago" v-model="city" />
        <label for="city1" class="text-gray-800 text-sm ml-1">Chicago</label>
      </div>
      <div class="field-radiobutton">
            <RadioButton inputId="city2" name="city" value="Los Angeles" v-model="city" />
            <label for="city2" class="text-gray-800 text-sm ml-1">Los Angeles</label>
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
			city: null
		}
	}
  };
  </script>
  
    