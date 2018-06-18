<template>
    <div class="foods">
        <div class="head">
            <MechineNumber></MechineNumber>
        </div>
        <div class="body">
            <PopIntro   ref="child"></PopIntro>
            <FoodItem v-for="(item,index) in array" :key="item" :son="item" v-on:ffclose="ffclose(index)"></FoodItem>
        </div>
        <div class="foot">
            <BuyCar></BuyCar>
        </div>
      
    </div>
</template>
<script>
import MechineNumber from "@/components/MechineNumber.vue";
import FoodItem from "@/components/FoodItem.vue";
import BuyCar from "@/components/BuyCar.vue";
import PopIntro from "@/components/PopIntro.vue";

export default {
  data() {
    return {
      popdata: {},
      array: [
        {
          pic:
            "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
          name: "111煎饼",
          stock: 11,
          intro: "好吃的煎饼惺惺惜惺惺想111111x 洒洒水少时诵诗书所",
          price: 12.11,
          num: 0
        },
        {
          pic:
            "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
          name: "222煎饼",
          stock: 229,
          intro: "好吃的煎饼惺惺惜惺惺想22222x 洒洒水少时诵诗书所",
          price: 12.22,
          num: 0
        },
        {
          pic:
            "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
          name: "豆浆",
          stock: 11,
          intro: "333好吃的煎饼惺惺惜惺惺想22222x 洒洒水少时诵诗书所",
          price: 33.22,
          num: 0
        }
      ]
    };
  },
  components: {
    MechineNumber,
    FoodItem,
    BuyCar,
    PopIntro
  },
  methods: {
    ffclose(_index) {
      //   alert("我接受到 子组件 PopIntro 来的事件。");
      alert(_index);
      this.$refs.child.close(this.array[_index]);
    }
  }
};
</script>
<style scoped>
</style>

