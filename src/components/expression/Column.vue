<template>
  <div class="flex flex-col items-start">
    <Autocomplete
      placeholderMsg="Column"
      :expressionId="expressionId"
      :expressionGroupIndex="expressionGroupIndex"
    >
    </Autocomplete>
  </div>
</template>
<script>
import Autocomplete from "../ui-utils/Autocomplete.vue";

export default {
  components: {
    Autocomplete,
  },
  props: {
    expressionId: String,
    expressionGroupIndex: Number,
  },
};
</script>
