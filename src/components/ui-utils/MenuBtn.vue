<template>
    <div class="text-white text-sm flex  items-center mb-2 opacity-50 mr-auto ml-3 p-2 w-40 rounded-xl pl-2 hover:bg-indigo-50/25 cursor-pointer" :class="selected">

        <img :src="imgPath"  :class="customClass" draggable="false">
        <p>{{ btnText }}</p>
    </div>
</template>
<script>
export default {
    props:{
        btnText:String,
        selected:String,
        imgPath:String
    },
    data(){
        return {
            customClass:'w-7 mr-4',
        }
    },
    mounted(){
        console.log(this.imgPath)
        if(this.btnText=='Evaluate'){
            this.customClass = 'w-8 mr-2 ml-1';
        }
    }
  
}
</script>
