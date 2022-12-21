<script setup>

import { mapStores } from "pinia";
import ProgressSpinner from 'primevue/progressspinner';
import { useTableStore } from "../stores/table/table";
import { CRUDService, RULES, EVALUATE } from "../service/CRUDService";
import TableRuleRow from "../components/ui-utils/TableRuleRow.vue";
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';  
</script>

<template>
  <main class="flex flex-col p-10" v-if="loaded">
    <h1 class="font-bold text-3xl text-indigo-900 mb-4">My rules</h1>
    <p class="mb-4 text-gray-800 text-lg">Just click on any rule to evaluate it!</p>
  
    <div>


 

      <table class="w-full bg-white rounded-xl  shadow-lg ">
        <tr class=" border-b h-16 text-left  text-indigo-900 ">
          <th class="w-1/12 pl-6">No</th>
          <th class="w-1/4">Name</th>
          <th>Rule</th>
        </tr>
        <tr v-for="(rule, index) in rules" :key="index" class="border-b m-1 hover:bg-indigo-100/75  bg-indigo-100/50 cursor-pointer " v-on:click="evalRule(rule.id)">
          <td class="font-light pl-6 text-gray-800">{{ index+1 }}</td>
          <td class="font-semibold text-gray-800">{{ rule.name }}</td>
          <td><TableRuleRow :rule="rule.ruleNaturalLanguage"></TableRuleRow></td>
        </tr>
      </table>
      
    </div>
    <div v-if="registers.length>0">
      <h1 class="font-bold text-3xl text-indigo-900 mb-4 mt-4 mb-6">Results:</h1>
      <div class="p-8 bg-indigo-100/50 rounded-xl shadow-lg">
        <DataTable :value="registers" responsiveLayout="scroll">
            <Column field="code" header="Code"></Column>
            <Column field="name" header="Name"></Column>
            <Column field="category" header="Category"></Column>
            <Column field="quantity" header="Quantity"></Column>
        </DataTable>
      </div>
    </div>

  </main>
  <div v-else class="h-full w-full flex flex-col items-center justify-center">
    <ProgressSpinner/>
    <!--  <h1 class="mb-40 text-gray-900 font-bold text-xl">Loading rules...</h1>-->
  
  </div>
</template>
<script>

export default{
    data(){
      return {
        rules: [],
        loaded:false,
        registers:[{code:'32746', name:"Nicolas", category:"M", quantity:3},{code:'32746', name:"Nicolas", category:"M", quantity:3}]
      }
    },
    mounted(){
        CRUDService.get(RULES,'').then(rules=>{
          this.rules = rules;
          this.loaded = true;
        
        });
    },
    methods:{
      evalRule(ruleId){
        CRUDService.get(EVALUATE, ruleId).then((regs=>{
          console.log(regs);
        }))
     
      }
    }
}

</script>



<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
