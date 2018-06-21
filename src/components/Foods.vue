<template>
    <div class="foods">
      <Back></Back>  
        <div class="head">
            <MechineNumber></MechineNumber>
        </div>
        <div class="body">
            <PopIntro ref="child" :son="popData" v-on:changeTm="changeTm($event)"></PopIntro>
            <FoodItem v-for="(item,index) in array" v-bind:key="index" 
            :son="item"   
            :id="item.id" :number="item.num"
            v-on:ffclose="ffclose($event)"
            v-on:changeTm="changeTm($event)"
            ></FoodItem>
        </div>
        <div class="foot">
            <BuyCar ref="child2"></BuyCar>
        </div>
      
    </div>
</template>
<script>
import MechineNumber from "@/components/MechineNumber.vue";
import Back from "@/components/Back.vue";
import FoodItem from "@/components/FoodItem.vue";
import BuyCar from "@/components/BuyCar.vue";
import PopIntro from "@/components/PopIntro.vue";


export default {
  data() {
    return {
      popData: {},
      array: this.AllData.goods
    };
  },
  mounted() {
    console.log("22222222222222",this.AllData.goods)

  },
  components: {
    Back,
    MechineNumber,
    FoodItem,
    BuyCar,
    PopIntro
  },
  methods: {
    ffclose(_son) {
      this.$refs.child.close(_son);
    },

    /* 子组件 fooditem 传来的 改变 合计价格的事件 */
    changeTm(_tm){
      //使用 子组件 buycar 的 changeTm 函数 （参数=当前的总价）
      this.$refs.child2.changeTm(_tm)
    }  
  }
};
</script>
<style scoped>
</style>

