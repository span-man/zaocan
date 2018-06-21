<template>
    <div class="all" v-show="showBool">
         <div class="popIntro dd-column" >
            <div class="head dd-row dd-h-right" @click="close">
                <img src="@/assets/img/logo.png" alt="x">
            </div>
            <div class="body dd-column">
                <div class="dd-row dd-center">
                    <img class="footPic" :src="son.pic" alt="x">
                </div>
                <div class="dd-row dd-v-center">
                    <p>{{son.name}}</p>
                    <p class="stock">库存·{{son.stock}}</p>
                </div>
                <div class="introduce">简介：{{son.intro}}</div>
                <div class="dd-row dd-h-2side">
                    <p>￥{{son.price}}</p>
                    <Number 
                      :id="son.id"
                :number="son.num"
                  @changeTm="changeTm($event)"
                    ></Number>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Number from "@/components/Number.vue";

export default {
  data() {
    return {
       tm: this.AllData.totalMoney,
      showBool: false,
      son:this.AllData.popIntro
    };
  },
  methods: {
      /* 
      如果传过来有数据就让其，传给本页面。
      如果没数据，就只是单纯的让模态框进行显示
      */
    close(_data) {
      if (!!_data) {
        console.log("66666->",_data);
        this.son = _data;
      }
      this.showBool = !this.showBool;
    },
        /* 改变总钱数 */
    changeTm(_tm) {
      this.$emit("changeTm",_tm)
    },
  },
  components: {
    Number
  }
};
</script>
<style scoped>
.all {
  position: fixed;
  width: 100%;
  height: 180vw;
  background: rgba(0, 0, 0, 0.8);
  z-index: 98;
}
.popIntro {
  background: rgba(255, 255, 255, 0.3);
  border-radius: 5pt;
  top: 30vw;
  z-index: 99;
  position: fixed;
  height: 250pt;
  width: 80vw;
  left: 50%;
  margin-left: -40vw;
  padding: 5pt;
  font-size: 12pt;
}
.head img {
  width: 20pt;
  height: 20pt;
}
/* 食物主图 */
.footPic {
  width: 140pt;
  height: 140pt;
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
