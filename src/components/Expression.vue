<template>
    <div class="bg-white rounded-lg  flex flex-row items-left  items-center shadow-lg p-6">

    
            <Column class="mr-6">
            </Column>
            <Operand class="mr-6">
            </Operand>
            <Type class="mr-6" @typeChanged="handleOnTypeChange">
            </Type>
            <Value :valuePlaceHolder="valuePlaceholder">
            </Value>
     
    </div>
</template>
<script>
import Column from './expression/Column.vue'
import Operand from './expression/Operand.vue'
import Type from './expression/Type.vue'
import Value from './expression/Value.vue';
export default {
    components:{
        Column,
        Operand,
        Type,
        Value
    },data(){
    return {
        valuePlaceholder:"Value to compare",
 
    }
  },
  methods:{
    handleOnTypeChange(type){
        this.valuePlaceholder = type;
    }
  }
 
};
</script>
