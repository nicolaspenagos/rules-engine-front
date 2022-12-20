<template>
    <aside class="flex flex-col items-center p-4 w-56">
        <div class=" rounded-xl flex items-center justify-center  mb-10  mt-6 ml-auto mr-auto">
            <img src="/perficient.png" class="w-20" draggable="false">
        </div>

        <MenuBtn btnText="About" :imgPath="img1"  :selected="selectedClass1"></MenuBtn>
        <MenuBtn btnText="Build rule"  :imgPath="img2" :selected="selectedClass2"></MenuBtn>
        <MenuBtn btnText="Evaluate"  :imgPath="img3"  :selected="selectedClass1"></MenuBtn>
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
            selectedClass2: "bg-indigo-50/75 text-indigo-900 font-semibold hover:bg-indigo-50/75",
            img1:"../about-white.png",
            img2:"../build.png",
            img3:"../evaluate-white.png"
        }
    }
    
}
</script>
