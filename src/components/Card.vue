<template>
    <div class="bg-white rounded-lg w-64 flex flex-col items-left shadow-lg p-6">
        <header class="flex items-center mb-4">
            <h3 class="font-bold text-4xl text-indigo-500">
                01
            </h3>
            <p class="pl-1 text-gray-800 text-base">Expression</p>
        </header>
        <main>
            <Column class="mb-2">
            </Column>
            <Operand class="mb-2">
            </Operand>
            <Comparator class="mb-2">
            </Comparator>
            <Value>
            </Value>
        </main>
    </div>
</template>
<script>
import Column from './expression/Column.vue'
import Operand from './expression/Operand.vue'
import Comparator from '../components/expression/Comparator.vue'
import Value from './expression/Value.vue';
export default {
    components:{
        Column,
        Operand,
        Comparator,
        Value
    }
 
};
</script>
