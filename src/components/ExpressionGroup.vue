<template >
  <div class="shadow-xl rounded-xl bg-white relative">
    <div
      class="
        absolute
        right-4
        top-2
        shadow-md
        p-1
        rounded-full
        cursor-pointer
        hover:bg-red-100
      "
    >
      <img src="trash.png" class="w-5" draggable="false"/>
    </div>

    <main
      v-for="(exp, index) in this.expressionsStore.expressions[expressionGroupIndex]"
      :key="index"
      class=""
    >
      <Expression :expressionId="exp[0]" :index="index" :expressionGroupIndex="expressionGroupIndex"></Expression>
      <div class="relative">
        <p
          class="
            z-20
            text-sm
            font-semibold
            ml-10
            text-white
            bg-indigo-900
            rounded-3xl
            w-14
            h-8
            flex
            items-center
            justify-center
            absolute
            expressionConnector
          "
          v-if="
            index + 1 < this.expressionsStore.expressions[this.expressionGroupIndex].size &&
            this.expressionsStore.expressions[this.expressionGroupIndex].size > 1
          "
        >
          {{ operator }}
        </p>
      </div>
    </main>

    <footer class="background rounded-br-xl rounded-bl-xl flex">
      <div
        class="
          bg-white
          w-fit
          p-0.5
          rounded-3xl
          shadow-md
          flex
          items-center
          p-[10px]
          m-4
          hover:bg-indigo-50
          cursor-pointer
        "
        v-on:click="addExpression"
      >
        <img src="add.png" class="w-6" draggable="false" />
        <p class="font-semibold text-sm ml-1 text-gray-700 mr-1">
          Add New Condition
        </p>
      </div>
      <div class="bg-gray-300 w-[1.5px] ml-1"></div>
      <SelectButton
        v-model="operator"
        :options="options"
        aria-labelledby="single"
        class="ml-6 mt-auto mb-auto mr-4"
      />
      <p class="text-sm mr-auto text-gray-500 mt-auto mb-auto">
        You can only have one logical operator per group
      </p>
    </footer>
  </div>
</template>
<script>
import { mapStores } from "pinia";
import { useExpressionsStore } from "../stores/expressions/expressions.js";
import Expression from "./Expression.vue";
import SelectButton from "primevue/selectbutton";
import { v4 as generateRandomUUID } from "uuid";
import { AND, OR } from "../stores/expressions/expressions.js";
export default {
  props: {
    expressionGroupIndex: Number,
  },
  components: {
    Expression,
    SelectButton,
  },
  computed: {
    ...mapStores(useExpressionsStore),
  },
  methods: {
    addExpression() {
      this.expressionsStore.addExpression(
        "Exp1",
        generateRandomUUID(),
        this.expressionGroupIndex
      );
    },
  },
  data() {
    return {
      operator: AND,
      options: [AND, OR],
      expressions: ["Exp1"],
    };
  },
 
};
</script>
