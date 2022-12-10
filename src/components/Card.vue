<template>
    <div class="bg-white rounded-lg w-64 h-80 flex flex-col items-left shadow-lg p-6">
        <header class="flex items-center">
            <h3 class="font-bold text-4xl text-blue-600">
                01
            </h3>
            <p class="pl-1 text-gray-800 text-base">Expression</p>
        </header>
        <main>
            <Column>
            </Column>
            <Operand>
                
            </Operand>
  

        </main>
      
        

    </div>
</template>
<script>
import Column from './expression/Column.vue'
import Operand from './expression/Operand.vue'
export default {
    components:{
        Column,
        Operand
    }
 
};
</script>
