<template>
    <div class="foodItem dd-row "  @click='detail' >
      
        <div class="left dd-row dd-center">
            <img class="" :src="son.pic" alt="具体参数">
        </div>
         <div class="right dd-column">
            <div class="dd-row dd-v-center">
                <p>{{son.name}}</p>
                <p class="stock">库存·{{son.stock}}</p>
            </div>
            <div class="introduce">简介：{{son.intro}}</div>
            <div class="dd-row dd-h-2side">
                <p>￥{{son.price}}</p>
                <!-- <Number :data-index="index" v-on:refreshbizlines="total($event,index)"></Number> -->
                <Number 
                :id="id"
                :number="number"
                ></Number>
            </div>
        </div>
    </div>
</template>
<script>
import Number from "@/components/Number";
import PopIntro from "@/components/PopIntro.vue";
export default {
  props: ["son",'id','number'],
  data() {
    return {};
  },
  methods: {
    detail() {
      //   alert("我是 foods的子组件。");
      this.$emit("ffclose");
    }
  },
  components: {
    Number
  }
};
</script>
<style scoped>
.foodItem {
  z-index: 100;
  background: #ccc;
  margin: 5pt 0;
}
.left {
  /* width: 60pt; */
  flex: 1;
}
.left img {
  width: 50pt;
  height: 50pt;
}
.right {
  margin-left: 5pt;
  color: #fff;
  font-size: 12pt;
}
.right .introduce {
  width: 250pt;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* 库存 */
.stock {
  margin-left: 10pt;
  border-radius: 5pt 5pt 5pt 0;
  padding: 0pt 3pt;
  color: #000;
  background: var(--basic-color);
  font-size: 10pt;
  height: 14pt;
  line-height: 14pt;
}
</style>

