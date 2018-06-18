<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  comments: {
    
  },
  data () {
    return{
        dragData: {
        lng: null,
        lat: null,
        address: null,
        nearestJunction: null,
        nearestRoad: null,
        nearestPOI: null
      }
    }
  },
  
  methods: {
    dragMap (data) {
      console.log(data)
      this.dragData = {
        lng: data.position.lng,
        lat: data.position.lat,
        address: data.address,
        nearestJunction: data.nearestJunction,
        nearestRoad: data.nearestRoad,
        nearestPOI: data.nearestPOI
      }
    }
  }
}
</script>

<style>
  :root{
    --basic-color:#f8c700; /* 基本色 */
    --foodImg-width:20pt; /* 食物图片的 宽 */
    --foodImg-height:20pt;  /* 食物图片的 高 */
    --number-width:100pt; /* 数量调节模块的 宽度 */
    --number-height:20pt; /* 数量调节模块的 高度 */
    --buyCar-item-height:30pt;   /* 购物车 item 模块的 高度 */
    --buyCar-outLayer-background:#ccc;   /* 购物车 弹出 模块的 背景色 */

  }
/* 这个项目的默认padding 是 */ 
  .pd{
    padding: 10pt;
  }
</style>
