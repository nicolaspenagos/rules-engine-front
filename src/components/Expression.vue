<template>
  <div
    class="
      bg-white
      rounded-lg
      flex flex-row
      items-left items-center
      p-6
      pt-7
      pb-7
      ml-9
    "
  >
    <RemoveExpressionBtn
      :expressionId="expressionId"
      :index="index"
      :expressionGroupIndex="expressionGroupIndex"
    ></RemoveExpressionBtn>
    <Column
      :expressionId="expressionId"
      :expressionGroupIndex="expressionGroupIndex"
      class="mr-6 m"
      :isValue="false"
    >
    </Column>
    <Operand
      :expressionId="expressionId"
      :expressionGroupIndex="expressionGroupIndex"
      class="mr-6"
    >
    </Operand>
    <Type
      :expressionId="expressionId"
      :expressionGroupIndex="expressionGroupIndex"
      class="mr-6"
      @typeChanged="handleOnTypeChange"
    >
    </Type>
    <Value
      :valuePlaceHolder="valuePlaceholder"
      :expressionId="expressionId"
      :expressionGroupIndex="expressionGroupIndex"
      :isValue="true"
      class="mr-8"
    >
    </Value>
  </div>
</template>
<script>
import Column from "./expression/Column.vue";
import Operand from "./expression/Operand.vue";
import Type from "./expression/Type.vue";
import Value from "./expression/Value.vue";
import RemoveExpressionBtn from "./ui-utils/RemoveExpressionBtn.vue";
export default {
  components: {
    Column,
    Operand,
    Type,
    Value,
    RemoveExpressionBtn,
  },
  props: {
    expressionId: String,
    index: Number,
    expressionGroupIndex: Number,
  },
  data() {
    return {
      valuePlaceholder: "Value to compare",
    };
  },
  methods: {
    handleOnTypeChange(type) {
      this.valuePlaceholder = type;
    },
  },
};
</script>
