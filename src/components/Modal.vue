<template>
  <div
    class="
      flex
      items-center
      justify-center
      fixed
      w-screen
      h-screen
      z-50
      top-0
      bottom-0
      bg-gray-900/50
    "
    @click.self="closeModal"
  >
    <div class="background z-60 h-96 w-96 rounded-xl p-10 relative">
      <img
        src="/save.png"
        draggable="false"
        class="w-28 mr-auto ml-auto mb-4"
      />
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-semibold text-indigo-900 mb-4">
          Let's save it!
        </h1>
        <input
          class="
            bg-white
            px-4
            py-1
            z-10
            rounded-xl
            shadow
            text-base text-gray-800 text-sm
            w-72
            h-10
            mb-4
            outline-0
          "
          placeholder="Rule name"
          v-model="ruleName"
        />
        <button
          class="
            mr-4
            bg-indigo-900
            hover:bg-indigo-700
            text-white
            pl-8
            pr-8
            rounded-xl
            shadow-md
            font-semibold
            cursor-pointer
            h-10
          "
          v-on:click="saveRule"
        >
          Save
        </button>
        <div
          class="
            text-indigo-900 text-sm
            hover:bg-indigo-50
            cursor-pointer
            rounded-3xl
            flex
            w-6
            h-6
            items-center
            justify-center
            font-semibold
            top-6
            right-6
            absolute
          "
          v-on:click="closeModal"
        >
          X
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useExpressionsStore } from "../stores/expressions/expressions.js";
import { mapStores } from "pinia";
export default {
  components: {},
  props: {},
  data() {
    return {
      ruleName: "",
    };
  },
  methods: {
    closeModal() {
      this.ruleName = "";
      this.$emit("closeModal");
    },
    saveRule() {
      const rule = this.expressionsStore.buildRule();
      this.closeModal();
    },
  },
  computed: {
    ...mapStores(useExpressionsStore),
  },
};
</script>