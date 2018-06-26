<template>
    <div class="dd-column">
        <div class="head dd-row dd-h-2side">
            <div>{{orderItem.dateTime}}</div>
            <p>{{orderItem.status}}</p>
        </div>


        <div class="dd-row dd-h-2side" v-for="(item2,index2) in orderItem.goods" :key="index2">
            <div class="dd-row dd-h-2side">
                <div class="dd-row dd-h-2side">
                    <div class="img"><img :src="item2.pic" alt=""><p>{{item2.name}}</p></div>
                </div>
                <p class="price">X {{item2.num}}</p>
            </div>
            <p class="price">￥{{item2.price}}</p>
        </div>

        <div class="dd-row dd-h-right">
            <div class="btn btn-danger " @click="checkTheDetails">查看详情</div>
        </div>
    </div>
</template>
<script>
export default {
  props: ["orderItem"],
  methods:{
      checkTheDetails(_id){
          this.$router.push('/my/myorder/paymenthasbeen')
      }
  }
};
</script>
<style scoped>
.img {
  width: 40pt;
  height: 40pt;
}
.img > img {
  width: 40pt;
  height: 40pt;
}
</style>

