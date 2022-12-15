<script setup>
import Expression from "../components/Expression.vue";
import ExpressionGroup from "../components/ExpressionGroup.vue";
import {mapStores} from "pinia";
import {useExpressionsStore} from "../stores/expressions/expressions.js";
import SelectButton from 'primevue/selectbutton';
</script>

<template>
  <main class="w-full min-h-screen pr-96">
 
  

    <div class="flex flex-col p-10">
      
      <div  v-for="(exp, index) in this.expressionsStore.expressions" :key="index">
        <div v-if="exp=='And'||exp=='Or'" class="font-semibold bg-indigo-900 rounded-3xl w-20 h-10 flex items-center text-white justify-center relative mt-3 mb-3 z-10 relative">
          <p class="z-20 text-sm">{{exp}}</p>
          
            <div class="bg-indigo-900  w-[1.5px] h-[65px] absolute z-0"></div>
   
       
        </div>
        <ExpressionGroup v-else class="z-index10 relative" :expressionIndex="index">

        </ExpressionGroup>
      </div>
      <div class="flex mt-10">
        <div class="bg-indigo-900 w-fit  rounded-3xl shadow-md flex items-center p-3   hover:bg-indigo-700 cursor-pointer" v-on:click="addExpressionGroup">
          <img src="add.png" class="w-6">
          <p class="font-semibold text-sm ml-1 text-white mr-1">Add New Condition Group</p>
        </div>
        <SelectButton v-model="operator" :options="options" aria-labelledby="single" class=" ml-[15px] mt-auto mb-auto mr-4"  />
      </div>
 
    </div>
  </main>
</template>
<script>

import { v4 as generateRandomUUID } from 'uuid';

export default {
   data(){
    return {
    
      rule : [],
      operator: 'And',
            options: ['And', 'Or'],
            expressions: ['Exp1']
    }
  },
  methods:{
    addExpressionGroup(){
  
      this.expressionsStore.addExpressionGroup(this.operator, generateRandomUUID(), this.expressionsStore.expressions.length);
      this.expressionsStore.addExpressionGroup("Expx", generateRandomUUID(), this.expressionsStore.expressions.length);
    }
  }, mounted(){

    this.expressionsStore.addExpressionGroup("Exp1", generateRandomUUID(), 0);
  

  },
  computed:{
    ...mapStores(useExpressionsStore),
  },
  watch:{
    
  }
 
 
};
</script>
