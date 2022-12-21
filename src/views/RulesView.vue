<script setup>
import { mapStores } from "pinia";
import ProgressSpinner from "primevue/progressspinner";
import { useTableStore } from "../stores/table/table";
import { CRUDService, RULES, EVALUATE } from "../service/CRUDService";
import TableRuleRow from "../components/ui-utils/TableRuleRow.vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import ColumnGroup from "primevue/columngroup"; //optional for column grouping
import Row from "primevue/row";
</script>

<template>
  <main class="flex flex-col p-10 overflow-y-scroll h-full" v-if="loaded">
    <h1 class="font-bold text-3xl text-indigo-900 mb-4">My rules</h1>
    <p class="mb-4 text-gray-800 text-lg">
      Just click on any rule to evaluate it!
    </p>

    <div>
      <table class="w-full bg-white rounded-xl shadow-lg">
        <tr class="border-b h-16 text-left text-indigo-900">
          <th class="w-1/12 pl-6">No</th>
          <th class="w-1/4">Name</th>
          <th>Rule</th>
        </tr>
        <tr
          v-for="(rule, index) in rules"
          :key="index"
          class="
            border-b
            m-1
            hover:bg-indigo-100/75
            bg-indigo-100/50
            cursor-pointer
          "
         
        >
          <td class="font-light pl-6 text-gray-800"  v-on:click="evalRule(rule.id)">{{ index + 1 }}</td>
          <td class="font-semibold text-gray-800"  v-on:click="evalRule(rule.id, rule.ruleNaturalLanguage, rule.name)">{{ rule.name }}</td>
          <td  v-on:click="evalRule(rule.id)">
            <TableRuleRow :rule="rule.ruleNaturalLanguage"></TableRuleRow>
          </td>
          <td>
            <div
              class="
                hover:bg-rose-200
                bg-rose-100
                h-4
                w-4
                rounded-3xl
                flex
                items-center
                justify-center
                mr-4
                cursor-pointer
              "
              v-on:click="deleteRule(rule.id)"
            >
              <div class="h-0.5 w-2 bg-rose-600 rounded-3xl"></div>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div v-if="registers.length > 0" class="mb-20">
      <h1 class="font-bold text-3xl text-indigo-900 mb-4 mt-4 mb-6">
        Result:
      </h1>
      <div class="flex          bg-indigo-100/50 rounded-xl items-center pl-8 mb-6 shadow-lg">
        <h1 class=" text-gray-800 text-lg font-semibold mr-4">{{currentName}}:</h1>
        <TableRuleRow :rule="currentRule" class="pr-4 pl-4"></TableRuleRow>
      </div>
      <div class="p-8 bg-indigo-100/50 rounded-xl shadow-lg">
        <DataTable :value="registers" responsiveLayout="scroll">
          <Column field="isEmployee" header="isEmployee"></Column>
          <Column field="Address" header="Address"></Column>
          <Column field="Married" header="Married"></Column>
          <Column field="Age" header="Age"></Column>
          <Column field="Kilograms" header="Kilograms"></Column>
          <Column field="NumberOfChildren" header="NumberOfChildren"></Column>
          <Column field="Name" header="Name"></Column>
          <Column field="Lastname" header="Lastname"></Column>
        </DataTable>
      </div>
    </div>
  </main>
  <div v-else class="h-full w-full flex flex-col items-center justify-center">
    <ProgressSpinner />
    <!--  <h1 class="mb-40 text-gray-900 font-bold text-xl">Loading rules...</h1>
    '{"isEmployee":false,"Address":"Jardin Plaza","Marr…","Age":20,"NumberOfChildren":1,"Name":"Nicolas"}'
    
    
    
    -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      rules: [],
      loaded: false,
      registers: [],
      currentRule:'',
      currentName:''
    };
  },
  mounted() {
   this.getRules();
  },
  methods: {
    evalRule(ruleId, ruleNaturalLg, name) {
      this.currentRule = ruleNaturalLg;
      this.registers = [];
      this.currentName = name;
      CRUDService.get(EVALUATE, ruleId).then((regs) => {
        regs.forEach((reg) => {
          console.log(reg);
          this.registers.push(JSON.parse(reg.jsonRegister));
          console.log(reg);
        });
      });
    },
    getRules(){
      CRUDService.get(RULES, "").then((rules) => {
      this.rules = rules;
      this.loaded = true;
    });
    },
    deleteRule(ruleId){
      CRUDService.deleteRule(RULES, ruleId).then(()=>{
        this.getRules();
      });
     
    }
  },
};
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
