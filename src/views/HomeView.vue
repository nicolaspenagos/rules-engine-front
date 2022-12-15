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
        <div v-if="exp=='And'||exp=='Or'">
          {{exp}}
        </div>
        <ExpressionGroup class="mb-10" v-else>

        </ExpressionGroup>
      </div>
      <div class="flex">
        <div class="bg-indigo-900 w-fit  rounded-3xl shadow-md flex items-center p-4   hover:bg-indigo-700 cursor-pointer" v-on:click="addExpressionGroup">
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
  
      this.expressionsStore.addExpression(this.operator, generateRandomUUID(), this.expressionsStore.expressions.length);
      this.expressionsStore.addExpression("Expx", generateRandomUUID(), this.expressionsStore.expressions.length);
    }
  }, mounted(){

    this.expressionsStore.addExpression("Exp1", generateRandomUUID(), 0);
  

  },
  computed:{
    ...mapStores(useExpressionsStore),
  },
  watch:{
    
  }
 
 
};
</script>
