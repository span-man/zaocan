<template>
    <div class="foods">
        <div class="head">
            <MechineNumber></MechineNumber>
        </div>
        <div class="body">
            <PopIntro ref="child" :son="popData" v-on:useTotal="toUseBuyCarFTotal"></PopIntro>
            <FoodItem v-for="(item,index) in array" v-bind:key="index" 
            :son="item"   
             :id="item.id" :number="item.num"
             ></FoodItem>
        </div>
        <div class="foot">
            <BuyCar ref="child2"></BuyCar>
        </div>
      
    </div>
</template>
<script>
import MechineNumber from "@/components/MechineNumber.vue";
import FoodItem from "@/components/FoodItem.vue";
import BuyCar from "@/components/BuyCar.vue";
import PopIntro from "@/components/PopIntro.vue";

import AllData from "@/components/data.js";

export default {
  data() {
    return {
      popData: {},
      array: AllData.goods
    };
  },
  mounted() {},
  components: {
    MechineNumber,
    FoodItem,
    BuyCar,
    PopIntro
  },
  methods: {
    /* 去使用子组件的 total 方法 */
    toUseBuyCarFTotal(_num) {
      console.log(this);
      this.addItem(this.array[_num]);
      this.$refs.child2.total(_num);
    }
  }
};
</script>
<style scoped>
</style>

