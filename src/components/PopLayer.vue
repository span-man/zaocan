<template>
    <div class="popLayer dd-column" v-if="showBool">
        <div class="head dd-row dd-h-right" >
            <div @click="close">
            <img src="@/assets/img/logo.png" alt="x">

            </div>
        </div>
        <div class="body">
            <MechineNumber></MechineNumber>
        </div>
        <div class="foot dd-row dd-center">
            <button class="btn btn-warning " @click="confirm">确定</button>
        </div>
    </div>
</template>
<script>
import MechineNumber from "@/components/MechineNumber.vue";
import Tip from "@/components/Tip.vue";
export default {
  data() {
  return{
        showBool: false
  }
  },
  methods: {
    confirm() {
      this.$router.push({ path: "/foods" });
    },
    //   弹出层右上角的 关闭
    close() {
      this.showBool = !this.showBool;
    }
  },
  components: {
    MechineNumber: MechineNumber,
    Tip: Tip
  }
};
</script>
<style scoped>
.popLayer {
  background: rgba(0, 0, 0, 0.8);
  /* top: 20vw; */
  border-radius: 5pt;
  z-index: 99;
  position: fixed;
  height: 300pt;
  width: 100%;
  padding: 5pt;
}
.head > div {
  width: 20pt;
  height: 20pt;
  background: red;
}
.head > div > img {
  width: 20pt;
  height: 20pt;
}
</style>
