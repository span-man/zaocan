<template>
    <div class="back dd-row">
        <!-- <h1>我是子组件</h1>
        <h2>{{message}}</h2> -->
        <div class="left-item"><img src="../assets/img/back.png" @click="back(1)" alt="返回"></div>
        <div class="center-item"></div>
        <div class="right-item"></div>
    </div>
</template>
<script>
export default {
  name: "back",
  props: ["message"],
  methods: {
      back(_num){
          console.log(123)
          window.history.back(_num);
      }
  }
};
</script>

<style scoped>
 /* 返回按钮的样式 */
:root{
    --back-height:10vw;
    --back-width:10vw;
}
.back {
  background: rgba(255, 255, 255, 0.8);
  padding: 0 10pt;
}
.back > div {
}
.back > div:first-child {
  width: var(--back-height);
  height: var(--back-height);
}
.back > div:first-child > img {
  width: var(--back-height);
  height: var(--back-height);
}
</style>

