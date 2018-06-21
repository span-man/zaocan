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
export default {
  props: ["id", "number"],
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
      this.AllData.goods.map((item, index) => {
        if (item.id == this.id) {
          item.num++;
          tempItem = item;
          console.log("当前的 item 是-->", tempItem);
        }
      });
      /*
    *查询 购物车里是否有 要添加的
    */
      let tempnum = -1;
      this.AllData.InTheBuyCar.map((item, index) => {
        if (item.id == this.id) {
          item = tempItem;
          tempnum++;
        }
      });
      if (tempnum == -1) {
        this.AllData.InTheBuyCar.push(tempItem);
      }
      console.log("this.AllData.InTheBuyCar--->", this.AllData.InTheBuyCar);

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
      this.AllData.goods.map((item, index) => {
        if (item.id == this.id) {
          item.num--;
          tempItem = item;
          console.log("当前的 item 是-->", tempItem);
        }
      });

      // 让 弹出层  等于当前点击的

      this.AllData.popIntro = tempItem;

      /*
    *查询 购物车里是否有 要添加的
    */
      let tempnum = -1;
      this.AllData.InTheBuyCar.map((item, index) => {
        if (item.id == this.id) {
          item = tempItem;
          tempnum++;
        }
      });
      if (tempnum == -1) {
        this.AllData.InTheBuyCar.push(tempItem);
      }
      console.log("this.AllData.InTheBuyCar--->", this.AllData.InTheBuyCar);

      // ==========================================
      this.total();
    },
    // 合计
    total() {
      let tempIndex;
      let __num = -1;
      this.AllData.InTheBuyCar.map((item, index) => {
        if (item.num == 0) {
          tempIndex = index;
          __num++;
        }
      });
      if (__num != -1) {
        this.AllData.InTheBuyCar.splice(tempIndex, 1);
      }

      let t = 0;
      this.AllData.InTheBuyCar.map(item => {
        t += item.price * item.num;
      });
      // alert(parseFloat(t, 2));

      this.AllData.totalMoney = t.toFixed(2);

      this.$emit("changeTm", t.toFixed(2));
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

