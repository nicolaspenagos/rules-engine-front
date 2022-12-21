<template>
    <div class="" :class="selected">

        <img :src="imgPath"  :class="customClass" draggable="false">
        <p>{{ btnText }}</p>
    </div>
</template>
<script>
export default {
    props:{
        btnText:String,
        selected:String,
        imgPath:String,
    
    },
    data(){
        return {
            customClass:'w-7 mr-4',
        }
    },
    mounted(){

        if(this.btnText=='Evaluate'){
            this.customClass = 'w-8 mr-2 ml-1';
        }
    }
  
}
</script>
