<template>
  <div class="m-3 ml-0 bg-white  h-8 rounded-md font-mono flex items-center pl-4">
    <div  v-for="(part, index) in ruleParts" :key="index" class="text-sm">
        <p v-if="part == '(' || part == ')'" class="text-orange-700 ml-1 mr-1 font-bold">{{part}}</p>
        <p v-else-if="part == 'and' || part == 'or'" class="text-sky-800  ml-1 mr-1 font-bold">{{part}}</p>
        <p v-else-if="part == '==' || part == '!=' || part == '>' || part == '<'" class="text-indigo-800  ml-1 mr-1 font-bold">{{part}}</p>
        <p v-else class="text-gray-800">{{part}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rule: String,
  },
  data() {
    return {
      ruleParts: [],
    };
  },
  mounted() {
    this.ruleParts = this.rule.split(" ");

  },
};
</script>
