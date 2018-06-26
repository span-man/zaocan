<template>
    <div class="paymentHasBeen dd-column dd-center">
        <p>取餐码</p>
        <h1>741123</h1>
        <p>24小时没取餐将自动退款到支付账号</p>
        <div>
            <div class="btn btn-danger" @click="saoma">扫码取餐</div>
         
        </div>
        <div>
            <div class="btn btn-warning">导航</div>
        </div>
        <div class="dd-row dd-h-center dd-fixed-bottom">
          <p @click="takeFoodFailure">取餐故障 </p>
          <p> | </p>
          <p> 申请退款</p>
        </div>
           <div v-show="saomaBool" class="popsaoma full-screen">
                <!-- <input id="openCamera" type="button" title="开启摄像头" value="开启摄像头"  /><br />  
                <video id="video" height="120px" autoplay="autoplay"></video><hr />  
                <input id="videoBut" type="button" title="视频" value="视频" /><br />   -->
                <canvas id="canvas" ref="mycanvas"  style="background:red;" height="120px"/>
            </div>
    </div>
</template>
<script>
let draw;
// import Saoma from "./Saoma.js";
export default {
  data() {
    return {
      saomaBool: false
    };
  },
  mounted() {
    let canvas = this.$refs.mycanvas
    console.log(canvas)
  },
  methods: {
    takeFoodFailure() {
      this.$router.push("/my/myorder/paymenthasbeen/question");
    },
    // 打开扫码
    saoma() {
      // this.saomaBool = true;

      this.$router.push("/my/myorder/saoma")
  //  this.$router.push("/my/myorder/paymenthasbeen/question");
      // draw = new Saoma("canvas");
      // draw.videoShow();
  
    },
    getVedio() {}
  }
};
</script>

<style scoped>
.btn {
  width: 150pt;
  border-radius: 20pt;
}
.btn .btn-danger {
  box-shadow: 0 0 4pt 4pt red;
}
.btn .btn-default {
  box-shadow: 0 0 4pt 4pt #000;

  border: 1px solid red;
}
</style>

