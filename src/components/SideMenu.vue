<template>
  <aside class="flex flex-col items-center p-4 w-56">
    <div
      class="
        rounded-xl
        flex
        items-center
        justify-center
        mb-10
        mt-6
        ml-auto
        mr-auto
      "
    >
      <img src="/perficient.png" class="w-20" draggable="false" />
    </div>

    <!--  <MenuBtn btnText="About" :imgPath="img1"  :selected="selectedClass1"></MenuBtn>-->
    <nav>
      <RouterLink to="/">
        <MenuBtn
          btnText="Build rule"
          :imgPath="img1"
          :selected="selected1"
          v-on:click="toHomeView"
        />
      </RouterLink>
      <RouterLink to="/rules">
        <MenuBtn
          btnText="Evaluate"
          :imgPath="img2"
          :selected="selected2"
          v-on:click="toRulesView"
        ></MenuBtn>
      </RouterLink>
    </nav>
  </aside>
</template>
<script>
import MenuBtn from "./ui-utils/MenuBtn.vue";
import { useExpressionsStore } from "../stores/expressions/expressions";
import { mapStores } from "pinia";
import { v4 as generateRandomUUID } from "uuid";
import { ExpressionModel } from "../model/ExpressionModel.js";
export default {
  components: {
    MenuBtn,
  },
  data() {
    return {
      noSelectedClass:
        "hover:bg-indigo-50/25 text-white text-sm flex  items-center mb-2 opacity-50 mr-auto ml-3 p-2 w-40 rounded-xl pl-2  cursor-pointer",
      selectedClass:
        "text-indigo-900 font-semibold hover:bg-indigo-50/75  bg-indigo-50/75 text-white text-sm flex  items-center mb-2 opacity-50 mr-auto ml-3 p-2 w-40 rounded-xl pl-2  cursor-pointer",
      img1: "../build.png",
      img2: "../evaluate-white.png",
      selected1: "",
      selected2: "",
    };
  },
  methods: {
    toHomeView() {
      this.img1 = "../build.png";
      this.img2 = "../evaluate-white.png";
      this.selected1 = this.selectedClass;
      this.selected2 = this.noSelectedClass;
      this.$emit("onViewChanged", "Building a new rule");
      this.expressionsStore.clear();

      
    },
    toRulesView() {
      this.img1 = "../build-white.png";
      this.img2 = "../evaluate.png";
      this.selected1 = this.noSelectedClass;
      this.selected2 = this.selectedClass;
      this.$emit("onViewChanged", "Evaluating rules");
    },
  },
  mounted() {
    this.selected1 = this.selectedClass;
    this.selected2 = this.noSelectedClass;
  },
  computed:{
    ...mapStores(useExpressionsStore),

  }
};
</script>
