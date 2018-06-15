<template>
    <div class="popLayer dd-column">
        <div class="head dd-row dd-h-right">
            <img src="@/assets/img/logo.png" alt="x">
        </div>
        <div class="body">
            <MechineNumber></MechineNumber>
        </div>
        <div class="foot dd-row dd-center">
            <button class="btn btn-warning " @click="confirm">确定</button>
        </div>
    </div>
</template>
<script>
import MechineNumber from '@/components/MechineNumber.vue' 
export default {
    methods: {
        confirm () {
            alert(123)
            this.$router.push({path: '/foods'})
        }
    },
    components: {
        MechineNumber: MechineNumber
    }
}
</script>
<style scoped>
    .popLayer{
        background: rgba(0,0,0,0.8);
        /* top: 20vw; */
        border-radius: 5pt;
        z-index: 99;
        position: fixed;
        height: 300pt;
        width: 100%;    
        padding: 5pt;
    }
    .head img{
        width: 20pt;
        height: 20pt;
    }
</style>
