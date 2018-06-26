<template>
    <div class="question dd-column">
        <div v-for="(item,index) in arrs" :key="index" class="dd-row dd-h-2side dd-v-center" @click="gotoAnswer(item)">
            <p class="title">{{item.q}}</p>
            <div class="img"><img src="@/assets/img/right.png" alt="》" /></div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            arrs: [
                {
                    q: '机器不做面1111',
                    a:'刚才卡了不好意思刚才按时打算大所打算的撒的撒的撒一一按时的撒按时的撒的撒一一按时的撒按时的撒的撒一一按时的撒按时的撒111'
                },  {
                    q: '扫码没反应2222',
                    a:'刚才卡了不好意思刚才卡了不好意思的撒一一按时的撒按时的撒的撒一一按时的撒按时的撒的撒一一按时的撒按时的撒222'
                },
            ]
        }
    },
    methods:{
        gotoAnswer(_item){
            // this.$router.push('/my/myorder/paymenthasbeen/answer')
            this.$router.push({path:'/my/myorder/paymenthasbeen/answer',query:_item})
        }
    }
}
</script>
<style scoped>
.question>div{
    border-bottom: 1pt solid #ccc;
}
.question>div:last-child{
    border: 0;
}
.title{
    font-size: 14pt;
}
.img{
    width:20pt;
    height: 20pt;
}
.img>img{
    width: 20pt;
    height: 20pt;
}
</style>

