<template>
    <div class="pop dd-column " v-show="showBool">
        <div class="body dd-column dd-v-center">
            <img src="@/assets/img/logo.png" alt="x">
            <p>{{msg ? msg : 'o.0'}}</p>
        </div>
    </div>
</template>
<script>
/*
这个 tip 是一个提示框 内部文字 由父组件传递
*/

export default {
  props: ["msg"],
  data() {
    return {
      showBool: true
    };
  },
  methods: {
  }
};
</script>
<style scoped>
.pop {
  background: rgba(0, 0, 0, 0.8);
 top: 30vw; 
  border-radius: 5pt;
  z-index: 99;
  position: fixed;
  left: 50%;
  margin-left: -50pt;
  height: 100pt;
  width: 100pt;
  padding: 5pt;
}
.head img {
  width: 20pt;
  height: 20pt;
}
.body {
  color: wheat;
}
.body img {
    margin-bottom: 10pt;
  width: 20pt;
  height: 20pt;
}
</style>
