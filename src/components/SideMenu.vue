<template>
    <aside class="flex flex-col items-center p-4 w-56">
        <div class=" rounded-xl flex items-center justify-center  mb-10  mt-6 ml-auto mr-auto">
            <img src="/perficient.png" class="w-20" draggable="false">
        </div>

        <!--  <MenuBtn btnText="About" :imgPath="img1"  :selected="selectedClass1"></MenuBtn>-->
      
        <MenuBtn btnText="Build rule"  :imgPath="img2" :selected="selectedClass"></MenuBtn>
        <MenuBtn btnText="Evaluate"  :imgPath="img3"  :selected="noSelectedClass"></MenuBtn>
    </aside>
</template>
<script>
import MenuBtn from './ui-utils/MenuBtn.vue';
export default{
    components:{
        MenuBtn
    },
    data(){
        return {
            noSelectedClass:"hover:bg-indigo-50/25 text-white text-sm flex  items-center mb-2 opacity-50 mr-auto ml-3 p-2 w-40 rounded-xl pl-2  cursor-pointer",
            selectedClass: "text-indigo-900 font-semibold hover:bg-indigo-50/75  bg-indigo-50/75 text-white text-sm flex  items-center mb-2 opacity-50 mr-auto ml-3 p-2 w-40 rounded-xl pl-2  cursor-pointer",
            img1:"../about-white.png",
            img2:"../build.png",
            img3:"../evaluate-white.png"
        }
    }
    
}
</script>
