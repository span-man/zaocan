<template>
    <div class="itemLink dd-row dd-h-2side" @click="linkTo(itemdata.link)">
        <div class="left dd-row dd-v-center">
            <!-- <div class="icon"><img :src="itemdata.icon" alt="icon"></div> -->
            <div class="icon"><img src="@/assets/img/logo.png" alt="icon"></div>
            <p class="title">{{itemdata.title}}</p>
        </div>
        <div class="right dd-row dd-v-center">
            <p :style="{color:itemdata.introColor}">{{itemdata.intro}}</p>
            <div class="icon"><img src="@/assets/img/logo.png" alt="icon"></div>
        </div>
    </div>
</template>
<script>
export default {
    props:['itemdata'],
    mounted(){
        
    },
    methods:{
        linkTo(_link){
            alert(_link)
            this.$router.push(_link)
        },

    }
}
</script>
<style scoped>
.icon{
    width: 8pt;
    height: 8pt;
    background: #ccc;
}
.icon>img{
    width: 8pt;
    height: 8pt;
}
</style>

