<script setup>
import ExpressionGroup from "../components/ExpressionGroup.vue";
import { mapStores } from "pinia";
import {
  useExpressionsStore,
  EXPRESSIONS_LIMIT,
} from "../stores/expressions/expressions.js";
import SelectButton from "primevue/selectbutton";
import { v4 as generateRandomUUID } from "uuid";
import { AND, OR } from "../stores/expressions/expressions.js";
</script>

<template>
  <main class="w-full min-h-screen flex flex-col p-10 pr-96 h-full overflow-y-scroll">

    <div v-for="(exp, index) in this.expressionsStore.expressions" :key="index">
      <div
        v-if="exp == AND || exp == OR"
        class="
          font-semibold
          bg-indigo-900
          rounded-3xl
          w-20
          h-10
          flex
          items-center
          text-white
          justify-center
          relative
          mt-3
          mb-3
          z-10
          relative
 
        "
      >
        <p class="z-20 text-sm">{{ exp }}</p>
        <div class="bg-indigo-900 w-[1.5px] h-[65px] absolute z-0"></div>
      </div>
      <ExpressionGroup
        v-else
        class="z-index10 relative mr-20"
        :expressionGroupIndex="index"
      >
      </ExpressionGroup>
    </div>

    <div class="flex mt-10  mb-12">
      <div
        class="
          bg-indigo-900
          w-fit
          rounded-3xl
          shadow-md
          flex
          items-center
          p-3
          hover:bg-indigo-700
          cursor-pointer
         
        "
        :class="disable"
        v-on:click="addExpressionGroup"
      >
        <img src="add.png" class="w-6" draggable="false"/>
        <p class="font-semibold text-sm ml-1 text-white mr-1">
          Add New Condition Group
        </p>
      </div>

      <SelectButton
        v-model="operator"
        :options="options"
        aria-labelledby="single"
        class="ml-[15px] mt-auto mb-auto mr-4"
      />
    </div>

  </main>
</template>

<script>
export default {
  data() {
    return {
      rule: [],
      operator: AND,
      options: [AND, OR],
      expressions: ["Exp1"],
    };
  },
  methods: {
    
    addExpressionGroup() {
      if(this.expressionsStore.expressionsCounter<EXPRESSIONS_LIMIT){
        this.expressionsStore.addExpression(
        this.operator,
        generateRandomUUID(),
        this.expressionsStore.expressions.length
        
      );
      this.expressionsStore.addExpression(
        "Expx",
        generateRandomUUID(),
        this.expressionsStore.expressions.length
      );
      }
    
      
    },
  },
  mounted() {
    this.expressionsStore.addExpression("Exp1", generateRandomUUID(), 0);
  },
  computed: {
    ...mapStores(useExpressionsStore),
    disable() {
      let _class =
        this.expressionsStore.expressionsCounter >= EXPRESSIONS_LIMIT
          ? "opacity-40 hover:bg-indigo-900 cursor-not-allowed"
          : "";
      return _class;
    }
  },
};
</script>
