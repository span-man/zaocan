<template>
<div>
  <div id="allmap"></div>
</div>
</template>
<script>
import MP from "./MapComponent.js";
export default {
  mounted() {
    this.$nextTick(function() {
      MP("4HGTlD4cWwWQbqLMmIxaIrMsPzPvXdBA").then(BMap => {
        var map = new BMap.Map("allmap"); // 创建Map实例
        //var point = new BMap.Point(116.404, 39.915); // 创建点坐标  北京
        var point = new BMap.Point(123.460867,41.856638); // 创建点坐标 富丽阳光
        map.centerAndZoom(point, 15);
        map.enableScrollWheelZoom();
      });
    });
    /**
     * 获取页面的高度
     * 让地图占满页面的高度
     */
    let pageH = window.innerHeight;
    console.log("pageH--->", pageH);
    document.getElementById("allmap").style.height = pageH + "px";
  }
};
</script>
<style scoped>
#allmap {
  width: 100vw;
  height: 100vw;
  margin: 0;
  font-family: "微软雅黑";
}
</style>
