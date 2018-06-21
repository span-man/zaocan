<template>
    <div class="buycar dd-fixed-bottom">
        <div class="car" v-show="carBool">
            <!-- 标题 和 清空 -->
            <div class="dd-row dd-h-2side">
                <div>
                    <b>|</b><span>商品明细</span>
                </div>
                <!-- <div>
                    <span @click="cleanAll">清空</span>
                </div> -->
            </div>
            <div class="carFor">
                <div v-for="(item,index) in buyCarArrs" v-bind:key="index" class="item dd-row dd-h-2side ">
                              <!-- 左面的食物图 和食品名称 -->
                            <div class="dd-row dd-h-2side dd-flex1 left">
                                  <div class="dd-row ">
                                  <div class="foodImg">
                                      <img :src="item.pic" alt="商品图片">
                                  </div>
                                  <div>{{item.name}}</div>
                                  </div>
                              <div class="price">
                                  ￥{{item.price}}
                              </div>
                            </div>
                            <!-- 右边的加减 数量 -->
                              <div class="number right">
                                  <Number 
                                  :id="item.id"
                              :number="item.num" 
                                @changeTm="changeTm($event)"
                                  ></Number>
                              </div>
                          </div>

            </div>
          
 

        </div>
        <!-- 点出拉出层的按钮 合计钱数 去结算按钮 -->
        <div class="dd-row dd-h-2side pd">
            <div class="dd-row control">
                <div class="controlOutLayer" @click="outLayer">
                    <img src="@/assets/img/logo.png" alt="点出购物车弹层的按钮">
                </div>
                <div>
                    <span>合计：<b>￥{{tm}}</b></span>
                </div>
            </div>
            <div>
                <button class="btn btn-warning" @click="toPay" >去结算</button>
            </div>
        </div>
    </div>
</template>
<script>
import Number from "@/components/Number";

export default {
  data() {
    return {
      carBool: false /* 其控制 点击了碗之后 弹出层的显示与否 */,
      carBottomStyleBool: false /* 其控制 下方样式 和 禁用与否  */,
      tm: this.AllData.totalMoney,
      buyCarArrs: this.AllData.InTheBuyCar
    };
  },
  mounted() {
  },
  methods: {
    //   右上角的清理 清空
    cleanAll() {
      // this.buyCarArrs = [];
      // this.AllData.goods = [];
      // this.AllData.InTheBuyCar = [];
      // this.AllData.totalMoney = 0;
      // this.carBool = false;
    },
    //弹出层的显示与否
    outLayer() {
      console.log("弹出 弹出层");
      console.log("当前的数据是-->", this.buyCarArrs);
      if (!this.buyCarArrs) {
        console.log(!this.buyCarArrs)
        return false;
      }
      this.carBool = !this.carBool;
    },
    /* 改变总钱数 */
    changeTm(_tm) {
      (this.tm = _tm), (this.AllData.totalMoney = _tm);
    },
    /*
    * 去结算
    */
    toPay() {
      this.$router.push({ path: "/pay" });
    }
  },
  components: {
    Number
  }
};
</script>
<style scoped>
.foodImg {
  width: var(--foodImg-width);
  height: var(--foodImg-height);
}
.foodImg > img {
  width: var(--foodImg-width);
  height: var(--foodImg-height);
}
/* 购物车里的每行元素 */
.car {
  background: var(--buyCar-outLayer-background);
  padding: 5pt;
  border-radius: 4pt 4pt 0 0;
}
.car .item {
  height: var(--buyCar-item-height);
  display: flex;
  align-self: center;
  align-items: center;
}

.car .item .right {
  margin-left: 10pt;
}

/* 最下面的控制弹出层的显示与隐藏 */
.control {
  background: #f1f1f1;
}
.control .controlOutLayer {
  height: 25pt;
  width: 60pt;
  transform: translateY(-8pt);
}
.control .controlOutLayer img {
  height: 25pt;
  width: 60pt;
}
/* 食物的具体 */
.carFor {
  height: 90pt;
  overflow-x: hidden;
  overflow-y: scroll; /* 隐藏滚动条必备 条件 */
  margin-right: -20pt; /* 隐藏滚动条 */
}
.carFor::-scrollbar {
  display: none;
}
</style>

