<template>
    <div class="foods">
        <div class="head">
            <MechineNumber></MechineNumber>
        </div>
        <div class="body">
            <FoodItem></FoodItem>
        </div>
        <div class="foot">
            <BuyCar></BuyCar>
        </div>
    </div>
</template>
<script>
import MechineNumber from '@/components/MechineNumber.vue' 
import FoodItem from '@/components/FoodItem.vue' 
import BuyCar from '@/components/BuyCar.vue' 
export default {
    components:{
        MechineNumber,
        FoodItem,
        BuyCar
    }
}
</script>
<style scoped>

</style>

