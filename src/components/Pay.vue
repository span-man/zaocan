<template>
    <div class="pay dd-column dd-h-center">
        <span>确认支付</span>
        <h1>￥{{forThePayment}}</h1>
        <p>剩余支付时间 {{hour}}:{{minute}}:{{second}}</p>
       
        <button class="btn btn-danger">微信支付</button>
         <button class="btn btn-warning">支付宝</button>
        <Tip v-show="show" :msg="msg"></Tip>
    </div>
</template>
<script>
import Tip from "@/components/Tip";
export default {
  data() {
    return {
      forThePayment: this.AllData.totalMoney,
      hour: "00",
      minute: "00",
      second: "00",
      show: false,
      msg: ">支付失败<"
    };
  },
  mounted() {
    let time = 5;

    let timer = setInterval(() => {
      time--;
      this.formatTime(time);
      if (time < 0 || time == 0) {
        // alert("时间到，返回之前页面");
        this.show = true;
        setTimeout(() => {
          this.show = false;
          clearInterval(timer);
          window.history.back(-1);
        }, 800);
      }
    }, 1000);
  },
  methods: {
    formatTime(_time) {
      this.hour = this.formatTwoPositions(parseInt(_time / 3600));
      this.minute = this.formatTwoPositions(parseInt(_time / 60));
      this.second = this.formatTwoPositions(parseInt(_time % 60));
    },
    /* 遇到 单个字符 给其前面 补零 */
    formatTwoPositions(_arg) {
      //substr(-2)   从倒数第二个数字开始截取
      let newStr = ("0" + _arg).substr(-2);
      return newStr;
    }
  },
  components: {
    Tip
  }
};
</script>
<style scoped>
</style>
