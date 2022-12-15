<template >
  <div class="shadow-xl rounded-xl bg-white relative ">
    <div class="absolute right-4 top-2 shadow-md p-1 rounded-full cursor-pointer hover:bg-red-100">
                <img src="trash.png" class="w-6">
            </div>
    <main class="p-2">
      <Expression></Expression>
    </main>
    <footer class="background rounded-br-xl rounded-bl-xl  flex">
  
        <div class="bg-white w-fit p-0.5 rounded-3xl shadow-md flex items-center p-[10px] m-6  hover:bg-indigo-50 cursor-pointer">
          <img src="add.png" class="w-6">
          <p class="font-semibold text-sm ml-1 text-gray-700 mr-1">Add New Condition</p>
        </div>
        <div class="bg-gray-300   w-[1.5px] ml-1"></div>
   
        <SelectButton v-model="operator" :options="options" aria-labelledby="single" class=" ml-6 mt-auto mb-auto mr-4"  />
        <p class="text-sm mr-auto text-gray-500 mt-auto mb-auto">You can only have a logical operator once inside the group</p>

        

    </footer>
    
  </div>
</template>
<script>
import Expression from "./Expression.vue";
import SelectButton from 'primevue/selectbutton';
export default {
  components: {
    Expression,
    SelectButton
  },
  data() {
        return {
            operator: 'Off',
            options: ['And', 'Or'],
            expressions: ['Exp1']
   
 
           
        }
    }
};
</script>
