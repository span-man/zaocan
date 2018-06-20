<template>
    <div class="number dd-row">
        <div class="minus" @click="minus" >
            <img v-show="!!number" src="@/assets/img/minus.png" alt="-">
        </div>
        <div class="num" >
          <p v-show="!!number">
            {{number}}            
          </p>
        </div>
        <div class="add" @click="add" >
            <img src="@/assets/img/add.png" alt="+">
        </div>
    </div>
</template>
<script>
import AllData from "@/components/data.js";
export default {
  props: [ "id", "number"],
  methods: {
    add() {
      event.stopPropagation();
      // this.number++;
      // if (this.number >= 1) {
      // }
      console.log("this id--->", this.id);

      // ==========================================

      //这个是当前 add 的item元素
      let tempItem;
      AllData.goods.map((item, index) => {
        if (item.id == this.id) {
          item.num++;
          tempItem = item;
          console.log("当前的 item 是-->", tempItem);
        }
      });

      // 让 弹出层  等于当前点击的

      AllData.popIntro = tempItem;

      /*
    *查询 购物车里是否有 要添加的
    */
      let tempnum = -1;
      AllData.InTheBuyCar.map((item, index) => {
        if (item.id == this.id) {
          item = tempItem;
          tempnum++;
        }
      });
      if (tempnum == -1) {
        AllData.InTheBuyCar.push(tempItem);
      }
      console.log("AllData.InTheBuyCar--->", AllData.InTheBuyCar);

      // ===============上===========================

      this.total();
    },
    minus() {
      event.stopPropagation();
      if (this.number - 1 < 0) {
        return;
      }

      // ===============下===========================

      //这个是当前 add 的item元素
      let tempItem;
      AllData.goods.map((item, index) => {
        if (item.id == this.id) {
          item.num--;
          tempItem = item;
          console.log("当前的 item 是-->", tempItem);
        }
      });

      // 让 弹出层  等于当前点击的

      AllData.popIntro = tempItem;

      /*
    *查询 购物车里是否有 要添加的
    */
      let tempnum = -1;
      AllData.InTheBuyCar.map((item, index) => {
        if (item.id == this.id) {
          item = tempItem;
          tempnum++;
        }
      });
      if (tempnum == -1) {
        AllData.InTheBuyCar.push(tempItem);
      }
      console.log("AllData.InTheBuyCar--->", AllData.InTheBuyCar);

      // ==========================================
      this.total();
    },
    // 合计
    total() {
      // let totalMoney = 0;
      // this.buyCarArrs.map(item => {
      //   totalMoney += item.price * item.num;
      // });
      // console.log(totalMoney);
      // this.totalMoney = totalMoney;
  
      let t = 0;
      AllData.InTheBuyCar.map(item => {
        t += ( parseFloat(item.price,2) * parseFloat(item.num,2));
      });
      AllData.totalMoney = t;
      console.log("ttttt--->",t)
      console.log("AllData.totalMoney--->",AllData.totalMoney)
    }
  }
};
</script>
<style scoped>
.number {
  justify-content: flex-end;
  background: #cccccc;
  width: var(--number-width);
  height: var(--number-height);
}
.number > div {
  flex: 1;
}
.number .num {
  align-items: center;
  align-self: center;
  text-align: center;
}
/* 加减 */
.add,
.minus {
  width: 8pt;
  height: 8pt;
  display: flex;
  align-self: center;
  align-items: center;
  justify-content: center;
}

.add img,
.minus img {
  width: 8pt;
  height: 8pt;
}
</style>

