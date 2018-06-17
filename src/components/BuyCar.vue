<template>
    <div class="buycar dd-fixed-bottom">
        <div class="car" v-show="carBool">
            <!-- 标题 和 清空 -->
            <div class="dd-row dd-h-2side">
                <div>
                    <b>|</b><span>商品明细</span>
                </div>
                <div>
                    <span @click="cleanAll">清空</span>
                </div>
            </div>


            <div v-for="(item,index) in arrs" v-bind:key="index" class="item dd-row dd-h-2side ">
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
                    <!-- <Number :num="item.num" v-on:total="total"></Number> -->
                    <Number :data-index="index" v-on:refreshbizlines="total($event,index)"></Number>
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
                    <span>合计：<b>￥{{totalMoney}}</b></span>
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
      carBool: false, /* 其控制 点击了碗之后 弹出层的显示与否 */
      carBottomStyleBool: false, /* 其控制 下方样式 和 禁用与否  */
      totalMoney:0,
      arrs: [
        {
          pic:
            "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
          name: "煎饼1",
          price: 1,
          num: 0
        },
        {
          pic:
            "http://huyaimg.msstatic.com/avatar/1093/f5/9f51df52143c14ba7fab3b01849dd4_180_135.jpg?0?424782",
          name: "煎饼1",
          price: 2,
          num: 0
        }
      ]
    };
  },
  mounted(){
    //   this.total();
  },
  methods: {
    //   右上角的清理
    cleanAll() {
      if (!!this.arrs) {
        this.arrs = null;
        console.log(this.arrs);
        this.carBool = false;
      }
    },
    //弹出层的显示与否
    outLayer() {
      // alert("弹出 弹出层")
      if (!this.arrs) {
        return false;
      }
      this.carBool = true;
    },
    // 合计
    total(_event,_index){
        
        console.log("_event-来自子组件的传值：个数 num-->",_event)
        console.log("_index-当前点选的元素的下标-->",_index)

        console.log("this.totalMoney=->",this.totalMoney)
        this.arrs[_index].num=_event;
        let totalMoney=0;
        this.arrs.map((item)=>{
            totalMoney += (item.price * item.num) 
            console.log(item.price);
            console.log(item.num);
        })
        console.log(totalMoney);
        this.totalMoney= totalMoney;
    },
    /*
    * 去结算
    */ 
   toPay() {
       this.$router.push({path:'/pay'})
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
</style>

