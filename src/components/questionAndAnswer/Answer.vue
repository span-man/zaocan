<template>
    <div class="answer">
        <h2 class="t">{{qa.q}}</h2>
        <div class="content">{{qa.a}}</div>
    </div>
</template>
<script>
export default {
    data() {
        return{
            qa:this.$route.query
        }
    },
    mounted() {
        // console.log(this.$route.query)
        // this.
    }    
}
</script>
<style scoped>
    .content{
        width: 100%；   
    }
</style>
